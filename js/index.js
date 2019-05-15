//create angular app
var validationApp = angular.module('validationApp', []); 

//create controller
validationApp.controller('mainController',function($scope){
  $scope.submitForm = function (){
    // check to form is completely valid
    if($scope.loginForm.valid){
      alert('success');
    }
  }
});