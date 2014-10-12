var app = angular.module('app', ['ngRoute', 'ngAnimate', 'route-segment', 'view-segment']);


app.config(function($routeSegmentProvider, $routeProvider) {

    // Configuración
    $routeSegmentProvider.options.autoLoadTemplates = true;

    $routeSegmentProvider

        .when('/home',          'home')
        .segment('home', {
            templateUrl: '_system/views/home.html',
            controller: 'mainCtrl'})

        $routeProvider.otherwise({redirectTo: '/home'});
});

app.controller('mainCtrl', function mainCtrl($scope, $routeSegment) {
    $scope.$routeSegment = $routeSegment;
});