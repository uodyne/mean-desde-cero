var app = angular.module('app', []);

app.controller('mainCtrl', function mainCtrl($scope, $http) {

    $scope.formData = {};

    $http.get('/models')
        .success(function(data) {
            $scope.models = data;
            console.log(data);
        })
        .error(function(data) {
            console.log("Error: " + data);
        });

    $scope.createModel = function() {
        $http.post('/models', $scope.formData)
            .success(function(data) {
                $scope.formData = {};
                $scope.models = data;
                console.log(data);
            })
            .error(function(data) {
                console.log("Error: " + data);
            });
    };

    $scope.deleteModel = function(id) {
        $http.delete('/models/' + id)
            .success(function(data) {
                $scope.models = data;
                console.log(data);
            })
            .error(function(data) {
                console.log("Error: " + data);
            });
    };

});