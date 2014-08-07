angular.module('jacatucla')
.controller('blog_controller', function($scope, jac_services) {

  jac_services.get_posts(0)
  .then(function(response) {
    console.log(response.data);
  });
});
