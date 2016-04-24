angular.module('jtt_bricklayer', [])
    .directive('bricklayer', ['$timeout', function ($timeout) {
        return {
            restrict: 'C',
            link: function (scope, element, attrs) {
                var bricklayer = new Bricklayer(element[0]);

                $timeout(function () {
                    bricklayer.redraw();
                });

                scope.$on('bricklayer.append', function (event, element) {
                    bricklayer.append(element);
                    bricklayer.redraw();
                });

                scope.$on('bricklayer.prepend', function (event, element) {
                    bricklayer.prepend(element);
                    bricklayer.redraw();
                });

                scope.$on('bricklayer.redraw', function () {
                    bricklayer.redraw();
                });
            }
        }
    }])
    .directive('bricklayerAppend', function () {
        return {
            require: '?bricklayer',
            restrict: 'ACE',
            link: function (scope, element, attrs) {
                scope.$emit('bricklayer.append', element[0]);
            }
        }
    })
    .directive('bricklayerPrepend', function () {
        return {
            require: '?bricklayer',
            restrict: 'ACE',
            link: function (scope, element, attrs) {
                scope.$emit('bricklayer.prepend', element[0]);
            }
        }
    });