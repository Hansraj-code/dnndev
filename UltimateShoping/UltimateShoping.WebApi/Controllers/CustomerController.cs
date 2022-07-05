using System.Linq;
using System.Web.Http;
using UltimateShoping.WebApi.ModelDB;

namespace UltimateShoping.WebApi.Controllers
{
    public class CustomerController : ApiController
    {
        public IHttpActionResult Get(int id)
        {
            USDbContext db = new ModelDB.USDbContext();
            var a = db.Customers.ToList();
            return Ok(a);
        }
    }
}
