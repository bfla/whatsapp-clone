angular
  .module('Whatsnoodle')
  .controller('ViewChatCtrl', ViewChatCtrl);
 
function ViewChatCtrl ($scope, $reactive, $stateParams) {
  $reactive(this).attach($scope);
 
  let chatId = $stateParams.chatId;
 
  this.helpers({
    messages() {
      return Messages.find({ chatId: chatId });
    },
    data() {
      return Chats.findOne(chatId);
    }
  });
}