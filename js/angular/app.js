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
  },
  {
    name: 'Photos',
    path: BASE_PATH + '/photos',
    route: {
      templateUrl: CONTENT_PATH + 'templates/photos.html',
      controller: 'photos_controller'
    }
  },
  {
    name: 'Photoset',
    path: BASE_PATH + '/photoset',
    route: {
      templateUrl: CONTENT_PATH + 'templates/photoset.html',
      controller: 'photoset_controller'
    }
  }
];

angular.module('jacatucla', ['ngRoute', 'ui.bootstrap'])
.constant('pages', pages)
.constant('CONTENT_PATH', CONTENT_PATH)
.constant('BASE_PATH', BASE_PATH)
.config(function($routeProvider, $locationProvider, pages) {
  $locationProvider.html5Mode(true);
  for (var i = 0; i < pages.length; i++) {
    $routeProvider.when(pages[i].path, pages[i].route);  
  }
  $routeProvider.otherwise({
    redirectTo: BASE_PATH + '/'
  });
})
.run(function() {
  // $routeProvider.otherwise({
  //   redirectTo: '/'
  // });

  // $http.get('/')
});
