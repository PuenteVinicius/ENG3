module.exports = function(app) {

    var Mercadoria = app.models.mercadoria;

    var controller = {};

    controller.listaMercadorias = function(req, res) {
      Mercadoria.find().exec()
      .then(
        function(mercadorias){
          res.json(mercadorias);
        },
        function(erro){
          console.error(erro);
          res.status(500).json(erro);
        }
      );
    };

    controller.obtemMercadoria = function(req, res) {
    };

    controller.removeMercadoria = function(req, res) {
      var _id = req.params.id;
      Mercadoria.remove({"_id" : _id}).exec()
      .then(
        function(){
          res.end();
        },
        function(erro){
          return console.erro(erro);
        }
      );
    };

    controller.salvaMercadoria = function(req, res) {
      /*Update*/
      var _id = req.body._id;
      if(_id){
        Mercadoria.findByIdAndUpdate(_id, req.body).exec()
        .then(
          function(mercadoria){
            res.json(mercadoria);
          },
          function(erro){
            console.error(erro);
            res.status(500).json(erro);
          }
        );
      } else{
        Mercadoria.create(req.body)
        .then(
          function(mercadoria){
            res.status(201).json(mercadoria);
          },
          function(erro){
            console.log(erro);
            res.status(500).json(erro);
          }
        );
      }
    };
    return controller;
};
