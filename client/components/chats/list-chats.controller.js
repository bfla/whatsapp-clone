angular
  .module('Whatsnoodle')
  .controller('ListChatsCtrl', ListChatsCtrl);

function ListChatsCtrl ($scope, $reactive, $meteor) {
  $reactive(this).attach($scope);

  this.remove = remove;

  this.helpers({
    data() {
      return Chats.find();
    }
  });
  
  function remove (chat) {
    $meteor.collection(Chats).remove(chat);
  }

}