angular.module('playgroundApp').controller('MainController', ['$log', function($log) {
    $log.info('Main controller initialized!');

    this.data = {
        dummyComponent : null,
        anotherDummyComponent : null
    };

    this.components = [{
        name: 'dummy-component',
        title: 'Enter some basic data',
        data: this.data.dummyComponent
    }, {
        name: 'another-dummy-component',
        title: 'Please provide some more information',
        data: this.data.anotherDummyComponent
    }];
}]);
