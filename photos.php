<?php
/**
 * Template Name: Photos
 *
 * @package WordPress
 * @subpackage jacgotstyle
 * @since jacgotstyle 0.1
 */

get_header(); ?>
<div class="row">
  <div class="col-2">
    <?php get_sidebar(); ?>
  </div>
  <div class="col-10">
    <?php include ('templates/photos.html'); ?> 
  </div>
</div>
<?php get_footer(); ?>
