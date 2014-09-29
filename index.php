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
      <div class="col-12">
        <?php
          while ( have_posts() ) : 
            the_post();
            $title = get_the_title();
            $excerpt = get_the_excerpt();
            $content = get_the_content();
            $date = get_the_date();
            $link = get_the_permalink();
        ?>
        <div class="post-wrapper">
          <div class="row">
            <div class="col-3 post-side">
              <?= $date ?>
            </div>
            <div class="col-9 post-col">
              <div class="post-header">
                <a href="<?= $link ?>">
                  <h2 class="post-title"><?= $title ?></h2>
                </a>
                <?php if ( is_sticky() ): ?>
                  <div class="post post-content">
                    <?= $content ?>
                  </div>
                <?php else: ?>
                  <div class="post-excerpt">
                    <?= $excerpt ?>
                  </div>
                  <a href="<?= $link ?>">
                    <span class="post-read-more">Read More</span>
                  </a>
                <?php endif; ?>
              </div>
            </div>
          </div>
        </div>
        <?php
          wp_reset_postdata();
          endwhile; 
        ?>
      </div>
    </div>
    <div class="row">
      <div class="col-12 nav-button-wrapper">
        <?php next_posts_link( '<button class="nav-button">Prev <div></div><div class="glyphicon glyphicon-arrow-left nav-button-arrow"></div></button>' ); ?>
        <?php previous_posts_link( '<button class="nav-button">Next <div></div><div class="glyphicon glyphicon-arrow-right nav-button-arrow"></div></button>' ); ?>
      </div>
    </div>
    </noscript>
  </div>
  <div class="col-3">
    <?php get_sidebar(); ?>
  </div>
</div>
<?php get_footer(); ?>