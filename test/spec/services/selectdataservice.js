'use strict';

describe('Service: SelectDataService', function () {

  // load the service's module
  beforeEach(module('mockerApp'));

  // instantiate service
  var SelectDataService;
  beforeEach(inject(function (_SelectDataService_) {
    SelectDataService = _SelectDataService_;
  }));

  it('should return 3 charsets', function () {
    expect(SelectDataService.charsets.length).toEqual(3);
  });

});
