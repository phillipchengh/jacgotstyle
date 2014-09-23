<div class="sidebar-wrapper" ng-controller="sidebar_controller">
  <div class="widget-wrapper">
    <div class="widget-title">
      Find Us!
    </div>
    <div class="widget-content">
      <?php
        dynamic_sidebar( 'club-info' );
      ?>
    </div>
  </div>
  <div class="widget-wrapper">
    <div class="widget-title">
      Archives
    </div>
    <div class="widget-content">
      <?php
        wp_get_archives( array(
          'format' => 'custom',
          'before' => '<div>',
          'after' => '</div>'
        ) );
      ?>
    </div>
    <?php
      dynamic_sidebar( 'sidebar-widgets' );
    ?>
  </div>
</div>
