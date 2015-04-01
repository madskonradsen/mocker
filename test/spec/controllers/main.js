'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('mockerApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should populated the scope with data from the SelectDataService', function () {
    expect(scope.selectStatuscodes.length).toBeGreaterThan(10);
  });

  it('should add a header', function () {
    scope.addHeader();
    expect(scope.response.headers.length).toBe(1);
  });
});
