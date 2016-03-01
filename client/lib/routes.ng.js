angular
  .module('Whatsnoodle')
  .config(config);
 
function config($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'client/components/shared/tabs.html',
      resolve: {
        user: isAuthorized
      }
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
    })
    .state('login', {
      url: '/login',
      templateUrl: 'client/components/users/login.html',
      controller: 'LoginUserCtrl as loginUser'
    })
    .state('confirmation', {
      url: '/confirmation/:phone',
      templateUrl: 'client/components/users/confirmation.html',
      controller: 'ConfirmUserCtrl as confirmUser'
    })
    .state('profile', {
      url: '/profile',
      templateUrl: 'client/components/users/view-user.html',
      controller: 'ViewUserCtrl as viewUser',
      resolve: {
        user: isAuthorized
      }
    });
 
  $urlRouterProvider.otherwise('tab/chats');

  function isAuthorized($q) {
    let deferred = $q.defer();
 
    if (_.isEmpty(Meteor.user()))
      deferred.reject('AUTH_REQUIRED');
    else
      deferred.resolve();
 
    return deferred.promise;
  }

}