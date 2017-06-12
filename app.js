angular.module('myApp', [])
  .controller('myCtrl', myCtrl);

    myCtrl.$inject = ['$scope'];

    function myCtrl($scope){
      $scope.food = "";
      $scope.lunchCheckController = function(){
        var index = $scope.food.split(',').length;
        if(index<4){
          return $scope.message = "Enjoy!";
        }
        else{
          return $scope.message = "Too Much!";
        }
      };
    };
