<div ng-controller="sidebar_controller">
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
  <ul class="nav-item-wrapper">
    <li>
      <a href="<?= $url ?>"><?= $title ?></a>
    </li>
  </ul>
  <?php
     endforeach; 
    }
  ?>
  <select ng-model="archive" ng-change="go_to_archive()">
    <option value="" disabled selected>Archives</option>
    <?php
      wp_get_archives(array('format' => 'option'));
    ?>
  </select>
</div>
