
module.exports = function(app) {
  var controller = require('../controllers/mercadoria.js');
  controller = app.controller.mercadoria;

    app.get('/mercadorias', controller.listaMercadorias);
    app.get('/mercadorias/:id', controller.obtemMercadoria);
};
