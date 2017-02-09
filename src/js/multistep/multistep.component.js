var appModule = angular.module('playgroundApp');

appModule.component('multistepComponent', {
    templateUrl: 'src/templates/multistep/multistep.component.html',
    bindings: {
        title: '@',
        stepComponents: '<'
    },
    controllerAs : 'ctrl',
    controller: function($log, $compile, $element, $scope) {
        var ctrl = this;
        ctrl.currentStep = 0;

        ctrl.next = function(data) {
            $log.info("Switching to next step");
            $log.info()
            ctrl.currentStep++;
        };

        ctrl.previous = function(data) {
            $log.info("Switching to previous step");
            ctrl.currentStep--;
        }
    }
});
