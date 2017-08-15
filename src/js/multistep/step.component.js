var appModule = angular.module('playgroundApp');

appModule.component('stepComponent', {
    templateUrl: 'src/templates/multistep/step.component.html',
    bindings: {
        title               : '@',
        component           : '<',
        next                : '&',
        previous            : '&',
        showPreviousButton  : '<',
        showNextButton      : '<',
        data                : '='
    },
    controller: function($log, $compile, $element, $scope, $q) {
        var ctrl = this;

        // Initialize data if empty
        if (ctrl.data === null) {
            ctrl.data = {
                firstname   : null,
                lastname    : null,
                email       : null
            }
        }

        ctrl.onShowNext = function(obj) {

            // Check if the function is a promise
            if ('function' === typeof ctrl.data.validate) {
                $q.when(ctrl.data.validate()).then(function(result) {
                    if (result) {
                        ctrl.next(ctrl.data);
                    }
                });
            } else {
                if (ctrl.data.validate()) {
                    $log.info("Trying to switch to next step");
                    ctrl.next(ctrl.data);
                }
            }
        };

        ctrl.onShowPrevious = function() {
            ctrl.previous(ctrl.data);
        };

        var tpl = '<' + this.component + ' data="ctrl.data">';
        tpl += '</' + this.component + '>';
        var el = $compile(tpl)($scope);
        $element.prepend(el);

    },
    controllerAs: 'ctrl'
});
