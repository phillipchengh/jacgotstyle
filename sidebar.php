<div class="sidebar-wrapper" ng-controller="sidebar_controller">
  <div class="sidebar-title">
    Club Info
  </div>
  <?php
    dynamic_sidebar( 'club-info' );
  ?>
  <div class="sidebar-title">
    Archives
  </div>
  <?php
    wp_get_archives( array(
      'format' => 'custom',
      'before' => '<div>',
      'after' => '</div>'
    ) );
  ?>
  <?php
    dynamic_sidebar( 'sidebar-widgets' );
  ?>
</div>
