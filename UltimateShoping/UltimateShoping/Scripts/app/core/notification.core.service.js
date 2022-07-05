(function (angular) {
    angular.module("app.core")
    .service("notification",Notification);
    Notification.$inject = ['$log', 'toastr'];
    function Notification(log,toastr)
    {
        return {
            success: function (title, msg) {
                toastr.success(title, msg, {
                    closeButton: true,
                    
                    timeOut:0
                });
            }
        }
    }
}(angular));