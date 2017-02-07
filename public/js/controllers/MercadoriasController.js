angular.module('JComerce').controller('MercadoriasController', function($scope) {

    $scope.total = 0;

    $scope.incrementa = function() {
      $scope.total++;
    };

    $scope.mercadorias  = [
      {
        "_id": 1,
        "nome": "Livro - As Crônicas de Gelo e Fogo: A Guerra dos Tronos - Livro Um",
        "preco": 65.00,
        "qtd": 40,
        "TipoMercadoria": "Livro",
        "TipoNegocio": "Venda"
      },
      {
        "_id": 2,
        "nome": "Notebook Dell Inspiron",
        "preco": 2180.99,
        "qtd": 12,
        "TipoMercadoria": "Eletrônico",
        "TipoNegocio": "Compra"
      },
      {
        "_id": 3,
        "nome": "Headset Razer Kraken 7.1 PC",
        "preco": 408.49,
        "qtd": 4,
        "TipoMercadoria": "Eletrônico",
        "TipoNegocio": "Compra"
      }
    ];
    $scope.filtro = '';
});
