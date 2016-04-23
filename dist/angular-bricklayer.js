/**
    @name: angular-bricklayer 
    @version: 1.0.1 (23-04-2016) 
    @author:  
    @url: https://github.com/JohnnyTheTank/angular-bricklayer 
    @license: MIT
*/
angular.module('jtt_bricklayer', [])
    .directive('bricklayer', ['$timeout', function ($timeout) {
        return {
            restrict: 'C',
            replace: 'false',
            link: function (scope, element, attrs) {
                var bricklayer = new Bricklayer(element[0]);

                $timeout(function () {
                    bricklayer.reorderElements(bricklayer.columnCount);
                }, 0);

                scope.$on('bricklayer.append', function (event, element) {
                    bricklayer.append(element);
                    bricklayer.reorderElements(bricklayer.columnCount);
                    $timeout(function () {
                        bricklayer.reorderElements(bricklayer.columnCount);
                    }, 0);
                });

                scope.$on('bricklayer.prepend', function (event, element) {
                    bricklayer.prepend(element);
                    bricklayer.reorderElements(bricklayer.columnCount);
                    $timeout(function () {
                        bricklayer.reorderElements(bricklayer.columnCount);
                    }, 0);
                });
            }
        }
    }])
    .directive('bricklayerAppend', function () {
        return {
            require: '?bricklayer',
            restrict: 'ACE',
            replace: 'false',
            link: function (scope, element, attrs) {
                scope.$emit('bricklayer.append', element[0]);
            }
        }
    })
    .directive('bricklayerPrepend', function () {
        return {
            require: '?bricklayer',
            restrict: 'ACE',
            replace: 'false',
            link: function (scope, element, attrs) {
                scope.$emit('bricklayer.prepend', element[0]);
            }
        }
    });