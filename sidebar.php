<div class="sidebar-wrapper" ng-controller="sidebar_controller">
  <?php
    dynamic_sidebar( 'club-info' );
  ?>
  <select ng-model="archive" ng-change="go_to_archive()">
  <option value="" disabled selected>Archives</option>
  <?php
    wp_get_archives(array('format' => 'option'));
  ?>
  </select>
  <?php
    dynamic_sidebar( 'sidebar-widgets' );
  ?>
</div>
