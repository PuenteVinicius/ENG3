angular.module('JComerce').controller('MercadoriaController',
    function($scope, Mercadoria, $routeParams) {

    	if ($routeParams.mercadoriaId) {
      	Mercadoria.get({id: $routeParams.mercadoriaId},
        	function(mercadoria) {
          	$scope.mercadoria = mercadoria;
          },
          function(erro) {
            $scope.mensagem = {
              texto: 'Mercadoria não existe. Nova mercadoria.'
            };
          }
      	);
      } else {
				$scope.mercadoria = new Mercadoria();
			}



			$scope.salva = function(){
				$scope.mercadoria.$save()
					.then(function() {
						$scope.mensagem = {texto: 'Salvo com sucesso'};

						$scope.mercadoria = new Mercadoria();
					})
					.catch(function(erro){
						scope.mensagem = {texto: 'Não foi possivel salvar'};
				});
		};
});
