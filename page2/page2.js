angular.module("myApp.page2",['ngRoute','firebase'])
.config(['$routeProvider',function($routeProvider){
	$routeProvider
		.when('/page2',{
			templateUrl:"page2/page2.html",
			controller:"page2Ctrl"
		});
}])
.controller('page2Ctrl', function($scope,$firebaseArray){
	$scope.addContact = function(){
		$scope.msg2="";
		var ref = firebase.database().ref("Contacts");
		$firebaseArray(ref).$add($scope.contact)
		.then(
			function(ref){
				$scope.contact.doctor = "";
				$scope.contact.name = "";
				$scope.contact.phone = "";
				$scope.contact.email = "";
				$scope.contact.birth = "";
				$scope.contact.sex = "";
				$scope.contact.lichhen = "";
				$scope.contact.ghichu = "";

				$scope.msg2= "contact added successfully.";
				window.setTimeout(function(){
					$scope.$apply(function(){
						$scope.msg2 = false;
					})
				},2000)
			},
			function(error){
				console.log(error);
			}
			)
	};
	console.log('page2');
});