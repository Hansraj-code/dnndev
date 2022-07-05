using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
using System.Web.Http;
using System.Web.Http.Controllers;
using UltimateShoping.WebApi.Models;

namespace UltimateShoping.WebApi.Controllers
{
    [Authorize]
    //[ScopeAuthorize("read:product")]
    public class ProductController : ApiController
    {
        // GET api/values
        [Route("Products")]
        public IEnumerable<Product> Get()
        {
            return new List<Product> {
                new Product
                {
                    Id =1,
                    Name = "Cricket Bat",
                    Description="Best Cricket Bat made in india",
                    Discount = 50,
                    Price = 700
                },
                 new Product
                {
                    Id =2,
                    Name = "Mouse",
                    Description="Wireless mouse with gaming button",
                    Discount = 50,
                    Price = 100
                },
                  new Product
                {
                    Id =3,
                    Name = "Laptop",
                    Description="High performance laptop with terabytes of data",
                    Discount = 50,
                    Price = 25000
                }
            };
        }
        [Route("Product/{id}")]
        public IEnumerable<Product> Get(int id)
        {
            IList<Product> Products =  new List<Product> {
                new Product
                {
                    Id =1,
                    Name = "Cricket Bat",
                    Description="Cricket Bat",
                    Discount = 50,
                    Price = 700
                },
                 new Product
                {
                    Id =2,
                    Name = "Mouse",
                    Description="Computer Mouse",
                    Discount = 50,
                    Price = 700
                },
                  new Product
                {
                    Id =3,
                    Name = "Laptop",
                    Description="Laptop",
                    Discount = 50,
                    Price = 700
                }
            };

            return Products.Where(x => x.Id == id);
        }
    }



    public class ScopeAuthorizeAttribute : AuthorizeAttribute
    {
        private readonly string scope;

        public ScopeAuthorizeAttribute(string scope)
        {
            this.scope = scope;
        }
        public override void OnAuthorization(HttpActionContext actionContext)
        {
            base.OnAuthorization(actionContext);

            ClaimsPrincipal principal = actionContext.ControllerContext.RequestContext.Principal as ClaimsPrincipal;
            if (principal != null)
            {
                // If user does not have the scope claim, get out of here
                if (principal.HasClaim(c => c.Type == "scope"))
                {

                    // Split the scopes string into an array
                    var scopes = principal.Claims.FirstOrDefault(c => c.Type == "scope").Value.Split(' ');

                    // Succeed if the scope array contains the required scope
                    if (scopes.Any(s => s == scope))
                        return;
                }
            }

            HandleUnauthorizedRequest(actionContext);
        }
    }
}
