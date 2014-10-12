app.controller('todoCtrl', function mainCtrl($scope, $http) {

    $scope.todoLoading = true;

    $scope.formData = {};

    $http.get('/models')
        .success(function(data) {
            $scope.models = data;
            console.log(data);
            $scope.todoLoading = false;
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