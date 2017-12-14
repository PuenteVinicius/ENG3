angular.module('JComerce').controller('UserController',
    function($scope, User, $routeParams) {

    	if ($routeParams.userId) {
      	User.get({id: $routeParams.userId},
        	function(user) {

          	$scope.user = user;
          },
          function(erro) {
            $scope.mensagem = {
              texto: 'User não existe Cliente.'
            };
          }
      	);
      } else {
				$scope.user = new User();
			}

			$scope.salva = function(){
				$scope.user.$save()
					.then(function() {
						$scope.mensagem = {texto: 'Salvo com sucesso'};

						$scope.user = new User();
					})
					.catch(function(erro){
						scope.mensagem = {texto: 'Não foi possivel salvar'};
				});
		};

    User.query(function(users){
      $scope.users = users;
    });
});
