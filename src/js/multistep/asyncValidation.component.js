var appModule = angular.module('playgroundApp');

appModule.component('asyncValidationComponent', {
    templateUrl: 'src/templates/multistep/asyncValidation.component.html',
    bindings: {
        title       : '@',
        data        : '=',
        onUpdate    : '&',
        onNextClick : '&'
    },
    controller: function($log, $scope, $q, $timeout) {
        var ctrl = this;
        ctrl.data.validate = function() {
            var defer = $q.defer();
            $timeout(function() {
                if (ctrl.data.keyword === 'NEXT') {
                    ctrl.errors = {};
                    defer.resolve(true);
                } else {
                    ctrl.errors = {keyword: 'Please enter "NEXT" to pass validation!'};
                    defer.resolve(false);
                }
            }, 2000);
            return defer.promise;
        }

    },
    controllerAs: 'ctrl'
});
