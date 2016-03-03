angular
  .module('Whatsnoodle')
  .controller('NewChatCtrl', NewChatCtrl);
 
function NewChatCtrl($scope, $reactive, $state, CreateChat) {
  $reactive(this).attach($scope);
 
  this.hideNewChatModal = hideNewChatModal;
  this.createChat = CreateChat;
  this.subscribe('users');
 
  this.helpers({
    users() {
      return Meteor.users.find({ _id: { $ne: Meteor.userId() } });
    }
  });
 
  ////////////
 
  function hideNewChatModal() {
    CreateChat.hideModal();
  }
 
  function newChat(userId) {
    let chat = Chats.findOne({ type: 'chat', userIds: { $all: [Meteor.userId(), userId] } });
    if (chat) {
      return goToChat(chat._id);
    }
 
    Meteor.call('createChat', userId, goToChat);
  }
 
  function goToChat(chatId) {
    hideNewChatModal();
    return $state.go('tab.chat', { chatId: chatId });
  }
}