(function() {
    var myApp = angular.module('myApp');

    var MainController = function($scope, greetingService) {
        var onSuccess = function(res) {
            $scope.greeting = res.data.text;
        };
        var onError = function(res) {
            $scope.greeting = "Error retrieving data.";
        };
        var refreshGreeting = function(name) {
            if (name) {
                greetingService.normalGreeting(name)
                    .then(onSuccess, onError);
            }
        };

        $scope.refreshGreeting = refreshGreeting;
        $scope.model = {
            name: "anonymous",
            greeting: "Hello, " + name
        };
    };

    myApp.controller('MainController',
        ['$scope', 'greetingService', MainController]);
}());

