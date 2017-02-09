var appModule = angular.module('playgroundApp');

appModule.component('dummyComponent', {
    templateUrl: 'src/templates/multistep/dummy.component.html',
    bindings: {
        title       : '@',
        data        : '='
    },
    controller: function($log, $scope) {
        var ctrl = this;
        ctrl.errors = {};
        ctrl.data.validate = function() {
            var errors = {};

            if (!ctrl.data.firstname) {
                errors['firstname'] = 'Please enter a value';
                errors['invalid'] = true;
            }

            if (!ctrl.data.lastname) {
                errors['lastname'] = 'Please enter a value';
                errors['invalid'] = true;
            }

            if (!ctrl.data.email) {
                errors['email'] = 'Please enter a value';
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
