using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;

namespace UltimateShoping.WebApi.ModelDB
{
    public class USDbContext : DbContext
    {
        public USDbContext()
            : base("DefaultConnection")
        {
        }
        public DbSet<Customer> Customers { get; set; }
    }
}
