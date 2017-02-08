var ID_MERCADORIA_INC = 3;

var mercadorias = [
  { _id: 1,
    nome: 'Livro 1',
    preco: 45.00,
    qtd: 4,
    TipoMercadoria: 'Livro',
    TipoNegocio: 'Venda'
  },
  { _id: 2,
    nome: 'Livro 2',
    preco: 47.00,
    qtd: 20,
    TipoMercadoria: 'Livro',
    TipoNegocio: 'Venda'
  },
  { _id: 3,
    nome: 'Livro 3',
    preco: 65.00,
    qtd: 32,
    TipoMercadoria: 'Livro',
    TipoNegocio: 'Venda'
  }
];


module.exports = function() {
  var controller = {};

  controller.listaMercadorias = function(req, res) {
      res.json(mercadorias);
  };

  controller.obtemMercadoria = function(req, res) {

  	var idMercadoria = req.params.id;
  	var mercadoria = mercadorias.filter(function(mercadoria) {
  		return mercadoria._id == idMercadoria;
  	})[0];
  	mercadoria ?
  	res.json(mercadoria) :
    res.status(404).send('Mercadoria não encontrada');
  };

  controller.removeMercadoria = function(req, res){

    var idMercadoria = req.params.id;
    mercadorias = mercadorias.filter(function(mercadoria){
      return mercadoria._id != idMercadoria;
    });
    res.status(204).end();
  };

  controller.salvarMercadoria = function(req, res){

    var mercadoria = req.body;
    mercadoria = mercadoria._id;
      atualiza(mercadoria);
      adiciona(mercadoria);
    res.json(mercadoria);
  };

  function adiciona(mercadoriaNova){

    mercadoriaNova._id = ++ID_MERCADORIA_INC;;
    mercadorias.push(mercadoriaNova);
    return mercadoriaNova;
  }

  function atualiza(mercadoriaAlterar){

    mercadorias = mercadorias.map(function(mercadoria){
      if(mercadoria._id == mercadoriaAlterar._id){
        mercadoria = mercadoriaAlterar;
      }
      return mercadoria;
    });
    return mercadoriaAlterar;
  }

  return controller;
};
