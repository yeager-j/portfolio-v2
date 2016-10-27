/**
 * Created by Jackson on 10/16/16.
 */

(function(){
    function segment(){
        return {
            restrict: 'E',
            templateUrl: 'common/directives/segment/segment.template.html',
            scope: {
                color: '@',
                title: '@',
                triangle: '@'
            },
            transclude: true
        }
    }

    angular.module('portfolio')
        .directive('segment', segment)
})();