<?php
/**
 * The Template for displaying all single posts
 *
 * @package WordPress
 * @subpackage Twenty_Fourteen
 * @since Twenty Fourteen 1.0
 */

get_header(); ?>
<div class="row">
  <div class="col-12">
    <?php get_sidebar( 'nav' ) ?>
  </div>
</div>
<div class="site-content-wrapper row">
  <div class="col-9">
    <div ng-view class="view-animate">
    </div>
    <noscript>
    <div class="row">
      <?php
        while ( have_posts() ) :
          the_post();
          $title = get_the_title();
          $content = get_the_content();
          $date = get_the_date();
          $link = get_the_permalink();
        endwhile;
      ?>
      <div class="col-3 post-side">
        <?= $date ?>
      </div>
      <div class="col-9">
        <div class="post-header">
        <a href="<?= $link?>">
          <h2 class="post-title"><?= $title ?></h2>
        </a>
        </div>
        <div class="post post-content">
          <?= $content ?>
        </div>
    </div>
    </div>
    </noscript>
  </div>
  <div class="col-3">
    <?php get_sidebar(); ?>
  </div>
</div>
<?php get_footer(); ?>
