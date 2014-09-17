var BASE_PATH = '/wordpress';
var CONTENT_PATH = BASE_PATH + '/wp-content/themes/jacgotstyle/';

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
    name: 'Page',
    path: BASE_PATH + '/page/:page_number',
    route: {
      templateUrl: CONTENT_PATH + 'templates/blog.html',
      controller: 'blog_controller'
    }
  },
  {
    name: 'Archives',
    path: BASE_PATH + '/20:year/:month',
    route: {
      templateUrl: CONTENT_PATH + 'templates/archives.html',
      controller: 'archives_controller'
    }
  },
  {
    name: 'Archives Page',
    path: BASE_PATH + '/20:year/:month/page/:page_number',
    route: {
      templateUrl: CONTENT_PATH + 'templates/archives.html',
      controller: 'archives_controller'
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
    name: 'Fresh Produce',
    path: BASE_PATH + '/fresh-produce',
    route: {
      templateUrl: CONTENT_PATH + 'templates/freshproduce.html'
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
  },
  {
    name: 'Officers',
    path: BASE_PATH + '/officers',
    route: {
      templateUrl: CONTENT_PATH + 'templates/officers.html',
      controller: 'officers_controller'
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
});
