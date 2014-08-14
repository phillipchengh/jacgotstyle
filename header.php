<html ng-app="jacatucla">
<head>
<?php
/**
 * The Header template for our theme
 *
 * Displays all of the <head> section and everything up till <div id="main">
 *
 * @package WordPress
 * @subpackage jacgotstyle
 * @since jacgotstyle 0.1
 */
wp_head();
?>
</head>
<body>
<div class="row">
  <div class="col-12">
    <div class="header-wrapper">
      HEADER
    </div>
  </div>
</div>
<div class="row">
  <div class="col-12 nav-wrapper">
    <?php 
    $menu_name = 'jac_menu';
    if ( ( $locations = get_nav_menu_locations() ) && isset( $locations[ $menu_name ] ) ) {
      $menu = wp_get_nav_menu_object( $locations[ $menu_name ] );
      $menu_items = wp_get_nav_menu_items($menu->term_id);
      foreach( (array) $menu_items as $key => $menu_item ) : 
        $url = $menu_item->url;
        $title = $menu_item->title;
    ?>
    <div class="nav-item-wrapper">
      <a href="<?= $url ?>"><?= $title ?></a>
    </div>
    <?php
      endforeach; 
    }
    ?>
  </div>
</div>
