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


	app.controller("HomeController", function () {
		var self = this;

	});

	app.controller("AboutController", function () {
		var self = this;

	});

	app.animation('.main-view', function () {
		return {
			enter: function (element, done) {
				
				var duration = 0.5;
				
				TweenMax.set(element, {
					backgroundColor: '#fff',
					opacity: 0,
					top: "400px",
					scaleX: 0.3,
					scaleY: 0.3
				});
				
				TweenMax.to(element, duration, {
					delay: 0.5,
					top: "50px",
					opacity: 1,
					scaleX: 1,
					scaleY: 1,
					ease: Power4.easeOut,
					onComplete: done
				});
				
				TweenMax.to(element, duration, {
					delay: 0.5,
					opacity: 1,
					onComplete: done
				});
			},

			leave: function (element, done) {
				
				var duration = 0.2;
				
				TweenMax.to(element, duration, {
					delay: 0.3,
					top: "400px",
					opacity: 0,
					scaleX: 0.3,
					scaleY: 0.3,
					ease: Power4.easeIn,
					onComplete: done
				});
			}
		};
	});

} ());