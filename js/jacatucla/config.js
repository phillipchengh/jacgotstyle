var BASE_PATH = '/wordpress';
var CONTENT_PATH = BASE_PATH + '/wp-content/themes/jacgotstyle/';
var JAC_PICASA_USER_ID = '116245231045240410001';
var FP_ANTHOLOGY_ALBUM_ID = '6064555998234103921';

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


