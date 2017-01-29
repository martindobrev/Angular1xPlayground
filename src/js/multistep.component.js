var appModule = angular.module('playgroundApp');

appModule.component('multistepComponent', {
    templateUrl: 'src/templates/multistep.component.html',
    bindings: {
        title: '@',
        stepComponents: '<'
    },
    controllerAs : 'ctrl',
    controller: function($log, $compile, $element, $scope) {
        var ctrl = this;
        ctrl.currentStep = 0;
        $scope.title = this.title;

        ctrl.next = function() {
            $log.info("Switching to next step");
            ctrl.currentStep++;
        };

        ctrl.previous = function() {
            $log.info("Switching to previous step");
            ctrl.currentStep--;
        }
    }
});
