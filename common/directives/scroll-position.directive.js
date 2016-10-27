/**
 * Created by Jackson on 9/30/16.
 */

(function(){
    function scrollPosition(){
        return {
            scope: {
                scroll: '=scrollPosition'
            },

            link: function(scope, element, attrs){
                var windowEl = angular.element($window);
                var handler = function() {
                    scope.scroll = $window.pageYOffset;
                };

                windowEl.on('scroll', scope.$apply.bind(scope, handler));
                handler();
            }
        };
    }

    angular.module('portfolio')
        .directive('scrollPosition', scrollPosition)
})();