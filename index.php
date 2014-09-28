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
<div class="site-content-wrapper row">
  <div class="col-9">
    <div ng-view class="view-animate">
    </div>
    <noscript>
    <div class="row">
      <?php
        jacatucla_paging_nav();
        $posts = get_posts();
        foreach ( $posts as $post ) : 
          setup_postdata( $post );
          $title = get_the_title();
          $content = get_the_content();
          $date = get_the_date();
      ?>
        <div class="post">
          <?= $title ?>  
          <?= $content ?>
          <?= $date ?>
        </div>
      <?php
        endforeach; 
      ?>
    </div>
    </noscript>
  </div>
  <div class="col-3">
    <?php get_sidebar(); ?>
  </div>
</div>
<?php get_footer(); ?>