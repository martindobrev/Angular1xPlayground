angular.module('playgroundApp').controller('MainController', ['$log', function($log) {
    $log.info('Main controller initialized!');

    this.data = {
        dummyComponent : null,
        anotherDummyComponent : null,
        asyncValidationComponent: null
    };

    this.components = [{
        name: 'dummy-component',
        title: 'Enter some basic data',
        data: this.data.dummyComponent
    },{
        name: 'async-validation-component',
        title: 'Async validation example',
        data: this.data.asyncValidationComponent
    }, {
        name: 'another-dummy-component',
        title: 'Please provide some more information',
        data: this.data.anotherDummyComponent
    }];
}]);
