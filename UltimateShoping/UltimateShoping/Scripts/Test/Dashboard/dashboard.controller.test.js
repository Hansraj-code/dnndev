/// <reference path="../../Lib/angular.js" />
/// <reference path="../../Lib/angular-mocks.js" />
/// <reference path="../../app/Dashboard/dashboard.module.js" />
/// <reference path="../../app/Dashboard/dashboard.controller.js" />

//describe('dashboard', function () {
//    //Arrangement 
//    beforeEach(angular.mock.module("app.dashboard"));
//    var $controller;
//    beforeEach(angular.mock.inject(function (_$controller_) {
//        $controller = _$controller_;
//    }));
//    describe('Add To Cart 1', function () {
//        it('Product Available', function () {
//            var $scope = {};
           
//            var controller = $controller("Dashboard", { $scope: $scope });
         
//            expect(3).toBe(3);
//        });
//    });
//});
function sum(a, b) { return a + b; }
describe('Complex', function () {
    it('sum', function () {
        let expected = 100;
        let result = sum(50, 50);
        expect(result).toBe(expected);
    });
});
