(function () {
    angular.module("app.product")
        .service("data.product", function ($http, $log, $q) {
            this.getAllProduct = function (current, pagesize) {
                return $http.get("http://localhost:4122/Products");
               
            }
        });
}(angular));