/// <reference path="../../Lib/angular.js" />
/// <reference path="../../Lib/angular-mocks.js" />
/// <reference path="../../app/product/product.module.js" />
/// <reference path="../../app/product/product.model.js" />
/// <reference path="../../app/product/product.data.service.js" />


//describe('product service', function () {
//    var productService, httpBackend;
//    //Arrangement 
//    beforeEach(angular.mock.module("app.product"));

//    beforeEach(inject(function ($httpBackend, _productdata_) {
//        productService = _productdata_;
//        httpBackend = $httpBackend;
//    }));
//    afterEach(function () {
//        httpBackend.verifyNoOutstandingExpectation();
//        httpBackend.verifyNoOutstandingRequest();
//    });

//    it('Product Available', function () {
//        var returnData = {};
//        //7. expectGET to make sure this is called once.
//        httpBackend.expectGET("http://localhost:4122/Products").respond(returnData);

//        //8. make the call.
//        var returnedPromise = productService.getAllProduct();

//        //9. set up a handler for the response, that will put the result
//        // into a variable in this scope for you to test.
//        var result;
//        returnedPromise.then(function (response) {
//            result = response.data;
//        });

//        //10. flush the backend to "execute" the request to do the expectedGET assertion.
//        httpBackend.flush();

//        //11. check the result. 
//        expect(result).toEqual(returnData);
        
//    });
//});
