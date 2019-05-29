angular.module("myApp.doctor",['ngRoute','firebase'])
.config(['$routeProvider',function($routeProvider){
	$routeProvider
		.when('/doctor',{
			templateUrl:"doctor/doctor.html",
			controller:"doctorCtrl"
		});
}])
.controller('doctorCtrl', function($scope,$firebaseArray){
	$scope.msg1 = false;
	var ref = firebase.database().ref("Contacts");
		$scope.data = $firebaseArray(ref);
	console.log('doctor');
	$scope.deleteContact = function(info){
		$scope.data
		.$remove(info)
		.then(
			function(ref){
				$scope.msg1 = "patient deleted successfully.";
				window.setTimeout(function(){
					$scope.$apply(function(){
						$scope.msg1 = false;
					})
				},2000)
				console.log(info);
			},
			function(error){
				console.log(error);
			}
		)
		

	}
});