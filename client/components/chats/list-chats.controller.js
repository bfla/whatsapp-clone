angular
  .module('Whatsnoodle')
  .controller('ListChatsCtrl', ListChatsCtrl);
 
function ListChatsCtrl ($scope, $reactive) {
  $reactive(this).attach($scope);
}