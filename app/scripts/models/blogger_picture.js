(function() {
  'use strict';

  angular.module('ModelModule', []).factory('BloggerPicture', [
    '$http', function($http, $scope) {
      var BloggerPicture;
      BloggerPicture = (function() {

        function BloggerPicture(data) {
          this.instantiate(data);
        }

        BloggerPicture.prototype.instantiate = function(data) {
          this.attributes = data;
          return angular.extend(this, data);
        };

        BloggerPicture.prototype.escapedUrl = function() {
          return {
            source: this.source
          };
        };

        BloggerPicture.all = function() {
          var blogger_pictures;
          blogger_pictures = [];
          $http.get("api/pins.json").then(function(response) {
            var params, _i, _len, _ref, _results;
            _ref = response.data;
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
              params = _ref[_i];
              _results.push(blogger_pictures.push(new BloggerPicture(params)));
            }
            return _results;
          });
          return blogger_pictures;
        };

        return BloggerPicture;

      })();
      return BloggerPicture;
    }
  ]);

}).call(this);
