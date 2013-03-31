
describe 'Model: BloggerPicture', () ->

  # load the service's module
  beforeEach module 'ModelModule'

  # instantiate service
  BloggerPicture = {}
  $httpBackend = {}

  beforeEach inject (_BloggerPicture_, _$httpBackend_, $rootScope) ->
    $httpBackend = _$httpBackend_
    $httpBackend.whenGET('api/pins.json').respond([
    	{source: "http://2.bp.blogspot.com/-1QKOJV9XlGY/T5DhhJwQGFI/AAAAAAAANS4/YWilKxvXVA4/s320/cocktail+ring.jpg"},
    	{source: "http://3.bp.blogspot.com/-FWGlLRUou7k/T5DhYSSrOII/AAAAAAAANSo/BjPze1kdZFs/s320/tomato+basil+1.jpg"}
    ])
    scope = $rootScope.$new()
    BloggerPicture = _BloggerPicture_
    

  it 'should be able to make a new instance of itself when it already has data', () ->
    blog  = new BloggerPicture(name: 'Quiet Like Horses')
    expect(blog.name).toBe('Quiet Like Horses')

  it 'should give itself Picture attributes with instantiate for use with promises', () ->
    blog  = new BloggerPicture
    blog.instantiate(name: 'Quiet Like Horses')
    expect(blog.name).toBe('Quiet Like Horses')
  it 'should be a base for more specific Blogger Pictures', () ->
    class BloggerUser extends BloggerPicture
      thing: 'thing'
    user = new BloggerUser
    user.instantiate(name: 'Alan Pies', age: 28)
   	expect(user.name).toBe('Alan Pies')
  it 'should be able to fetch my blogger pictures from a rest api', () ->
  	blogger_pictures = BloggerPicture.all()
  	$httpBackend.flush()
  	expect(blogger_pictures[0].source).toBe("http://2.bp.blogspot.com/-1QKOJV9XlGY/T5DhhJwQGFI/AAAAAAAANS4/YWilKxvXVA4/s320/cocktail+ring.jpg")
  it 'should be able to url escape an href pin attribute', () ->
    blogger_pictures = BloggerPicture.all()
    $httpBackend.flush() 
    expect(blogger_pictures.length).toBe(2) 
    blogger_picture = blogger_pictures[0]
    expect(blogger_picture.escapedUrl()).toBe('http://2.bp.blogspot.com/-1QKOJV9XlGY/T5DhhJwQGFI/AAAAAAAANS4/YWilKxvXVA4/s320/cocktail+ring.jpg')
    

    #expect(blogger_pictures.length).toBe(2) 

