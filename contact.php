<?php
/**
 * Template Name: Contact
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
      <?php include ('templates/contact.html'); ?> 
    <noscript/>
  </div>
</div>
<?php get_footer(); ?>
