'use strict';

describe('Directive: scoreTable', function () {

  // load the directive's module
  beforeEach(module('stanfordAngularJsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<score-table></score-table>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the scoreTable directive');
  }));
});
