<div class="nav-wrapper" ng-controller="nav_controller">
  <ul class="nav-items">
  <?php 
    // Get the jac_menu. This is registered in functions.php and managed in wp-admin.
    $menu_name = 'jac_menu';
    if ( ( $locations = get_nav_menu_locations() ) && isset( $locations[ $menu_name ] ) ) {
      $menu = wp_get_nav_menu_object( $locations[ $menu_name ] );
      $menu_items = wp_get_nav_menu_items($menu->term_id);
      foreach( (array) $menu_items as $key => $menu_item ) : 
        $url = $menu_item->url;
        $title = $menu_item->title;
  ?>
  <a class="nav-href" href="<?= $url ?>">
    <li class="nav-item-wrapper" ng-class="{'nav-active': isActive('<?= $title ?>')}">
      <?= $title ?>
    </li>
  </a>
  <?php
     endforeach; 
    }
  ?>
  </ul>
</div>
