using OnLineSparess.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace OnLineSparess.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext() : base("name=onlinespares")
        {
        }
        public  DbSet<Entry> Entries { get; set; }

    }
}