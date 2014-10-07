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
        <img class="header-img" src="http://i.imgur.com/IoXwhtA.png"></img>
      </a>
      <div class="social-media-wrapper">
        <a href="https://www.facebook.com/groups/2229680515/">
          <img class="social-media-img" src="http://i.imgur.com/kYqKGv2.png"></img>
        </a>
        <a href="https://groups.google.com/forum/#!forum/ucla-jac">
          <img class="social-media-img" src="http://i.imgur.com/H2s3e4z.png"></img>
        </a>
        <a href="./feed" target="_self">
          <img class="social-media-img" src="http://i.imgur.com/RGFjzYm.png"></img>
        </a>
      </div>
    </div>
  </div>
</div>
<div class="row">
  <div class="col-12">
    <?php get_sidebar( 'nav' ) ?>
  </div>
</div>

