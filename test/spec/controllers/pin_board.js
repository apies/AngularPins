(function() {
  'use strict';

  describe('Controller: PinBoardCtrl', function() {
    var $httpBackend, PinBoardCtrl, scope;
    beforeEach(module('AngSobsPinsApp'));
    PinBoardCtrl = {};
    scope = {};
    $httpBackend = {};
    beforeEach(inject(function(_$httpBackend_, $controller) {
      scope = {};
      $httpBackend = _$httpBackend_;
      $httpBackend.whenGET('api/pins.json').respond([
        {
          source: "http://2.bp.blogspot.com/-1QKOJV9XlGY/T5DhhJwQGFI/AAAAAAAANS4/YWilKxvXVA4/s320/cocktail+ring.jpg"
        }, {
          source: "http://3.bp.blogspot.com/-FWGlLRUou7k/T5DhYSSrOII/AAAAAAAANSo/BjPze1kdZFs/s320/tomato+basil+1.jpg"
        }
      ]);
      PinBoardCtrl = $controller('PinBoardCtrl', {
        $scope: scope
      });
      return $httpBackend.flush();
    }));
    return it('should attach a list of pictures to the scope', function() {
      return expect(scope.pictures.length).toBe(2);
    });
  });

}).call(this);
