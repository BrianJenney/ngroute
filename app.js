
// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute'
]).

//use route provider to return certain templates when a user requests
//a page
config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/home', {
	    templateUrl: 'views/home.html', //this is the page we will return
	    controller: 'HomeCtrl' //this is the controller we will use
	  })
  .when('/pageOne', {
      templateUrl: 'views/pageOne.html',
      controller: 'PageOneCtrl'
    })
  .when('/pageTwo', {
          templateUrl: 'views/pageTwo.html',
          controller: 'PageTwoCtrl'
    })

    //TODO:
    //Uh oh, looks like the routes for pageOne and pageTwo are missing!!!
    //using the same syntax as the above route, add routes for the missing views

    //here is our failsafe -- if a user requests a route we don't have
    //set up, we will just direct them back to home
  	.otherwise({redirectTo: '/home'
	});
}]);
