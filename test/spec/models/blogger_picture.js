(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  describe('Model: BloggerPicture', function() {
    var $httpBackend, BloggerPicture;
    beforeEach(module('ModelModule'));
    BloggerPicture = {};
    $httpBackend = {};
    beforeEach(inject(function(_BloggerPicture_, _$httpBackend_, $rootScope) {
      var scope;
      $httpBackend = _$httpBackend_;
      $httpBackend.whenGET('api/pins.json').respond([
        {
          source: "http://2.bp.blogspot.com/-1QKOJV9XlGY/T5DhhJwQGFI/AAAAAAAANS4/YWilKxvXVA4/s320/cocktail+ring.jpg"
        }, {
          source: "http://3.bp.blogspot.com/-FWGlLRUou7k/T5DhYSSrOII/AAAAAAAANSo/BjPze1kdZFs/s320/tomato+basil+1.jpg"
        }
      ]);
      scope = $rootScope.$new();
      return BloggerPicture = _BloggerPicture_;
    }));
    it('should be able to make a new instance of itself when it already has data', function() {
      var blog;
      blog = new BloggerPicture({
        name: 'Quiet Like Horses'
      });
      return expect(blog.name).toBe('Quiet Like Horses');
    });
    it('should give itself Picture attributes with instantiate for use with promises', function() {
      var blog;
      blog = new BloggerPicture;
      blog.instantiate({
        name: 'Quiet Like Horses'
      });
      return expect(blog.name).toBe('Quiet Like Horses');
    });
    it('should be a base for more specific Blogger Pictures', function() {
      var BloggerUser, user;
      BloggerUser = (function(_super) {

        __extends(BloggerUser, _super);

        function BloggerUser() {
          return BloggerUser.__super__.constructor.apply(this, arguments);
        }

        BloggerUser.prototype.thing = 'thing';

        return BloggerUser;

      })(BloggerPicture);
      user = new BloggerUser;
      user.instantiate({
        name: 'Alan Pies',
        age: 28
      });
      return expect(user.name).toBe('Alan Pies');
    });
    it('should be able to fetch my blogger pictures from a rest api', function() {
      var blogger_pictures;
      blogger_pictures = BloggerPicture.all();
      $httpBackend.flush();
      return expect(blogger_pictures[0].source).toBe("http://2.bp.blogspot.com/-1QKOJV9XlGY/T5DhhJwQGFI/AAAAAAAANS4/YWilKxvXVA4/s320/cocktail+ring.jpg");
    });
    return it('should be able to url escape an href pin attribute', function() {
      var blogger_picture, blogger_pictures;
      blogger_pictures = BloggerPicture.all();
      $httpBackend.flush();
      expect(blogger_pictures.length).toBe(2);
      blogger_picture = blogger_pictures[0];
      return expect(blogger_picture.escapedUrl()).toBe('http://2.bp.blogspot.com/-1QKOJV9XlGY/T5DhhJwQGFI/AAAAAAAANS4/YWilKxvXVA4/s320/cocktail+ring.jpg');
    });
  });

}).call(this);
