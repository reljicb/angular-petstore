(function() {
    var myApp = angular.module('myApp');
    var serviceUrl = 'http://localhost:8080';

    var greetingService = function($http) {
        var normalGreeting = function(name) {
            return $http.get(serviceUrl + '/greeting/' + name);
            //return $http.get('https://api.github.com/users/christianwilkie');
        };
        var politeGreeting = function(name) {
            return "Hello good sir " + name;
        };
        return {
            normalGreeting: normalGreeting,
            politeGreeting: politeGreeting
        }
    };

    myApp.factory('greetingService',
        ['$http', greetingService]);
}());
