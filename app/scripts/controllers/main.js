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

    function countX(x){
        return function(dices){
            return dices.reduce(function(sum, el){return sum + (el == x ? x : 0)}, 0)
        }
    }

    $scope.sumRules = function (rules, dices){
        return rules.reduce(function(sum, rule){return sum + rule.compute(dices);}, 0);
    }

    $scope.rules = [
      //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
      {name: 'Ones',   compute: countX(1)},
      {name: 'Twos',   compute: countX(2)},
      {name: 'Threes', compute: countX(3)},
      {name: 'Fours',  compute: countX(4)},
      {name: 'Fives',  compute: countX(5)},
      {name: 'Sixes',  compute: countX(6)},                    
    ];

  }]);
