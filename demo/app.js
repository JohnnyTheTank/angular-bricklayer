angular.module('app', ['jtt_bricklayer']);

angular.module('app')
    .controller("appController", function ($scope, $timeout) {
        $scope.data = [];

        var heights = [30, 40, 50, 60, 70, 90, 100, 120, 150, 200];

        for (var i = 0; i < 60; i++) {
            $scope.data.push({
                color: '#' + Math.random().toString(16).substr(-6),
                height: heights[Math.floor(Math.random() * heights.length)],
            });
        }
    });