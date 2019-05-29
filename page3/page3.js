angular.module("myApp.page3",['ngRoute','firebase'])
.config(['$routeProvider',function($routeProvider){
	$routeProvider
		.when('/page3/:id',{
			templateUrl:"page3/page3.html",
			controller:"page3Ctrl"
		});
}])

.controller('page3Ctrl', function($scope,$firebaseArray,$firebaseObject,$routeParams){
	$scope.msg3="";
	var id = $routeParams.id;
	var ref = firebase.database().ref("Contacts/"+id);
	$scope.contact = $firebaseObject(ref);

	$scope.editContact = function(id){
		console.log(id);

		var ref = firebase.database().ref("Contacts/"+id);
		ref.update({
			name:$scope.contact.name,
			check:$scope.contact.check,
			chuandoan:$scope.contact.chuandoan,
			toathuoc:$scope.contact.toathuoc,
			taikham:$scope.contact.taikham,
		})
		.then(
			function(ref){
				$scope.contact.name= "";
				$scope.contact.check="";
				$scope.contact.chuandoan = "";
				$scope.contact.toathuoc="";
				$scope.contact.taikham = "";

				$scope.msg3= "Patient updated successfully.";
				window.setTimeout(function(){
					$scope.$apply(function(){
						
					})
				},100);
				window.setTimeout(function(){
					$scope.$apply(function(){
						$scope.msg3 = false;
					})
				},2000)			}
			,function(error){
				console.log(error);
			}
		);
	}

	
});