

module.exports = function (config) {
    config.set({
        basePath: '../..',
        frameworks: ['jasmine'],
        files: [
         "Scripts/angular.js",
         "Scripts/angular-mocks.js",
         "MyScripts/app.js",
         "Test/Test.js"
        ]
    });
};