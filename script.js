	// create the module and name it ColbyApp
	var ColbyApp = angular.module('ColbyApp', ['ngRoute', 'ngAnimate']);

	// configure our routes
	ColbyApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			// route for the home page
			.when('/whoami', {
				templateUrl : 'pages/whoami.html',
				controller  : 'whoamiController'
			})

			// route for the skills page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			})

			// route for the contact page
			.when('/projects', {
				templateUrl : 'pages/projects.html',
				controller  : 'projectsController'
			});

	});

	// create the controller and inject Angular's $scope
	ColbyApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.homeQuote = "My name’s Colby and I’m a Web Developer in CT. I’m currently a digital team member and problem solver at Mintz + Hoke Advertising Agency.";
		$scope.pageClass = 'home';
	
		
		
	});

	// create the controller and inject Angular's $scope
	ColbyApp.controller('whoamiController', function($scope) {
		// create a message to display in our view
		$scope.whoamiQuote = "I don't want to change the world. I just want to change the way we interact with it.";
		// $scope.school = 'Computer science student concentrating in software development. Currently I am a senior attending school at Marist College in Poughkeepsie, New York and will be graduating in Spring 2017!';
		// $scope.minors = 'Along with the 4 year B.S. in computer science I am also minoring in Cybersecurity, Information Systems, and Information Technology.';
		// $scope.frontEnd = 'I strive at creating simple, yet polished designs through using many different variations of design principles. There is no better way to learn than experience, and through trial and error I aim to broaden my knowledge each day.';
		// $scope.intern = 'I have held two previous summer internships working in Enterprise Technology Departments for two healthcare providers. With the combination of my professional and academic careers, I have a very broad range of knowledge to offer.'
		// $scope.whoamiFooter = 'Upon Graduating, I aspire to work for a company where I can further the extent of my knowledge through the challenges I am given.'

	});

	ColbyApp.controller('projectsController', function($scope) {
		$scope.headline = 'Sometimes computer science is a lot more art than it is science, and that is what I like most about it.';
		$scope.languages = 'AngularJS, C++, HTML5, CSS, PHP, MySQL, SQL, JavaScript, Haskell, Swift';
		$scope.frameworks = 'Bootstrap, Skeleton';
		$scope.mainframe = 'IBM Z Systems, z/OS, z/TPF, JCL, COBOL, JSON, MongoDB';
		$scope.technical = 'Network infrastructure, Wireshark, Nmap, OpenVAS, Oracle, Access, Hexadecimal, Binary, Hexadecimal-Binary conversions, Ceaser Cyphers, Word, Excel, PowerPoint, Photoshop';
		$scope.skillsFooter = 'At the moment I am in the process of building a compiler, which takes up much of my free time on top of applying to jobs.'

		$(document).ready(function () {
			var forEach = function (array, callback, scope) {
			for (var i = 0; i < array.length; i++) {
			  callback.call(scope, i, array[i]); // passes back stuff we need
			}
		  };
		
		  var containers = document.querySelectorAll(".container-phone");
		
		  forEach(containers, function (index, value) {
			value.addEventListener("click", function () {
			  this.classList.toggle("alert-is-shown");
			});
		  });
		});  

		$(document).ready(function () {
			var forEach2 = function (array2, callback2, scope2) {
			for (var j = 0; j < array2.length; j++) {
			  callback2.call(scope2, j, array2[j]); // passes back stuff we need
			}
		  };
		
		  var containers2 = document.querySelectorAll(".container-tablet");
		
		  forEach2(containers2, function (index, value) {
			value.addEventListener("click", function () {
			  this.classList.toggle("alert-is-shown");
			});
		  });
		});  

	});

	ColbyApp.controller('contactController', function($scope) {
		$scope.shoutOut = "Need more info? Let's get aquainted!";
		$scope.instagram = ' To see random pictures of me on Instagram.';
		$scope.spotify = 'Check out music I like on Spotify.';
		$scope.github = 'My new Github for my compiler.';
		$scope.email = 'Email me at colbydashmoore@gmail.com!';
		$scope.marist = "Marist College's wesbite.";
		$scope.programs = "See the computer science program at Marist here.";
		$scope.cybersecurity = 'Cybersecurity Minor.';
		$scope.itMinor = 'Information Technology Minor.';
		$scope.isMinor = 'Information Systems Minor.';
		$scope.contactFooter = "I'm not a very big poster on any sort of social media but feel free to contact me or add me on any of the following.";

	});
