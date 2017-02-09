module.exports = function() {

  var Mercadoria = app.models.mercadoria;

  var controller = {};

  controller.listaMercadorias = function(req, res) {

    Mercadoria.find().populate('emergencia').exec()
    .then(
      function(mercadorias){
        res.json(mercadorias);
      },
      function(erro){
        console.error(erro)
        res.status(500).json(erro);
      }
    );
  };

  controller.obtemMercadoria = function(req, res) {

    var _id = req.params.id;
    Mercadoria.findById(_id).exec()
    .then(
      function(mercadoria){
        if(!mercadoria) throw new Error("Mercadoria não encontrada")
        res.json(,mercadoria)
      },
      function(erro){
        console.log(erro);
        res.status(404).json(erro);
      }
    );
  };

  controller.removeMercadoria = function(req, res) {

    var _id = req.params.id;
    Mercadoria.remove({"_id" : _id}).exec()
    .then(
      function(){
        res.end();
      }
      function(erro){
        return console.erro(erro);
      }
    );
  };

  controller.salvaMercadoria = function(req, res) {

    var _id = req.body._id;
    req.body.emergencia = req.body.emergencia || null;

      if(_id) {
        Contato.findByIdAndUpdate(_id, req.body).exec()
        .then(
        function(mercadoria) {
          res.json(mercadoria);
        },
        function(erro) {
          console.error(erro)
          res.status(500).json(erro);
        }
       );
      } else {
        Contato.create(req.body)
        .then(
          function(mercadoria) {
            res.status(201).json(contato);
          },
          function(erro) {
            console.log(erro);
            res.status(500).json(erro);
          }
        );
      }
  };

  return controller;
};
