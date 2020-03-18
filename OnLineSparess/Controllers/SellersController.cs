using OnLineSparess.Data;
using OnLineSparess.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace OnLineSparess.Controllers
{
    [EnableCors("http://localhost:4200", "*", "*")]
    public class SellersController : ApiController
    {
        // Get single Entry
        [HttpGet]
        public IHttpActionResult GetSeller(int id)
        {
            try
            {
                using (var context = new AppDbContext())
                {
                    var seller = context.Sellers.FirstOrDefault(n => n.Id == id);
                    if (seller == null) return NotFound();
                    return Ok(seller);
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

        // Get All Sellers
        [HttpGet]
        public IHttpActionResult GetSellers()
        {
            try
            {
                //using statement - opens the connection string and closes once done
                using (var context = new AppDbContext())
                {
                    var sellers = context.Sellers.ToList();
                    return Ok(sellers);
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }


        // Post Seller item
        [HttpPost]
        public IHttpActionResult PostSeller([FromBody] Seller seller)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            try
            {
                using (var context = new AppDbContext())
                {
                    context.Sellers.Add(seller);
                    context.SaveChanges();

                    return Ok("seller was created!");
                }
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }


        }

        // Update Seller Item
        [HttpPut]
        public IHttpActionResult UpdateSeller(int id, [FromBody]Seller seller)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);
            if (id != seller.Id) return BadRequest();

            try
            {
                using (var context = new AppDbContext())
                {
                    var oldSeller = context.Sellers.FirstOrDefault(n => n.Id == id);
                    if (oldSeller == null) return NotFound();

                    oldSeller.FirstName = seller.FirstName;
                    oldSeller.LastName = seller.LastName;
                    oldSeller.EmailAddress = seller.EmailAddress;
                    oldSeller.CellNumber = seller.CellNumber;
                    oldSeller.Location = seller.Location;

                    oldSeller.Title = seller.Title;
                    oldSeller.Make = seller.Make;
                    oldSeller.Model = seller.Model;
                    oldSeller.PartNumber = seller.PartNumber;
                    oldSeller.Description = seller.Description;
                    oldSeller.Price = seller.Price;

                    oldSeller.ImageOne = seller.ImageOne;
                    oldSeller.ImageTwo = seller.ImageTwo;
                    oldSeller.ImageThree = seller.ImageThree;
                    oldSeller.ImageFour = seller.ImageFour;
                    oldSeller.ImageFive = seller.ImageFive;

                    context.SaveChanges();
                    return Ok("Seller Item updated!");
                }
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }


        }

        // Delete Seller Item
        [HttpDelete]
        public IHttpActionResult DeleteSeller(int id)
        {
            try
            {
                using (var context = new AppDbContext())
                {
                    var seller = context.Sellers.FirstOrDefault(n => n.Id == id);
                    if (seller == null) return NotFound();

                    context.Sellers.Remove(seller);
                    context.SaveChanges();

                    return Ok("Seller Item deleted!");
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        [Route("api/sellers/search/{search}")]
        public IHttpActionResult SearchSeller(string search)
        {
            try
            {
                using (var context = new AppDbContext())
                {
                    var seller = context.Sellers.Where(c => c.Title.Contains(search) ||
                    c.EmailAddress.Contains(search) || c.Location.Contains(search) ||
                    c.FirstName.Contains(search) || c.LastName.Contains(search) ||
                    c.Make.Contains(search) || c.Model.Contains(search) || c.Description.Contains(search))
                    .ToList();
                    if (seller == null) return NotFound();
                    return Ok(seller);
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }
    }
}
