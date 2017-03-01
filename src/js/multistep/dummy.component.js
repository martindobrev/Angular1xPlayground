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

        ctrl.data.validate = function(onlyOneProperty) {
            var errors = {};

            if (!ctrl.data.firstname && (onlyOneProperty === undefined || onlyOneProperty === 'firstname')) {
                errors['firstname'] = 'Please enter a value';
                errors['invalid'] = true;
            }

            if (!ctrl.data.lastname && (onlyOneProperty === undefined || onlyOneProperty === 'lastname')) {
                errors['lastname'] = 'Please enter a value';
                errors['invalid'] = true;
            }

            if (!ctrl.data.email && (onlyOneProperty === undefined || onlyOneProperty === 'email')) {
                errors['email'] = 'Please enter a value';
                errors['invalid'] = true;
            }

            if (onlyOneProperty) {
                ctrl.errors[onlyOneProperty] = errors[onlyOneProperty];
                return !errors.invalid;
            } else {
                ctrl.errors = errors;
            }
            return !errors.invalid;

        };


        $scope.$watch(function() {return ctrl.data}, function(newValue, oldValue) {

            if (newValue !== oldValue) {
                // Function copied from StackOverflow to extract the differences
                // between two objects
                //
                // http://stackoverflow.com/questions/31683075/how-to-do-a-deep-comparison-between-2-objects-with-lodash
                var diffs = _.reduce(newValue, function(result, value, key) {
                    return _.isEqual(value, oldValue[key])
                        ? result : result.concat(key);
                }, []);

                if (diffs.length > 0) {
                    ctrl.data.validate(diffs[0]);
                } else {
                    ctrl.data.validate();
                }

                $log.info('CHANGES: ');
                $log.info(diffs);
            }


        }, true);

    },
    controllerAs: 'ctrl'
});
