angular.module("CrudApp.controllers", []).
    controller("MainController", function ($scope, JugadorService) {
        $scope.message = "";
        $scope.title1 = 'Button';

        JugadorService.GetJugadorBD().then(function (d) {

            $scope.jugadorLista = d.data.List;
        });

        $scope.EliminarJugador = function (id, index) {

            $scope.jugadorLista.splice(index, 1);
            JugadorService.EliminarJugador(id);
        };

    }).
    controller("AgregarJugadorController", function ($scope, JugadorService) {
        $scope.message = "Datos del Jugador";


        $scope.AgregarJugador = function () {

            //alert("Hola Mundo");
            JugadorService.AgregarJugador($scope.jugador);
        };

    }).
    controller("EditarJugadorController", function ($scope, JugadorService, $routeParams) {
        $scope.message = "Actualizar Datos del Jugador";

        var id = $routeParams.id;

        JugadorService.GetJugadorId(id).then(function (d) {

            $scope.jugador = d.data.jugador;

        });

        $scope.ActualizarJugador = function () {

            JugadorService.ActualizarJugador($scope.jugador);
        };

    }).

    factory("JugadorService", ["$http", function ($http) {

        var fac = {};

        fac.GetJugadorBD = function () {

            return $http.get("/Jugador/GetJugador");
        };

        fac.GetJugadorId = function (id) {

            return $http.get("/Jugador/GetJugadorId", { params: { id: id } });
        };

        fac.AgregarJugador = function (jugador) {

            $http.post("/Jugador/AgregarJugador", jugador).success(function (response) {
                alert(response.status);

            });
        };

        fac.ActualizarJugador = function (jugador) {

            $http.post("/Jugador/ActualizarJugador", jugador).success(function (response) {
                alert(response.status);

            });
        };

        fac.EliminarJugador = function (id) {

            $http.post("/Jugador/EliminarJugador", { id: id }).success(function (response) {
                alert(response.status);

            });
        };

        return fac;

    }]);


