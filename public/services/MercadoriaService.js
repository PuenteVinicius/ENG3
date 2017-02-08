angular.module('JComerce').factory('Mercadoria', function($resource) {

	return $resource('/mercadorias/:id');
});
