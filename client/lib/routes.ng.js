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
    });
 
  $urlRouterProvider.otherwise('tab/chats');
}