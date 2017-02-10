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

    };

    controller.salvaMercadoria = function(req, res) {

    };

    return controller;
};
