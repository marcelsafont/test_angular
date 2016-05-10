
var esadeApp = angular.module('esadeApp', ['ngRoute','ngSanitize']);

    // configure our routes
    esadeApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/article/:name*', {
                templateUrl : '/sites/all/modules/angular_esade/news.html',
                controller  : 'mainController',
                resolve: function(urlattr){
                  zone: 'hola';
              }
            });

    });

     esadeApp.controller('mainController', function($scope, $route, $location, $rootScope, $http) {
        console.log($scope);
        $scope.$on('$routeChangeSuccess', function() {
          var path = $location.path();
          $nid = path.split("/");

          $nid_json = "/contentasjson/node/"+$nid[3];
          $scope.hideContent = 
          
             $http.get($nid_json).success (function(data){
                    obj = angular.fromJson(data);
                    $scope.title = obj.title;
                    $scope.body = obj.body.und[0].value;
                    $scope.hideContent = true;
              }); 

        });
  });

