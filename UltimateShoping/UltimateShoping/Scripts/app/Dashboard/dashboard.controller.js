/// <reference path="../product/product.model.js" />
(function (angular) {
    angular.module("app.dashboard")
        .controller("Dashboard", Dashboard);
    Dashboard.$inject = ['$scope', '$timeout', '$log', '$q',
        'dashboard_comment_data', 'data.product', 'notification'];
    function Dashboard($scope, $timeout, $log, $q, comment, product, notification) {
        $scope.products = [];
        $scope.header = "All Products";
        $scope.comments = [];

        $scope.AddComment = function () {

            //db.ten
            $scope.comments.push(new Comment($scope.Comment, "test", "24-09-2016"));
            $scope.Comment = "";
            $scope.commentForm.comment.$setPristine(true);
            notification.success("","Comment saved successfully")
        }
        $scope.Comment = "";
        $scope.productSort = "Name";
        $scope.productSorter = function (sortOption) {
            $scope.productSort = sortOption;
        }


        init();
        function init() {
            $log.debug("get all product service called.")
            product.getAllProduct().then(function (response) {
                let productlist = [];
                let data = response.data;
                for (var i = 0; i < data.length; i++) {
                    productlist.push(new Product(data[i].Id, data[i].Name, "", data[i].Description, data[i].Price));
                }
                $scope.products = productlist;
            });
            $log.debug("received data from get all product service.")

            $scope.comments = comment.getComments();

        }

    }
}(angular));


