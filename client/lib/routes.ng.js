angular
  .module('Whatsnoodle')
  .config(config);
 
function config($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'client/components/shared/tabs.html'
    })
    .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'client/components/chats/list-chats.html',
          controller: 'ListChatsCtrl as chats'
        }
      }
    })
    .state('tab.chat', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'client/components/chats/view-chat.html',
          controller: 'ViewChatCtrl as viewChat'
        }
      }
    });
 
  $urlRouterProvider.otherwise('tab/chats');
}