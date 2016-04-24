angular.module('app', ['jtt_bricklayer']);

angular.module('app')
    .controller("appController", function ($scope, $timeout) {
        $scope.createElement = function (position) {
            return {
                color: '#' + Math.random().toString(16).substr(-6),
                height: sizes[Math.floor(Math.random() * sizes.length)],
                width: sizes[Math.floor(Math.random() * sizes.length)],
            }
        };

        $scope.data = [];

        $scope.appendNew = function () {
            $scope.data.push($scope.createElement());
        };

        $scope.reorderElements = function () {
            $scope.$emit('bricklayer.reorderElements');
        };

        var sizes = [220, 250, 260, 270, 290, 300, 310, 330, 400, 430, 450, 480, 500];

        for (var i = 0; i < 10; i++) {
            $scope.appendNew();
        }


    });