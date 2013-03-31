'use strict'

BloggerPictureControl = ($scope, BloggerPicture) ->
	$scope.awesomeThings = [ 'HTML5 Boilerplate'  , 'AngularJS','Testacular']
	$scope.pictures = BloggerPicture.all()

angular.module('AngSobsPinsApp').controller( 'PinBoardCtrl', ['$scope', 'BloggerPicture', BloggerPictureControl])
