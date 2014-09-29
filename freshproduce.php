<?php
/**
 * Template Name: Fresh Produce
 *
 * @package WordPress
 * @subpackage jacgotstyle
 * @since jacgotstyle 0.1
 */

get_header(); ?>
<div class="site-content-wrapper row">
  <div class="col-9">
    <div ng-view class="view-animate">
    </div>
    <noscript>
      <?php include ('templates/freshproduce.html'); ?> 
			<div class="post post-content">
			You need JavaScript to view our photos on this page, but you can view our albums at <a href="https://plus.google.com/photos/116245231045240410001/albums?banner=pwa">picasa.</a>
			</div>
    </noscript>
  </div>
  <div class="col-3">
    <?php get_sidebar(); ?>
  </div>
</div>
<?php get_footer(); ?>
