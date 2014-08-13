<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme and one of the
 * two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * For example, it puts together the home page when no home.php file exists.
 *
 * @link http://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage jacgotstyle
 * @since jacgotstyle 0.1
 */

get_header(); ?>
<div class="row">
  <div class="col-2">
    <div jac-sidebar>
    </div>
  </div>
  <div class="col-10">
    <div ng-view>
    </div>
  </div>
</div>
<?php get_footer(); ?>