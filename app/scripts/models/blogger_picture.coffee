'use strict';


angular.module('ModelModule', []).factory('BloggerPicture', ['$http', ( $http, $scope) ->

	class BloggerPicture
		constructor: (data) ->
			@instantiate(data)
		instantiate: (data) ->
			@attributes = data
			angular.extend(@, data)
		escapedUrl: () -> {@source}
		@all: () ->
			blogger_pictures = []
			$http.get("api/pins.json").then((response) -> 
				blogger_pictures.push new BloggerPicture(params) for params in response.data
			)
			blogger_pictures

	BloggerPicture
])


