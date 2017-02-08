angular.module('JComerce').controller('MercadoriasController',
    function($resource, $scope) {

        $scope.mercadorias = [];

        $scope.filtro = '';

        var Mercadoria = $resource('/mercadorias/id:');

        function buscaMercadorias() {
            Mercadoria.query(
                function(mercadorias) {
                    $scope.mercadorias = mercadorias;
                },
                function(erro) {
                    console.log("Não foi possível ober a lista de mercadorias");
                    console.log(erro);
                }
            );
        }
        buscaMercadorias();

        $scope.remove = function(mercadoria) {
            Mercadoria.delete({
                    id: mercadoria._id
                },
                buscaMercadorias,
                function(erro) {
                    console.log('Não foi possível remover o contato');
                    console.log(erro);
                }
            );
        };
    });
