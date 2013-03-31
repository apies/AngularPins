(function() {
  'use strict';

  angular.module('AngSobsPinsApp', ['ModelModule']).config([
    '$routeProvider', function($routeProvider) {
      return $routeProvider.when('/', {
        templateUrl: 'views/pin_board.html',
        controller: 'PinBoardCtrl'
      }).otherwise({
        redirectTo: '/'
      });
    }
  ]);

}).call(this);
