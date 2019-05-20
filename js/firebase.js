(function(){
    var firebaseConfig = {
        apiKey: "AIzaSyBGdT-EETtewn4ng-SojYCs8SH5oOiJiCk",
        authDomain: "web-doctor-c3e36.firebaseapp.com",
        databaseURL: "https://web-doctor-c3e36.firebaseio.com",
        projectId: "web-doctor-c3e36",
        storageBucket: "web-doctor-c3e36.appspot.com",
        messagingSenderId: "1035233431360",
        appId: "1:1035233431360:web:ba760aec9e2990ca"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

    angular.module('app',['firebase'])
    .controller('FirebaseCtrl',function($firebaseObject){
        const reference = firebase.database().ref().child('dbAdmin')
        this.object = $firebaseObject(reference);
    });

}());