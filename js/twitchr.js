(function(){
    angular.module('TwitchApp', ['ngRoute'])
        .config(['$routeProvider', function($routeProvider){
            $routeProvider
                .when('/featured', {
                    templateUrl: 'featured.html',
                    controller: 'twitchController'
                })
                .when('/codecamp', {
                    templateUrl: 'codecamp.html',
                    controller: 'campController'
                })
                .when('/search', {
                    templateUrl: 'search.html',
                    controller: 'searchController'
                })
                .otherwise({redirectTo: '/featured'});
        }]);
}());



