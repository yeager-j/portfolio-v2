/**
 * Created by Jackson on 9/29/16.
 */

(function(){
    angular.module('portfolio', ['ngRoute', 'ngMaterial', 'ngMessages', 'ngAnimate'])
        .run(['$anchorScroll', function ($anchorScroll) {
            $anchorScroll.yOffset = 50;
        }]);

    config.$inject = ['$routeProvider', '$mdThemingProvider'];
    function config($routeProvider, $mdThemingProvider){
        $routeProvider
            .when('/', {
                templateUrl: 'home/home.view.html',
                controller: 'homeCtrl'
            })

            .when('/voting', {
                templateUrl: 'voting/voting.view.html',
                controller: 'votingCtrl'
            })

            .otherwise({
                redirectTo: '/'
            });

        $mdThemingProvider
            .theme('light-blue')
            .primaryPalette('blue')
            .accentPalette('teal')
            .warnPalette('red')
            .backgroundPalette('grey');
    }

    function mainController($scope, $route){
        $scope.isActive = function(path){
            if ($route.current && $route.current.regexp) {
                return $route.current.regexp.test(path);
            }
            return false;
        };
    }

    angular.module('portfolio')
        .config(config)
        .controller('mainCtrl', ['$scope', '$route', mainController])
})();