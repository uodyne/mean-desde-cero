app.config(function($routeSegmentProvider, $routeProvider) {

    // Configuración
    $routeSegmentProvider.options.autoLoadTemplates = true;

    // Home
    $routeSegmentProvider
        .when('/home',          'home')
        .segment('home', {
            templateUrl: 'home/views/home.html',
            controller: 'homeCtrl'})

    // Todos
    $routeSegmentProvider
        .when('/todos',          'todos')
        .segment('todos', {
            templateUrl: 'todos/views/todos.html',
            controller: 'todoCtrl'})

    $routeProvider.otherwise({redirectTo: '/home'});
});
