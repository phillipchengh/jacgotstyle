<!DOCTYPE html>
<html ng-app="jacatucla">
<head>
<title>Japanese Animation Club</title>
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
<div class="site-wrapper">
<div class="row">
  <div class="col-12">
    <div class="header-wrapper">
      <a href="<?php echo get_site_url(); ?>">
        <img class="header-img" src="https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-xpf1/v/t34.0-12/10715969_724728697607927_136640849_n.jpg?oh=991d83b52c838957c02938e7fcb62097&oe=542ACEF4&__gda__=1412158377_575a0cb9fa5e0b43191583e255ecb2c8"></img>
      </a>
    </div>
  </div>
</div>
<div class="row">
  <div class="col-12">
    <?php get_sidebar( 'nav' ) ?>
  </div>
</div>

