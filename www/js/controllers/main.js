
console.log('main.js loaded');

angular.module('CCSD_Risk')

.controller('mainCtrl', function($scope) {
    $scope.helloWorld = function() {
        console.log('helloWorld');
    };
});
