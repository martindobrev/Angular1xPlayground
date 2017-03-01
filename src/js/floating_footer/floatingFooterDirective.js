var appModule = angular.module('playgroundApp');

appModule.directive('floatingFooterDirective', ['$log', function($log) {

    function link(scope, element, attrs) {
        $log.info('Directive initialized');

        element.css('width', '300px');

        if (false != attrs.disableResize) {
            window.addEventListener('resize', resize);
        }

        if (attrs.disappearOnScrollToBottom) {
            window.addEventListener('scroll', function(event) {
                if (window.innerHeight + window.pageYOffset >=
                    document.body.offsetHeight) {
                        $log.info('HIDE WINDOW HERE...');
                        element.css('opacity', '0');
                    } else {
                        element.css('opacity', '1');
                    }
            });
        }

        var sideMargin = 50;
        if (attrs.sideMargin) {
            sideMargin = parseInt(attrs.sideMargin);
        }

        function resize() {
            var parentWidth = element.parent()[0].clientWidth;

            if (parentWidth > 400) {
                element.css('width', (parentWidth - sideMargin * 2) + 'px');
                element.css('left', sideMargin + 'px');
            } else {
                element.css('width', parentWidth + 'px');
                element.css('left', '0px');
            }
        }
        resize();
    }


    return {
        restrict: 'AE',
        template: '<h1>HELLO WORLD</h1><div ng-repeat="price in prices"><p><span>{{price.type}}</span>: <span>{{price.price}}</span></p></div>',
        link: link,
        scope: {
            sideMargin: '<',
            prices: '<',
            totalPrice: '<'
        }
    }

}]);
