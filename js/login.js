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



function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).then(cred => {
    console.log(cred.user);
    location.assign("/interface/home.html");
  });
  firebase.auth().signInWithEmailAndPassword(userEmail, userPass)
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("Error : " + errorMessage);

    // ...
  });

}

// function logout(){
//   firebase.auth().signOut();
// }
