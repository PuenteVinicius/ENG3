angular.module('JComerce',['ngRoute', 'ngResource'])
  .config(function($routeProvider) {

    $routeProvider.when('/mercadorias', {
      templateUrl: 'partials/mercadorias.html',
      controller: 'MercadoriasController'
    });

    $routeProvider.when('/mercadoria/:mercadoriaId', {
    	templateUrl: 'partials/mercadoria.html',
    	controller: 'MercadoriaController'
    });

    $routeProvider.when('/mercadoria',{
      templateUrl: 'partials/mercadoria.html',
      controller:'MercadoriaController'
    });

    $routeProvider.otherwise({redirectTo: '/mercadorias'});
});
