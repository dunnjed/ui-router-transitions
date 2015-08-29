(function () {

	var app = angular.module('app', [
		"ui.router",
		"ngSanitize",
		"ngAnimate"
	]);

	app.config(function ($stateProvider, $urlRouterProvider) { // provider-injector
		// This is an example of config block.
		// You can have as many of these as you want.
		// You can only inject Providers (not instances)
		// into config blocks.
		$urlRouterProvider.otherwise('/home');

		$stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
			.state('home', {
				url: '/home',
				templateUrl: 'components/home.html',
				controller: "HomeController",
				controllerAs: "homeController",
				bindToController: true
			})
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
			.state('about', {
				// we'll get to this in a bit
				url: '/about',
				templateUrl: 'components/about.html',
				controller: "AboutController",
				controllerAs: "aboutController",
				bindToController: true   
			});
	});

	app.run(function () { // instance-injector
		// This is an example of a run block.
		// You can have as many of these as you want.
		// You can only inject instances (not Providers)
		// into run blocks
	});
	
	
	app.controller("HomeController", function () {
		var self = this;
		
	});
	
	app.controller("AboutController", function () {
		var self = this;
		
	});



} ());