'use strict';

/**
 * @ngdoc directive
 * @name stanfordAngularJsApp.directive:scoreTable
 * @description
 * # scoreTable
 */
angular.module('stanfordAngularJsApp')
  .directive('scoreTable', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the scoreTable directive');
      }
    };
  });
