/**
 * Created by Jackson on 9/30/16.
 */

(function () {
    navController.$inject = ['$location', '$scope', '$mdToast', '$mdSidenav', '$anchorScroll'];
    function navController($location, $scope, $mdToast, $mdSidenav, $anchorScroll) {
        $scope.toggleSidenav = function () {
            $mdSidenav('navigation').toggle();
        };

        $scope.go = function (hash) {
            $mdSidenav('navigation').close();
            $location.hash(hash);
            $anchorScroll();
        };

        $scope.nav = [
            {
                icon: 'home',
                location: 'Home',
                path: 'top'
            },
            {
                icon: 'person',
                location: 'About Me',
                path: 'about'
            },
            {
                icon: 'view_module',
                location: 'Projects',
                path: 'projects'
            },
            {
                icon: 'lightbulb_outline',
                location: 'Why Hire Me?',
                path: 'whyhire'
            },
            {
                icon: 'mail_outline',
                location: 'Contact Me',
                path: 'contact'
            }
        ];
    }

    angular.module('portfolio')
        .controller('navCtrl', navController)
})();