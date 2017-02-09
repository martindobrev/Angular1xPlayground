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
    controller: function($log, $compile, $element, $scope) {
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
            if (ctrl.data.validate()) {
                $log.info("Trying to switch to next step");
                ctrl.next(ctrl.data);
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
