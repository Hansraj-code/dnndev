(function (angular) {
    angular.module("app.core", [
        "ngMessages",
         "toastr",
         'auth0.lock',
         'angular-jwt',
         'ui.router'
      // "jcs-autoValidate",

    ]);

}(angular));


(function (angular) {
    angular.module("app.core")
    .filter("maxText", function () {
        return function (text) {
            if (text.length > 10) {
                return text.substring(0, 9) + "...";
            }
            return text;
        }
    })

    .directive('abusingword', function () {
        return {
            require: 'ngModel',
            link: function (scope, elem, attr, ngModel) {
               // var blacklist = attr.blacklist.split(',');

                //For DOM -> model validation
                ngModel.$parsers.unshift(function (value) {
                    //var valid = (value == 'Saale') === false;
                    var valid = (value.indexOf('shit') < 0);
                    ngModel.$setValidity('abusingword', valid);
                    return valid ? value : undefined;
                });

                //For model -> DOM validation
                ngModel.$formatters.unshift(function (value) {
                    ngModel.$setValidity('abusingword', (value.indexOf('shit') <0));
                    return value;
                });
            }
        };
    })


}(angular));