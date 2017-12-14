angular.module('JComerce',['ngRoute', 'ngResource',  'ngMaterial'])
  .config(function($routeProvider) {

    $routeProvider.when('/users', {
      templateUrl: 'partials/users.html',
      controller: 'UsersController'
    });

    $routeProvider.when('/user/:userId', {
    	templateUrl: 'partials/user.html',
    	controller: 'UserController'
    });

    $routeProvider.when('/user',{
      templateUrl: 'partials/user.html',
      controller:'UserController'
    });

    $routeProvider.otherwise({redirectTo: '/users'});
});
