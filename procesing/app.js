var app = angular.module('app', ['ui.router','firebase',
    'datatables']);



app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
  function ($stateProvider, $urlRouterProvider, $locationProvider) {

    //$locationProvider.html5Mode({enabled:false});
    $urlRouterProvider.otherwise("/home")

    // States
    $stateProvider
      .state('home', {
        url: "/home",
        views: {
          'FormNurse': {
            templateUrl: "formNurse.html",
            controller: "homeCtrl"
          }
        }
      })
      
      ;
    //$urlRouterProvider.deferIntercept();
  }
  
]);

app.run(['$urlRouter', '$timeout', '$state',
  function ($urlRouter, $timeout, $state) {

    $timeout(function () {

      //$urlRouter.sync();
      //$urlRouter.listen();

      //$state.go("parent.child");
    }, 1000)

  }]);
