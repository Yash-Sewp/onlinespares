using Microsoft.IdentityModel.Tokens;
using OnLineSparess.Data;
using OnLineSparess.Models;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Mail;
using System.Security.Claims;
using System.Text;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Routing;

namespace OnLineSparess.Controllers
{
    [EnableCors("http://localhost:4200", "*", "*")]
    [RoutePrefix("auth")]
    public class AuthenticationController : ApiController
    {
        [Route("login")]
        [HttpPost]
        public IHttpActionResult Login([FromBody] User user)
        {
            if (string.IsNullOrEmpty(user.UserName) || string.IsNullOrEmpty(user.Password))
                return BadRequest("Enter your username and password");

            try
            {
                using (var context = new AppDbContext())
                {
                    var exists = context.Users.FirstOrDefault(n => n.UserName == user.UserName && n.Password == user.Password);
                    if (exists == null)
                    {
                        return BadRequest("Wrong credentials");

                    }
                    var check = context.UserActivations.FirstOrDefault(p => p.Id == exists.Id);
                    if (check == null) return Ok(CreateToken(user));
                    // return BadRequest(check.ActivationCode.ToString());
                    return Ok(check);
                }
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

        // Register user
        [Route("register")]
        [HttpPost]
        public IHttpActionResult Register([FromBody] User user)
        {
            try
            {
                using (var context = new AppDbContext())
                {
                    var exists = context.Users.Any(n => n.UserName == user.UserName);
                    if (exists) return BadRequest("User already exists");

                    // Add user to database
                    context.Users.Add(user);
                    context.SaveChanges();
                    SendActivationEmail(user);
                    return Ok(user);
         
                }
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

        // Verify email
        [Route("verify/{code}")]
        [HttpGet]
        public IHttpActionResult GetActivation(string code)
        {
            try
            {
                using (var context = new AppDbContext())
                {
                    Guid activationCode = new Guid(code.ToString());
                    var active = context.UserActivations.Where(p => p.ActivationCode == activationCode).FirstOrDefault();
                    if(active != null)
                    {
                        context.UserActivations.Remove(active);
                        context.SaveChanges();
                    }
                    
                    return Ok();
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

        // Send confirmation email + save activation code
        private void SendActivationEmail(User user)
        {
            Guid activationCode = Guid.NewGuid();
            using (var context = new AppDbContext())
            {
                context.UserActivations.Add(new UserActivation
                {
                    Id = user.Id,
                    ActivationCode = activationCode
                });
                context.SaveChanges();

                var fromAddress = new MailAddress("yash.sewparthab.hellocomputer@gmail.com", "From Name");
                var toAddress = new MailAddress(user.EmailAddress, user.UserName);
                string fromPassword = "fcbafrica1";
                string subject = "Account Activation";
                string body = "Hello " + user.UserName + ",";
                body += "<br /><br />Please click the following link to activate your account";
                body += "<br /><a href = '" + string.Format("{0}://{1}/auth/verify/{2}", Request.RequestUri.Scheme, Request.RequestUri.Authority, activationCode) + "'>Click here to activate your account.</a>";
                body += "<br /><br />Thanks";

                var smtp = new SmtpClient
                {
                    Host = "smtp.gmail.com",
                    Port = 587,
                    EnableSsl = true,
                    DeliveryMethod = SmtpDeliveryMethod.Network,
                    UseDefaultCredentials = false,
                    Credentials = new NetworkCredential(fromAddress.Address, fromPassword),
                    Timeout = 20000
                };

                try
                {
                    using (var message = new MailMessage(fromAddress, toAddress)
                    {
                        Subject = subject,
                        Body = body
                    })
                    {
                        smtp.Send(message);
                        Console.WriteLine("email was sent successfully!");
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine("failed to send email with the following error:");
                    Console.WriteLine(ex.Message);
                }
            }
        }


        // Token to identify a user
        private JWTPackage CreateToken(User user)
        {

            // Create, sterlize, validate tokens (JwtSecurityTokenHandler)
            var tokenHandler = new JwtSecurityTokenHandler();

            // can have more than one claim 
            var claims = new ClaimsIdentity(new[] {
                new Claim(ClaimTypes.Email, user.UserName)
            });

            const string secretKey = "your secret key does here";
            var securityKey = new SymmetricSecurityKey(Encoding.Default.GetBytes(secretKey));
            var signinCredentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256Signature);

            var token = (JwtSecurityToken)tokenHandler.CreateJwtSecurityToken(
                subject: claims,
                signingCredentials: signinCredentials
                );

            var tokenString = tokenHandler.WriteToken(token);

            return new JWTPackage()
            {
                UserName = user.UserName,
                Token = tokenString
            };
        }
    }
}

public class JWTPackage
{
    public string Token { get; set; }
    public string UserName { get; set; }
}