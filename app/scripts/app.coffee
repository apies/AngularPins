'use strict'

angular.module('AngSobsPinsApp', ['ModelModule'])
  .config ['$routeProvider', ($routeProvider) ->
    $routeProvider
      .when '/',
        templateUrl: 'views/pin_board.html'
        controller: 'PinBoardCtrl'
      .otherwise
        redirectTo: '/'
  ]
