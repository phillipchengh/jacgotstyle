var BASE_PATH = '/wordpress';
var CONTENT_PATH = BASE_PATH + '/wp-content/themes/jacgotstyle/';

var PAGES = [
  {
    name: 'Home',
    path: BASE_PATH + '/',
    route: {
      templateUrl: CONTENT_PATH + 'templates/blog.html',
      controller: 'blog_controller',
      data: {
        tab: 'Home'
      }
    }
  },
  {
    name: 'Page',
    path: BASE_PATH + '/page/:page_number',
    route: {
      templateUrl: CONTENT_PATH + 'templates/blog.html',
      controller: 'blog_controller',
      data: {
        tab: 'Home'
      }
    }
  },
  {
    name: 'Archives',
    path: BASE_PATH + '/20:year/:month',
    route: {
      templateUrl: CONTENT_PATH + 'templates/blog.html',
      controller: 'archives_controller',
      data: {
        tab: 'Home'
      }
    }
  },
  {
    name: 'Archives Page',
    path: BASE_PATH + '/20:year/:month/page/:page_number',
    route: {
      templateUrl: CONTENT_PATH + 'templates/blog.html',
      controller: 'archives_controller',
      data: {
        tab: 'Home'
      }
    } 
  },
  {
    name: 'About',
    path: BASE_PATH + '/about',
    route: {
      templateUrl: CONTENT_PATH + 'templates/about.html',
      data: {
        tab: 'About'
      }
    }
  },
  {
    name: 'Fresh Produce',
    path: BASE_PATH + '/fresh-produce',
    route: {
      templateUrl: CONTENT_PATH + 'templates/freshproduce.html',
      data: {
        tab: 'Fresh Produce'
      }
    }
  },
  {
    name: 'Photos',
    path: BASE_PATH + '/photos',
    route: {
      templateUrl: CONTENT_PATH + 'templates/photos.html',
      controller: 'photos_controller',
      data: {
        tab: 'Photos'
      }
    }
  },
  {
    name: 'Photoset',
    path: BASE_PATH + '/photoset',
    route: {
      templateUrl: CONTENT_PATH + 'templates/photoset.html',
      controller: 'photoset_controller',
      data: {
        tab: 'Photos'
      }
    }
  },
  {
    name: 'Officers',
    path: BASE_PATH + '/officers',
    route: {
      templateUrl: CONTENT_PATH + 'templates/officers.html',
      controller: 'officers_controller',
      data: {
        tab: 'Officers'
      }
    }
  },
  {
    name: 'Contact',
    path: BASE_PATH + '/contact',
    route: {
      templateUrl: CONTENT_PATH + 'templates/contact.html',
      data: {
        tab: 'Contact'
      }
    }
  },
  {
    name: 'Post',
    path: BASE_PATH + '/:name',
    route: {
      templateUrl: CONTENT_PATH + 'templates/post.html',
      controller: 'post_controller',
      data: {
        tab: 'Home'
      }
    }
  }
];

angular.module('jacatucla', ['ngRoute', 'ngAnimate', 'ui.bootstrap'])
.constant('PAGES', PAGES)
.constant('CONTENT_PATH', CONTENT_PATH)
.constant('BASE_PATH', BASE_PATH)
.config(function($routeProvider, $locationProvider, PAGES) {
  $locationProvider.html5Mode(true);
  for (var i = 0; i < PAGES.length; i++) {
    $routeProvider.when(PAGES[i].path, PAGES[i].route);  
  }
  // $routeProvider.otherwise({
  //   redirectTo: BASE_PATH + '/'
  // });
})
.run(function() {
});
