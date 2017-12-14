const controller = require('../controllers/user');
module.exports = function(app) {
    
    app.get('/users', function (req, res){
        controller.listUsers(req, res);
    })
    app.get('/users/:id', function (req, res){
        controller.getUser(req, res);
    })
    app.post('/users', function (req, res){
        controller.saveUser(req, res);
    })
    app.delete('/users', function (req, res){
        controller.removeUser(req, res);
    })
    app.delete('/users/:id', function (req, res){
        controller.removeUser(req, res);
    })
};