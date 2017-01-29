var appModule = angular.module('playgroundApp');

appModule.component('stepComponent', {
    templateUrl: 'src/templates/step.component.html',
    bindings: {
        title               : '@',
        component           : '@',
        next                : '&',
        previous            : '&',
        showPreviousButton  : '<',
        showNextButton      : '<',
    },
    controller: function($log, $compile, $element, $scope) {
        var ctrl = this;
        $log.info('showNextButton: ' + this.showNextButton + ", showPreviousButton: " + this.showPreviousButton);
        $log.info(typeof(this.showNextButton));
        $scope.component = this.component;

        ctrl.isValid = true;
        ctrl.data = {
            firstname   : null,
            lastname    : null,
            email       : null,
            phone       : null,
            address     : null
        };

        ctrl.onShowNext = function(obj) {
            if (ctrl.data.validate()) {
                $log.info("Trying to switch to next step");
                ctrl.next();
            }
        };

        ctrl.onShowPrevious = function() {
            ctrl.previous();
        };

        var tpl = '<' + this.component + ' data="ctrl.data">';
        tpl += '</' + this.component + '>';
        var el = $compile(tpl)($scope);
        $element.prepend(el);

    },
    controllerAs: 'ctrl'
});
