module.exports = function(app) {
    var controller = app.controllers.mecardoria;
    app.get('/mercadorias', controller.listaMercadorias);
    app.get('/mercadorias/:id', controller.obtemMercadoria);
};
