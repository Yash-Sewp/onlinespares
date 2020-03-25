using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using OnLineSparess.Data;
using OnLineSparess.Models;

namespace OnLineSparess.Controllers
{
    [EnableCors("http://localhost:4200", "*", "*")]
    public class UserVerificationController : ApiController
    {


    }
}
