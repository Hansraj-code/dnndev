using System.Web;
using System.Web.Optimization;

namespace UltimateShoping
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/base").Include(
                        "~/Scripts/Lib/jquery-{version}.js",
                         "~/Scripts/Lib/bootstrap.js",
                      "~/Scripts/Lib/respond.js",
                      "~/Scripts/Lib/angular.js",
                      "~/Scripts/Lib/ui-router.js",
                      "~/Scripts/Lib/angular-messages.js",
                       "~/Scripts/Lib/angular-route.js",
                         "~/Scripts/Lib/angular-toastr.js",
                         "~/Scripts/Lib/angular-toastr.tpls.js"
                      ));

            bundles.Add(new ScriptBundle("~/bundles/auth0").Include(
                       "~/Scripts/Lib/lock.min.js",
                        "~/Scripts/Lib/auth0.js",
                     "~/Scripts/Lib/angular-lock.js",
                     "~/Scripts/Lib/angular-jwt.js"
                     ));

            bundles.Add(new ScriptBundle("~/bundles/ultimateshoping").Include(
                       "~/Scripts/app/core/core.module.js",
                       "~/Scripts/app/Login/login.module.js",
                         "~/Scripts/app/core/notification.core.service.js",
                         "~/Scripts/app/core/authentication.core.service.js",
                         "~/Scripts/app/core/token.core.service.js",
                       "~/Scripts/app/app.js",
                       "~/Scripts/app/product/product.model.js",
                       "~/Scripts/app/models/comments.model.js",
                       "~/Scripts/app/product/product.module.js",
                       "~/Scripts/app/product/product.data.service.js",
                       "~/Scripts/app/Dashboard/dashboard.module.js",
                       "~/Scripts/app/Dashboard/dashboard.data.service.js",
                       "~/Scripts/app/Login/login.controller.js",
                       "~/Scripts/app/Dashboard/dashboard.controller.js",
                       "~/Scripts/app/product/product.controller.js"
                       ));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/Lib/modernizr-*"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                       "~/Content/angular-toastr.css",
                      "~/Content/site.css"));
        }
    }
}
