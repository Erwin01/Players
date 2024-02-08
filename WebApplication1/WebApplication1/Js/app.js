var app = angular.module("CrudApp", ["CrudApp.controllers", "ngRoute"]);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider.
        when("/",
    {
        templateUrl: "/Vistas/JugadorLista.html",
        controller: "MainController"
    }).

        when("/AgregarJugador",
    {
        templateUrl: "/Vistas/AgregarJugador.html",
        controller: "AgregarJugadorController"
    }).

        when("/EditarJugador/:id",
    {
        templateUrl: "/Vistas/EditarJugador.html",
        controller: "EditarJugadorController"
    }).
    otherwise({ redirectTo: "/" });
}]);