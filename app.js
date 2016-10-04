(function (){
            'use strict';
            angular.module('foodcheck', [])
            .controller('lunchCheckController', ['$scope', '$filter', lunchCheckController]);

            function lunchCheckController($scope, $filter){
                $scope.name="";
                $scope.lengthValue=0;

                $scope.lengthcheck=function () {
                  var totalNameValue=calculatenumericvalue($scope.name);
                  $scope.lengthValue=totalNameValue;
                };

                function calculatenumericvalue(string){
                      $scope.array = $scope.name.split(', ');
                      var totalStringValue=($scope.array.length);
                      return(totalStringValue);

                };


                  $scope.evallength=function(){
                    if ($scope.lengthValue >=1 && $scope.lengthValue <=3){
                      $scope.lunch="Enjoy Your Lunch!";
                    }
                    else if ($scope.lengthValue > 3 ){
                      $scope.lunch="Too much!!";
                    }
                    else if ($scope.lengthValue <1){
                      $scope.lunch="Please enter something first";
                    }
                    $scope.lengthValue=0;
                  };
};
})();
