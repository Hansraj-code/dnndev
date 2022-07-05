(function (angular) {
    angular.module("app.core")
   .service('authService', authService);
    authService.$inject = ['lock', 'authManager', 'productToken'];
    function authService(lock, authManager, productToken) {
        let isAutenticated = false;
        function login() {
            lock.show();
        }
        function logout() {
            localStorage.removeItem('id_token');
            authManager.unauthenticate();
            isAutenticated = false;
        }
        // Set up the logic for when a user authenticates
        // This method is called from app.run.js
        function registerAuthenticationListener() {
            lock.on('authenticated', function (authResult) {
                localStorage.setItem('id_token', authResult.idToken);
                authManager.authenticate();
                isAutenticated = true;
                //productToken.set();
            });

            lock.on('authorization_error', function (err) {
                console.log(err);
                isAutenticated = false;
            });
        }

        return {
            login: login,
            logout:logout,
            registerAuthenticationListener: registerAuthenticationListener,
            isAutenticated: isAutenticated
        }
    }
}(angular));