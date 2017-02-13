var mongoose = require('mongoose')
require('mongoose-double')(mongoose);

module.exports = function() {
  var SchemaTypes = mongoose.Schema.Types;
    var mercadoria = mongoose.Schema({
        nome: {
            type: String,
            required:true
        },
        preco: {
            type: String,
            required:true
        },
        qtd: {
            type: Number,
            required:true
        },
        TipoMercadoria: {
            type: String,
            required:true
        },
        TipoNegocio: {
            type: String,
            required:true
        }
    });
    return mongoose.model('Mercadoria', mercadoria);
};
