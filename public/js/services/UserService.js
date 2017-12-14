angular.module('JComerce').factory('User', function($resource) {

	return $resource('/users/:id');
});
