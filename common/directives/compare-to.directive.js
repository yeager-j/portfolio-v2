/**
 * Created by Jackson on 10/5/16.
 */

(function () {
    function compareTo(){
        return {
            require: "ngModel",
            scope: {
                otherModelValue: "=compareTo"
            },
            link: function(scope, element, attributes, ngModel) {

                ngModel.$validators.compareTo = function(modelValue) {
                    return modelValue == scope.otherModelValue;
                };

                scope.$watch("otherModelValue", function() {
                    ngModel.$validate();
                });
            }
        };
    }

    angular.module('portfolio')
        .directive('compareTo', compareTo)
})();