

angular.module('myApp')

.controller('HomeCtrl', ['$scope', '$http', function($scope, $http) {


	// Get a reference to the database service
	var database = firebase.database();

	//adding data to the test path of our database
	// firebase.database().ref('test/').push({
	//     username: 'Brian',
	//     email: 'myemail.com'
	//   });


	// //read function on our database
	// firebase.database().ref('test/').on('value', function(snapshot) {
 //  		console.log(snapshot.val());
	// });



	$scope.myMessage = "Hey Welcome Playboy!";

	$http.get('http://localhost:3000/fakeapiroute?name=brain&job=cheeseartisan').then(function(response){

		console.log(response);

		$scope.name = response.data.name;
		$scope.job = response.data.job;

	})
 	
 }]);
