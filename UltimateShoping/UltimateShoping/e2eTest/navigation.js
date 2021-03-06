'use strict';

describe('myapp', function () {


    it('should automatically redirect to /view1 when location hash/fragment is empty', function () {
        browser.get('index.chtml');
        expect(browser.getLocationAbsUrl()).toMatch("/ContactUS");
    });


    describe('ContactUS', function () {

        beforeEach(function () {
            browser.get('index.Chtml/view1');
        });


        it('should render view1 when user navigates to /view1', function () {
            expect(element.all(by.css('[ng-view] p')).first().getText()).
              toMatch(/partial for view 1/);
        });

    });


    describe('view2', function () {

        beforeEach(function () {
            browser.get('index.html#!/view2');
        });


        it('should render view2 when user navigates to /view2', function () {
            expect(element.all(by.css('[ng-view] p')).first().getText()).
              toMatch(/partial for view 2/);
        });

    });
});