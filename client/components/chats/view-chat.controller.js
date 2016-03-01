angular
  .module('Whatsnoodle')
  .controller('ViewChatCtrl', ViewChatCtrl);
 
function ViewChatCtrl ($scope, $reactive, $stateParams) {
  $reactive(this).attach($scope);
 
  let chatId = $stateParams.chatId;
 
  this.helpers({
    data() {
      return Chats.findOne(chatId);
    }
  });
}