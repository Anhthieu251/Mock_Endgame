var validationApp = angular.module('validationApp',[]);

validationApp.controller('registerController',function($scope){
    $scope.submitForm1= function(){
        if($scope.registerForm.valid){
            alert('success');
        }
    }
})