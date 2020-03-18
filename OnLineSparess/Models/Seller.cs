using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace OnLineSparess.Models
{
    public class Seller
    {
        [Key]
        public int Id { get; set; }

        // Persons personal info
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string EmailAddress { get; set; }
        public int CellNumber { get; set; }
        public string Location { get; set; }

        // Car info
        public string Title { get; set; }
        public string Make { get; set; }
        public string Model { get; set; }
        public string PartNumber { get; set; }
        public string Description { get; set; }
        public int Price { get; set; }

        public string ImageOne { get; set; }
        public string ImageTwo { get; set; }
        public string ImageThree { get; set; }
        public string ImageFour { get; set; }
        public string ImageFive { get; set; }

    }
}