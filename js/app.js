var BASE_PATH = '/wordpress';
var CONTENT_PATH = 'wp-content/themes/jacgotstyle/';
var pages = [
  {
    name: 'Home',
    path: BASE_PATH + '/',
    route: {
      templateUrl: CONTENT_PATH + 'templates/blog.html',
      controller: 'blog_controller'
    }
  },
  {
    name: 'About',
    path: BASE_PATH + '/about',
    route: {
      templateUrl: CONTENT_PATH + 'templates/about.html'
    }
  }
];

angular.module('jacatucla', ['ngRoute'])
.constant('pages', pages)
.config(function($routeProvider, $locationProvider, pages) {
  $locationProvider.html5Mode(true);
  for (var i = 0; i < pages.length; i++) {
    $routeProvider.when(pages[i].path, pages[i].route);  
  }
  $routeProvider.otherwise({
    redirectTo: BASE_PATH + '/'
  });
  console.log($routeProvider);
})
.run(function() {
  // $routeProvider.otherwise({
  //   redirectTo: '/'
  // });

  // $http.get('/')
});
