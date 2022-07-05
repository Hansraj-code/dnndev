using Auth0.Owin;
using Microsoft.Owin;
using Microsoft.Owin.Cors;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.Jwt;
using Owin;
using System.Configuration;
using System.IdentityModel.Tokens;

[assembly: OwinStartup(typeof(UltimateShoping.WebApi.Startup))]
namespace UltimateShoping.WebApi
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            //var config = new HttpConfiguration();
            //WebApi.WebApiConfig.Register(config);
            app.UseCors(CorsOptions.AllowAll);
            //app.UseWebApi(config);

            ConfigureAuthZero(app);
        }

        private void ConfigureAuthZero(IAppBuilder app)
        {
            //var issuer = "https://" + ConfigurationManager.AppSettings["auth0:Domain"]+"/";
            //var audience = ConfigurationManager.AppSettings["auth0:ClientId"];
            //var secret = ConfigurationManager.AppSettings["auth0:ClientSecret"];

            //app.UseJwtBearerAuthentication(new Microsoft.Owin.Security.Jwt.JwtBearerAuthenticationOptions
            //{
            //    AuthenticationMode = Microsoft.Owin.Security.AuthenticationMode.Active,
            //    AllowedAudiences = new[] { audience },
            //    IssuerSecurityTokenProviders = new[]
            //    {
            //        new SymmetricKeyIssuerSecurityTokenProvider(issuer,secret)
            //    }

            //});

            var domain = $"https://{ConfigurationManager.AppSettings["auth0:Domain"]}/";
            var apiIdentifier = ConfigurationManager.AppSettings["auth0:Identifier"];

            var keyResolver = new OpenIdConnectSigningKeyResolver(domain);
            app.UseJwtBearerAuthentication(
                new JwtBearerAuthenticationOptions
                {
                    AuthenticationMode = AuthenticationMode.Active,
                    TokenValidationParameters = new TokenValidationParameters()
                    {
                        ValidAudience = apiIdentifier,
                        ValidIssuer = domain,
                        IssuerSigningKeyResolver = (token, securityToken, identifier, parameters) => keyResolver.GetSigningKey(identifier)
                    }
                });
        }
    }
}
