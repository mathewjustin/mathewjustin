
var routerApp = angular.module('routerApp', [ 'ui.router' ]);

routerApp.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/home');

	$stateProvider

	// HOME STATES AND NESTED VIEWS ========================================
	.state('home', {
		url : '/home',
		templateUrl : 'html/home.html'
	})

	// nested list with custom controller
	.state('pprofile', {
		url : '/pprofile',
		templateUrl : 'html/professional-profile.html',
		controller : 'pprofileController'
	})

	// projectContents.html
	.state('projContents', {
		url : '/projContents',
		templateUrl : 'html/projectContents.html',
		controller : 'projectContentController'

	})

	// nested list with just some random string data
	.state('home.paragraph', {
		url : '/paragraph',
		template : 'I could sure use a drink right now.'
	})

	// ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
	.state('about', {
		url : '/about',
		views : {
			'' : {
				templateUrl : 'html/partial-about.html'
			},
			'columnOne@about' : {
				template : 'Look I am a column!'
			},
			'columnTwo@about' : {
				templateUrl : 'html/table-data.html',
				controller : 'scotchController'
			}
		}

	});

});

routerApp.controller('scotchController', function($scope) {

	$scope.message = 'test';

});

routerApp.controller('projectContentController', function($scope) {
	$scope.message = 'test';

});
routerApp.controller('pprofileController', function($scope) {

	$scope.message = 'test';

	$scope.proLists = [ {
		key : "invG",
		des : "Invoice generator and Employee Management"
	}, {
		key : "inRetlApp",
		des : "In-Retail Application"
	}, {
		key : "cPortl",
		des : "Customer Portal"
	}, {
		key : "Ssoft",
		des : "SilverSoft BPO Application"
	} ];

});
