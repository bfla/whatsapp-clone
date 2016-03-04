angular
  .module('Whatsnoodle')
  .controller('ListChatsCtrl', ListChatsCtrl);

function ListChatsCtrl ($scope, $reactive, $meteor) {
  $reactive(this).attach($scope);

  this.remove = remove;
  this.showNewChatModal = showNewChatModal;

  this.helpers({
    data() {
      return Chats.find();
    }
  });
  
  function remove (chat) {
    Meteor.call('removeChat', chat._id);
  }

  function showNewChatModal() {
    NewChat.showModal();
  }

}