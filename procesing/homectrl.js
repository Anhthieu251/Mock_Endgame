function homeCtrl($scope, $firebaseObject){
    const ref = firebase.database().ref('Contacts');
    $scope.contacts = $firebaseObject(ref);
}
angular
    .module('app')
    .controller('homeCtrl', homeCtrl)
    .controller('addContactCtrl', addContactCtrl)

    