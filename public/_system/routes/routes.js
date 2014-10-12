app.config(function($routeSegmentProvider, $routeProvider) {

    // Configuración
    $routeSegmentProvider.options.autoLoadTemplates = true;

    // Home
    $routeSegmentProvider
        .when('/home',          'home')
        .segment('home', {
            templateUrl: '_system/views/home.html',
            controller: 'mainCtrl'})

    // Todos
    $routeSegmentProvider
        .when('/todos',          'todos')
        .segment('todos', {
            templateUrl: 'todos/views/todos.html',
            controller: 'todoCtrl'})

    $routeProvider.otherwise({redirectTo: '/home'});
});
