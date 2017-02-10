var mongoose = require('mongoose');

module.exports = function() {
    var schema = mongoose.Schema({
        nome: {
            type: String,
            required:true,
            index:{
              unique: true
            }
        },
        preco: {
            type: String,
            required:true
        },
        qtd: {
            type: String,
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
    return mongoose.model('Mercadoria', schema);
};
