angular.module('jacatucla')
.controller('content_controller', function(jac_services) {
  jac_services.get_site_info.then(function(response) {
    console.log(response.data);
  });
});
