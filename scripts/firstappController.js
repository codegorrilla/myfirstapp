angular
    .controller('firstappController', function($scope, firstappFactory){
        $scope.cribs = firstappFactory.getFirstApp();
    });