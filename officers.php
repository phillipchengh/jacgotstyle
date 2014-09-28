<?php
/**
 * Template Name: Officers
 *
 * @package WordPress
 * @subpackage jacgotstyle
 * @since jacgotstyle 0.1
 */

get_header(); ?>
<div class="site-content-wrapper row">
  <div class="col-9">
    <div ng-view class="view-animate">
      <noscript>
        <?php include ('templates/officers.html'); ?> 
      </noscript>
    </div>
  </div>
  <div class="col-3">
    <?php get_sidebar(); ?>
  </div>
</div>
<?php get_footer(); ?>
