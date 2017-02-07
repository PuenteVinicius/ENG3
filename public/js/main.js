angular.module('JComerce', ['ngRoute'])
  .config(function($routeProvider) {

    $routeProvider.when('/mercadorias', {
      templateUrl: 'partials/mercadorias.html',
      controller: 'MercadoriasController'
    });

    $routeProvider.when('/meradoria/:mercadoriaId', {
    	templateUrl: 'partials/mercadoria.html',
    	controller: 'MercadoriaController'
    });

    $routeProvider.otherwise({redirectTo: '/mercadorias'});
});
