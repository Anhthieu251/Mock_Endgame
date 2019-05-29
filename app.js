angular.module("myApp",['ngRoute','myApp.trangchu','myApp.page2','myApp.page3','myApp.nurse','myApp.doctor','myApp.detail'])
.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
	$locationProvider.hashPrefix('!');
	$routeProvider
		.otherwise({
			redirectTo:"/trangchu"
		})
}]);