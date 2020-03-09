using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace OnLineSparess.Models
{
    public class User
    {
        // Primary key 
        [Key]
        public int Id { get; set; }

        public string UserName { get; set; }
        public string Password { get; set; }
    }
}