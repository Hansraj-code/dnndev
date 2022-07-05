using Microsoft.Owin.Security;
using Microsoft.Owin.Security.Cookies;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;


namespace UltimateShoping.Controllers
{
    public class AccountController : Controller
    {
        public ActionResult Login(string returnUrl)
        {
            return new ChallengeResult("Auth0", returnUrl ?? Url.Action("Index", "Home"));
        }

        [Authorize]
        public void Logout()
        {
            HttpContext.GetOwinContext().Authentication.SignOut(CookieAuthenticationDefaults.AuthenticationType);
            HttpContext.GetOwinContext().Authentication.SignOut(new AuthenticationProperties
            {
                RedirectUri = Url.Action("Index", "Home")
            }, "Auth0");
        }

        [Authorize]
        public ActionResult Claims()
        {
            return View();
        }
    }
}