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
    <div ng-view>
    </div>
    <noscript>
      You need JavaScript to view our photos on this page, but you can view our albums at <a href="https://plus.google.com/photos/116245231045240410001/albums?banner=pwa">picasa.</a>
    </noscript>
  </div>
</div>
<?php get_footer(); ?>
