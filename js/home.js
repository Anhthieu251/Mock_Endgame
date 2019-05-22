
var HomePage = angular.module('HomePage', []);

HomePage.controller('HomePageController',function(firebase){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
      
          document.getElementById("btn_DangKy_home").style.display = "none";
          document.getElementById("btn_DangNhap_home").style.display = "none";
          document.getElementById("btn_DangXuat_home").style.display = "block";
          
      
          var user = firebase.auth().currentUser;
      
          if(user != null){
      
            var email_id = user.email;
            document.getElementById("user_id").innerHTML = "Welcome User : " + email_id;
            
      
          }
      
        } else {
          // No user is signed in.
          document.getElementById("btn_DangKy_home").style.display = "block";
          document.getElementById("btn_DangNhap_home").style.display = "block";
          document.getElementById("btn_DangXuat_home").style.display = "none";
      
        }
      });         
  });