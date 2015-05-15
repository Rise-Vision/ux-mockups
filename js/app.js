'use strict';

angular.module('MockupsApp.directives', []);

var MockupsApp = angular.module('MockupsApp', [
  'ngRoute',
  'ngTouch',
  'ui.router',
  'ui.bootstrap',
  'MockupsApp.directives'
]);

MockupsApp.config(function($stateProvider, $urlRouterProvider) {
  // For any unmatched url, redirect to /
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
      .state('/', {url: "/",templateUrl: ""})
    ;     
});

MockupsApp.controller('MockupsAppController', function($scope) {
  $scope.items = [
    'The first choice!',
    'And another choice for you.',
    'but wait! A third!'
  ];
});

MockupsApp.controller('DropdownCtrl', function ($scope, $log) {
  $scope.items = [
    'The first choice!',
    'And another choice for you.',
    'but wait! A third!'
  ];

  $scope.status = {
    isopen: false
  };

  $scope.toggled = function(open) {
    $log.log('Dropdown is now: ', open);
  };

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };
});

