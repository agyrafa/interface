/**
 * Main App Controller for the AngularJS Material Starter App
 * @param UsersDataService
 * @param $mdSidenav
 * @param $mdDialog
 * @constructor
 */
function AppController(UsersDataService, $mdSidenav, $mdDialog) {
  var self = this;

  self.selected     = null;
  self.users        = [ ];
  self.selectUser   = selectUser;
  self.showAlert    = showAlert;
  self.newItem      = newItem;
  self.selectItem   = selectItem;
  self.toggleList   = toggleUsersList;

  // Load all registered users

  UsersDataService
        .loadAllUsers()
        .then( function( users ) {
          self.users    = [].concat(users);
          // self.selected = users[0];
        });

  // *********************************
  // Internal methods
  // *********************************

  /**
   * Hide or Show the 'left' sideNav area
   */
  function toggleUsersList() {
    $mdSidenav('left').toggle();
  }

  /**
   * Select the current avatars
   * @param menuId
   */
  function selectUser ( user ) {
    self.selected = angular.isNumber(user) ? $scope.users[user] : user;

    self.showAlert();
  } 

  function showAlert() {
    alert = $mdDialog.alert({
      title: 'Alerta',
      textContent: 'Usuário selecionado',
      ok: 'Fechar'
    });

    $mdDialog
      .show( alert )
      .finally(function() {
        alert = undefined;
      });
  }

  function newItem(){
    alert = $mdDialog.alert({
      title: 'Alerta',
      textContent: 'Novo atendimento',
      ok: 'Fechar'
    });

    $mdDialog
      .show( alert )
      .finally(function() {
        alert = undefined;
      });
  }

  function selectItem(){
    alert = $mdDialog.alert({
      title: 'Alerta',
      textContent: 'Selecione o atendimento',
      ok: 'Fechar'
    });

    $mdDialog
      .show( alert )
      .finally(function() {
        alert = undefined;
      });
  }
}

export default [ 'UsersDataService', '$mdSidenav', '$mdDialog', AppController ];
