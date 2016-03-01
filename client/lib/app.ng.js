angular
  .module('Whatsnoodle', [
    'angular-meteor',
    'ionic'
  ]);

// Wait for the client platform to start before bootstrapping angular.
if (Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
}
else {
  angular.element(document).ready(onReady);
}
 
function onReady() {
  angular.bootstrap(document, ['Whatsnoodle']);
}