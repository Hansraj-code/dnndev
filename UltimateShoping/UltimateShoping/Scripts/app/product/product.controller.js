(function () {
    angular.module('app.product').controller('productsController', productsController);

    productsController.$inject = ['$scope'];

    function productsController($scope) {
        var product = {
            Id: "tshrt007",
            Name: "T-Shirt",
            Description: "Round Neck T-Shirt",
            //Category: [
            //    { 'id': '1', 'val': "Electronics" },
            //    { 'id': '2', 'val': "Womans Fashion" },
            //    { 'id': '3', 'val': "Mans Fashion" },
            //    { 'id': '4', 'val': "Kids" }
            //],

            //Subcategory: ["Laptop","Mobile","Clothing","Footwear","Toys"],
            Categories: {
                'Electronics': ['Laptop', 'Mobile'],
                'Womans Fashion': ['Clothing', 'Footwear', 'Accessories'],
                'Mans Fashion': ['Clothing', 'Footwear', 'Accessories'],
                'Kids': ['Clothing', 'Footwear', 'Accessories', 'Toys'],
            },
            Brand: "Being Human",
            Colors: "Black",
            Size: "S",
            Price: 1000,
            Material: "Cotton"
        };
        $scope.product = product;
        $scope.msg = "Testmsg";
        $scope.Save = function () {
            alert($scope.subcategories);
            alert($scope.subcategory);
            alert("Save successfull!")
        };
    }


}());

