angular.module('playgroundApp').controller('MainController', ['$log', function($log) {
    $log.info('Main controller initialized!');

    this.components = [{
        name: 'dummy-component',
        title: 'Enter some basic data'
    }, {
        name: 'another-dummy-component',
        title: 'Please provide some more information'}
    ];
}]);
