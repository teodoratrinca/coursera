(function() {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.checked = false;
        $scope.message = '';
        $scope.dishes = '';
        $scope.checkLunch = function() {
            if ($scope.dishes.trim().length === 0) {
                $scope.empty = true;
            } else {
                $scope.checked = true;
                $scope.empty = false;
                let arrayDishes = $scope.dishes.split(',');
                let arrayDishesWithoutEmptys = arrayDishes.filter(function(v) {
                    return v.trim() !== '';
                });
                if (arrayDishesWithoutEmptys.length <= 3) {
                    $scope.message = 'Enjoy!';
                } else {
                    $scope.message = 'Too much!';
                }
            }
        };
    }
})();