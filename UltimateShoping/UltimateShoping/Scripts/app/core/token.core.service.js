(function (angular) {
    angular.module("app.core")
   .service('productToken', productToken);
    productToken.$inject = ['$http'];
    function productToken() {
        function GetProductToken($http) {
            return sessionStorage.getItem("productToken");
        }
        function setNewToken() {
            let data = {
                client_secret:"1yWqKqvbHptA4YC-e3vqVbftaQWdC4SuUlZtDV5l7J_5vk8baddj4XC3gZMarrP4",
                audience: "https://api.myapp.com/ultimateshoping",
                client_id:"aT8X2x5PR0frNzwX2XwNR02umdh5bOcB",
                grant_type: "client_credentials"
            }
            let header={
                Accept:"application/json"
            }

            $http.post('https://ultimateshopping.eu.auth0.com/oauth/token', data, header)
            .then(function (data) {
                sessionStorage.setItem("productToken", data.access_token);

            }, function (error) {
                sessionStorage.removeItem("productToken");
            });
        }
        function RemoveToken() {
            sessionStorage.removeItem("productToken");
        }
        return {
            get: GetProductToken,
            set: setNewToken,
            remove:RemoveToken
        }
    }
}(angular));