angular.module('jtt_bricklayer', [])
    .directive('bricklayer', function () {
        return {
            restrict: 'C',
            replace: 'false',
            link: function (scope, element, attrs) {
                var bricklayer = new Bricklayer(element[0])
            }
        }
    });