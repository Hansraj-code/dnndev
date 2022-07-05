(function () {
    'use strict';

    angular
      .module('app.login')
      .controller('LoginController', LoginController);
    LoginController.$inject = ['$scope', 'authService'];
    function LoginController($scope, authService) {
        $scope.Login = function () { authService.login() };
        $scope.Logout = function () { authService.logout() };
    }
})();