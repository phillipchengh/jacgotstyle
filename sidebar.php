<div class="sidebar-wrapper" ng-controller="sidebar_controller">
  <div class="sidebar-container">
    <div class="widget">
      <div class="widget-title">
        Find Us!
      </div>
      <div class="widget-content">
        <?php
          dynamic_sidebar( 'club-info' );
        ?>
      </div>
    </div>
    <div class="widget">
      <div class="widget-title">
        Archives
      </div>
      <div class="widget-content">
        <?php
          wp_get_archives( array(
            'format' => 'custom',
            'before' => '<div class="archive-href">',
            'after' => '</div>'
          ) );
        ?>
      </div>
      <?php
        dynamic_sidebar( 'sidebar-widgets' );
      ?>
    </div>
  </div>
</div>
