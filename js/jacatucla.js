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

angular.module('jacatucla', ['ngRoute'])
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

angular.module('jacatucla')
.directive('jacSidebar', function(CONTENT_PATH) {
  return {
    templateUrl: CONTENT_PATH + 'templates/sidebar.php'
  };
});

angular.module('jacatucla')
.filter('to_trusted', ['$sce', function($sce) {
  return function(text) {
    return $sce.trustAsHtml(text);
  };
}])
.filter('convert_rfc_date', function() {
  return function(date_string) {
    var unix_time = new Date(date_string);
    var months = ["January", "February", "March", "April", "June", "July", "August", "September", "October", "November", "December"];
    var month = months[unix_time.getMonth() - 1];
    var day = unix_time.getDate();
    var year = unix_time.getFullYear();
    return month + ' ' + day + ', ' + year;
  };
});

angular.module('jacatucla')
.factory('jac_services', function($http) {
  var jac_services = {};

  jac_services.get_site_info = $http({method: 'GET', url: 'wp-json/'});

  jac_services.get_pages = $http({method: 'GET', url: 'wp-json/pages', params: {'filter[orderby]': 'menu_order', 'filter[order]': 'asc' }});
  
  jac_services.get_posts = function(index) {
    return $http({method: 'GET', url: 'wp-json/posts', params: {'page': index}});
  };

  jac_services.get_albums = $http({method: 'GET', url: 'https://picasaweb.google.com/data/feed/api/user/116245231045240410001', params: {'alt': 'json'}});
  
  jac_services.get_photos = function(album_id) {
     return $http({method: 'GET', url: 'https://picasaweb.google.com/data/feed/api/user/116245231045240410001/albumid/' + album_id, params: {'alt': 'json', 'thumbsize': '160'}});
  };

  return jac_services;
});

angular.module('jacatucla')
.controller('blog_controller', function($scope, $sce, jac_services) {
  
  $scope.index = 1;

  jac_services.get_posts($scope.index)
  .then(function(response) {
    $scope.posts = response.data;
  });

  $scope.prev_posts = function() {
    jac_services.get_posts($scope.index+1)
    .then(function(response) {
      if (response.data.length === 0) {
        return;
      }
      $scope.posts = response.data;
      $scope.index++;
    });
  };

  $scope.next_posts = function() {
    if ($scope.index === 1) {
      return;
    }
    $scope.index--;
    jac_services.get_posts($scope.index) 
    .then(function(response) {
      $scope.posts = response.data;
    });
  };

});

angular.module('jacatucla')
.controller('photos_controller', function($scope, jac_services, BASE_PATH) {

  $scope.BASE_PATH = BASE_PATH;

  jac_services.get_albums
  .then(function(response) {
    $scope.albums = response.data.feed.entry;
  });
  
});

angular.module('jacatucla')
.controller('photoset_controller', function($scope, jac_services, $routeParams, $document) {

  var album_id = $routeParams.album_id;
  $scope.slider = false;

  $scope.show_slider = function() {
    $scope.slider = true;
    $document.bind('keydown', function(e) {
      switch (e.keyCode) {
        case 27: $scope.hide_slider(); break;
        case 37: console.log('slide left'); break;
        case 39: console.log('slide right'); break;
      }
    });
    $('body').css({'overflow': 'hidden'});
  };


  $scope.hide_slider = function() {
    $scope.slider = false;
    $document.unbind('keydown');
    $('body').css({'overflow': 'auto'});
    $scope.$apply();
  };

  jac_services.get_photos(album_id)
  .error(function(data, status, headers, config) {
    console.log('error!');
  })
  .then(function(response) {
    $scope.photos = response.data.feed.entry;
  });

});

angular.module('jacatucla')
.controller('site_controller', function($scope, jac_services) {

  jac_services.get_site_info
  .then(function(response) {
    var info = response.data;
    $scope.site_name = info.name;
    $scope.site_desc = info.description; 
  });

  jac_services.get_pages
  .then(function(response) {
    $scope.pages = response.data;
  });

});
