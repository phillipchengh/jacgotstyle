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
        <img class="header-img" src="https://trello-attachments.s3.amazonaws.com/538bbf6dde2096b45b3e0c65/1300x381/8d4497f3866a1189018abc8585533d26/JAC_cleaned_up.png"></img>
      </a>
      <div class="social-media-wrapper">
        <a href="https://www.facebook.com/groups/2229680515/">
          <img class="social-media-img" src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/facebook_circle_color-512.png"></img>
        </a>
        <a href="https://groups.google.com/forum/#!forum/ucla-jac">
          <img class="social-media-img" src="http://www.uniform-exchange.com/wp-content/uploads/2014/08/mail.png"></img>
        </a>
        <a href="./feed" target="_self">
          <img class="social-media-img" src="http://www.claudereynoldsinsurance.com/img/~www.claudereynoldsinsurance.com/right%20column/rss%202.png"></img>
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

