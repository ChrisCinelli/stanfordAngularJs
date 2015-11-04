'use strict';

/**
 * @ngdoc function
 * @name yahtzeeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yahtzeeApp
 */
angular.module('yahtzeeApp')
  .controller('MainCtrl', function () {
    // See: 'this' vs $scope in AngularJS controllers 
    // http://stackoverflow.com/questions/11605917/this-vs-scope-in-angularjs-controllers
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
