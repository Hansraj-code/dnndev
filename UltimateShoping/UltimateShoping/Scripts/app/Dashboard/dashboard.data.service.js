(function () {
    angular.module("app.dashboard")
    .service("dashboard_comment_data", function () {
        this.getComments = function () {
            let comments = [];
            comments.push(new Comment("SOme Comment", "Sam", "25-06-2016"));
            comments.push(new Comment("SOme Comment", "Ram", "25-07-2016"));
            comments.push(new Comment("SOme Comment", "Tom", "26-06-2016"));
            comments.push(new Comment("SOme Comment", "Cam", "29-06-2016"));
            return comments;
        }
    });
    
}(angular));