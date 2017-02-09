var appModule = angular.module('playgroundApp');

appModule.component('anotherDummyComponent', {
    templateUrl: 'src/templates/anotherDummy.component.html',
    bindings: {
        title       : '@',
        data        : '=',
        onUpdate    : '&',
        onNextClick : '&'
    },
    controller: function($log, $scope) {
        var ctrl = this;
        ctrl.data.validate = function() {
            var errors = {};

            if (!ctrl.data.phone) {
                errors['phone'] = 'Please enter a value';
                errors['invalid'] = true;
            }

            if (!ctrl.data.address) {
                errors['address'] = 'Please enter a value';
                errors['invalid'] = true;
            }

            ctrl.errors = errors;
            return !errors.invalid;
        }


        $scope.$watch(function() {return ctrl.data}, function(newValue, oldValue) {
            if (newValue !== oldValue) {
                ctrl.data.validate();
            }
        }, true);

    },
    controllerAs: 'ctrl'
});
