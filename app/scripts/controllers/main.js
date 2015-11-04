'use strict';

/**
 * @ngdoc function
 * @name yahtzeeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yahtzeeApp
 */
angular.module('yahtzeeApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
    $scope.dices = [ 1, 2, 1, 4, 5, 6];

    var rules = [
      //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
      {name: 'one', compute: function(dices){return dices.reduce(function(sum, el){return sum + (el == 1 ? 1 : 0)}, 0)}},
    ];

    //Just for debug:
    for (var i in rules) {
        var rule = rules[i];
        console.log(rule.name, rule.compute($scope.dices));
    }

  }]);
