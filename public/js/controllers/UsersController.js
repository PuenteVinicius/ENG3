angular.module('JComerce').controller('UsersController',

  function(User, $scope) {

    $scope.show = false;

    $scope.users = [];

    $scope.filtro = '';

    $scope.mensagem = {texto: ''};

    $scope.title = 'My App Title';

    function buscaUsers() {
      User.query(
        function(users) {
          $scope.users = users;
          $scope.mensagem = {};
        },
        function(erro) {
          console.log(erro);
          $scope.mensagem = {
            texto: 'Não foi possível obter a lista'
          };
        }
      );
    }

    buscaUsers();

    $scope.remove = function(user) {
      User.delete({id: user._id},
        buscaUsers,
        function(erro) {
          $scope.mensagem ={
            texto: 'Não foi possível remover a user'
          };
          console.log(erro);
        }
      );
    };
    angular.module('App', ['ngMaterial']);
});
