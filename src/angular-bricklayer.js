angular.module('jtt_bricklayer', [])
    .directive('bricklayer', ['$timeout', function ($timeout) {
        return {
            restrict: 'C',
            link: function (scope, element, attrs) {
                var bricklayer = new Bricklayer(element[0]);

                imagesLoaded(element[0], function () {
                    bricklayer.redraw();
                });

                $timeout(function () {
                    bricklayer.redraw();
                });

                scope.$on('bricklayer.append', function (event, selectedElement) {
                    bricklayer.append(selectedElement[0]);
                    bricklayer.redraw();
                    imagesLoaded(selectedElement, function () {
                        bricklayer.redraw();
                    });
                });

                scope.$on('bricklayer.prepend', function (event, selectedElement) {
                    bricklayer.prepend(selectedElement[0]);
                    bricklayer.redraw();
                    imagesLoaded(selectedElement, function () {
                        bricklayer.redraw();
                    });
                });

                scope.$on('bricklayer.redraw', function () {
                    bricklayer.redraw();
                });
            },
            controller: function ($scope) {
            }
        }
    }])
    .directive('bricklayerAppend', function () {
        return {
            require: '^^bricklayer',
            restrict: 'ACE',
            link: function (scope, element, attrs) {
                scope.$emit('bricklayer.append', element);
            }
        }
    })
    .directive('bricklayerPrepend', function () {
        return {
            require: '^^bricklayer',
            restrict: 'ACE',
            link: function (scope, element, attrs) {
                scope.$emit('bricklayer.prepend', element);
            }
        }
    });