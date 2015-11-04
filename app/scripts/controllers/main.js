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

    $scope.roll = function(){
        var dices = [];
        for(var i = 1; i <= 6; i++){
            dices.push(Math.floor(Math.random() * 6) + 1);
        }
        $scope.dices = dices;
    }

    $scope.rules = [
      //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
      {name: 'Ones', compute: function(dices){return dices.reduce(function(sum, el){return sum + (el == 1 ? 1 : 0)}, 0)}},
    ];

  }]);
