var app = angular.module('app', ['ngRoute', 'ngAnimate', 'route-segment', 'view-segment']);

app.controller('mainCtrl', function mainCtrl($scope, $routeSegment) {
    $scope.$routeSegment = $routeSegment;
});