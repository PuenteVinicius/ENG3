module.exports = function(app) {
    var controller = app.controllers.mercadoria;
    app.route('/mercadorias')
        .get(controller.listaMercadorias);

    app.route('/mercadorias/:id')
        .get(controller.obtemMercadoria)
        .delete(controller.removeMercadoria);
};
