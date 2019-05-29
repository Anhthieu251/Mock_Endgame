angular.module("myApp.detail",['ngRoute','firebase'])
.config(['$routeProvider',function($routeProvider){
	$routeProvider
		.when('/detail/:id',{
			templateUrl:"detail/detail.html",
			controller:"detailCtrl"
		});
}])

.controller('detailCtrl', function($scope,$firebaseArray,$firebaseObject,$routeParams){
	$scope.msg3="";
	var id = $routeParams.id;
	var ref = firebase.database().ref("Contacts/"+id);
	$scope.contact = $firebaseObject(ref);

	$scope.editContact = function(id){
		console.log(id);

		var ref = firebase.database().ref("Contacts/"+id);
		ref.update({
			name:$scope.contact.name,
			phone:$scope.contact.phone,
			department:$scope.contact.department,
			email:$scope.contact.email,
			check:$scope.contact.check,
			birth:$scope.contact.birth,
			sex:$scope.contact.sex,
			
			chuandoan:$scope.contact.chuandoan,
			toathuoc:$scope.contact.toathuoc,
			taikham:$scope.contact.taikham,
			ghichu:$scope.contact.ghichu,
			
		})
		.then(
			function(ref){
				$scope.contact.name= "";
				$scope.contact.phone= "";
				$scope.contact.department= "";
				$scope.contact.email= "";
				$scope.contact.check="";
				$scope.contact.birth= "";
				$scope.contact.sex= "";
				$scope.contact.chuandoan = "";
				$scope.contact.toathuoc="";
				$scope.contact.taikham = "";
				$scope.contact.ghichu= "";

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