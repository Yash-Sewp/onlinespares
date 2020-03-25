using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace OnLineSparess.Models
{
    public class UserActivation
    {
        [Key]
        public int Id { get; set; }
        public Guid ActivationCode { get; set; }

    }
}