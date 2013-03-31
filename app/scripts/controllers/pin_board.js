(function() {
  'use strict';

  var BloggerPictureControl;

  BloggerPictureControl = function($scope, BloggerPicture) {
    $scope.awesomeThings = ['HTML5 Boilerplate', 'AngularJS', 'Testacular'];
    return $scope.pictures = BloggerPicture.all();
  };

  angular.module('AngSobsPinsApp').controller('PinBoardCtrl', ['$scope', 'BloggerPicture', BloggerPictureControl]);

}).call(this);
