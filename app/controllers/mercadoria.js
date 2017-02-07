module.exports = function(){
  var controller = {};
  var mercadorias = [
    { "_id": 1,
      "nome": "Livro 1",
      "tipo": "importado",
      "qtd": 20,
      "preco": 20.00,
      "tipo_negocio": "Venda"},
    { "_id": 2,
      "nome": "Computador",
      "tipo": "importado",
      "qtd": 60,
      "preco": 2100.00,
      "tipo_negocio": "Compra"}
  ];
  controller.listaMercadorias = function(req, res){
    res.json(mercadorias)
  };
  controller.obtemMercadoria = function(req, res){
    var idMercadoria = req.params.id;
    var mercadoria = mercadorias.filter(function(contato){
      return mercadoria._id == idMercadoria;

    })[0];
    mercadoria ?
      res.json(mercadoria);
      res.status(404).send('Mercadoria não encontrada');
  };
  return controller;
};
