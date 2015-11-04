'use strict';

/**
 * @ngdoc directive
 * @name stanfordAngularJsApp.directive:scoreTable
 * @description
 * # scoreTable
 */
angular.module('yahtzeeApp')
  .directive('scoreTable', function () {
    return {
      scope: {
        rules: '=rules',
        dices: '=dices'
      },
      templateUrl: 'scripts/directives/score-table.html',
      restrict: 'E'
    };
  });
