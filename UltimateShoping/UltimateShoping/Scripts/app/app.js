/// <reference path="../Lib/angular.js" />

(function (angular) {
    angular.module('myapp', [
        "app.core",
        "app.product",
        "app.login",
        "app.dashboard"
    ])
    .config(config)


    function config($stateProvider, lockProvider, $urlRouterProvider, $provide, $httpProvider) {

        $stateProvider
          .state('Dashboard', {
              url: '/Dashboard',
              controller: 'Dashboard',
              templateUrl: 'Home/Index',
              //controllerAs: 'vm'
          })
         .state('login', {
             url: '/login',
             controller: 'LoginController',
             templateUrl: 'components/login/login.html',
             //controllerAs: 'vm'
         });;

        lockProvider.init({
            clientID: 'fhPcxAaH0C5Ga2jwk0FOxZ2DxccsJAHn',
            domain: 'ultimateshopping.eu.auth0.com',
            options: {
                _idTokenVerification: false
            }
        });

        $urlRouterProvider.otherwise('/Dashboard');
        $provide.factory('productHttpInterceptor', function ($q) {
            return {
                // optional method
                'request': function (config) {
                    // do something on success
                    if (config.url.toLowerCase().indexOf('product') > -1) {
                        config.headers["Content-Type"] = "application/json";
                        config.headers["Accept"] = "application/json";
                        config.headers["Authorization"] = "Bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlFVWTJNak15UWpjNVJETkdRak13T1VaRE16YzJNa0pDT0RVd1JEaENRVUV3TTBZd09USTFRdyJ9.eyJpc3MiOiJodHRwczovL3VsdGltYXRlc2hvcHBpbmcuZXUuYXV0aDAuY29tLyIsInN1YiI6ImFUOFgyeDVQUjBmck56d1gyWHdOUjAydW1kaDViT2NCQGNsaWVudHMiLCJhdWQiOiJodHRwczovL2FwaS5teWFwcC5jb20vdWx0aW1hdGVzaG9waW5nIiwiZXhwIjoxNDkzNzA5ODY4LCJpYXQiOjE0OTM2MjM0NjgsInNjb3BlIjoiIn0.QaTuW6vl8HMwFwh82vnX7LcXzkqc0WlWbSZd2li6JvOECuuGL1vukvpvpcgf2SDDfedvJ9-QQojFdJ3C_OAkNYNIvNYAju4sqO0cBhrNfLj37r5y37shCEbxatroONkmP4KbyAnOrt-TnbVA2YHhZkQj0iA0hJZmi0mATNG6WBX6dHUQij2rbPDFfrsbuzeQkPc4KLRAAca17LyxFbBWQ2jt4y6op-nFCjGxKh-v1xh4WFnxFBEIgX6Vdp5_J75YgjCofDxD08U7Z9CPQ2fIFUwE8-MpMv1uwrQMnH_3a7_NK0sGFRqDa1g735jmGw5FFlj95MHAqneHmPF8YhJDfQ";
                    }
                    return config;
                },
            };
        });
        $httpProvider.interceptors.push('productHttpInterceptor');

    }
}(angular));



(function (angular) {
    angular.module('myapp')
    .run(run)


    run.$inject = ['$rootScope', 'authService', 'lock','$http'];

    function run($rootScope, authService, lock,$http) {
        // Put the authService on $rootScope so its methods
        // can be accessed from the nav bar
        $rootScope.authService = authService;

        // Register the authentication listener that is
        // set up in auth.service.js
        authService.registerAuthenticationListener();

        // Register the synchronous hash parser
        // when using UI Router
        lock.interceptHash();

        let data = {
            client_secret: "1yWqKqvbHptA4YC-e3vqVbftaQWdC4SuUlZtDV5l7J_5vk8baddj4XC3gZMarrP4",
            audience: "https://api.myapp.com/ultimateshoping",
            client_id: "aT8X2x5PR0frNzwX2XwNR02umdh5bOcB",
            grant_type: "client_credentials"
        }
        let header = {
            Accept: "application/json",
            "Access-Control-Allow-Origin":"*"
        }

        $http.post('https://ultimateshopping.eu.auth0.com/oauth/token', data, header)
        .then(function (data) {
            sessionStorage.setItem("productToken", data.access_token);

        }, function (error) {
            sessionStorage.removeItem("productToken");
        });
    }

}(angular));

