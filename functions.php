<?php
/**
 * jacgotstyle functions and definitions
 *
 * @package jacgotstyle
 */

/**
 * jacgotstyle setup.
 *
 * Sets up theme defaults and registers the various WordPress features.
 *
 * @uses load_theme_textdomain() For translation/localization support.
 * @uses add_editor_style() To add Visual Editor stylesheets.
 * @uses add_theme_support() To add support for automatic feed links, post
 * formats, and post thumbnails.
 * @uses register_nav_menu() To add support for a navigation menu.
 * @uses set_post_thumbnail_size() To set a custom post thumbnail size.
 */
function jacgotstylesetup() {

	/*
	 * This theme styles the visual editor to resemble the theme style,
	 * specifically font, colors, icons, and column width.
   * TODO?
	 */
	add_editor_style( array( 'css/editor-style.css', 'fonts/genericons.css', jacgotstylefonts_url() ) );

	register_nav_menu( 'jac_menu', __( 'Navigation Menu', 'jacgotstyle' ) );

		}
add_action( 'after_setup_theme', 'jacgotstylesetup' );

/**
 * Return the Google font stylesheet URL, if available.
 *
 * The use of Source Sans Pro and Bitter by default is localized. For languages
 * that use characters not supported by the font, the font can be disabled.
 *
 * @since Twenty Thirteen 1.0
 *
 * @return string Font stylesheet or empty string if disabled.
 */
function jacgotstylefonts_url() {
	$fonts_url = '';

	/* Translators: If there are characters in your language that are not
	 * supported by Source Sans Pro, translate this to 'off'. Do not translate
	 * into your own language.
	 */
	$source_sans_pro = _x( 'on', 'Source Sans Pro font: on or off', 'jacgotstyle' );

	/* Translators: If there are characters in your language that are not
	 * supported by Bitter, translate this to 'off'. Do not translate into your
	 * own language.
	 */
  $bitter = _x( 'on', 'Bitter font: on or off', 'jacgotstyle' );

	if ( 'off' !== $source_sans_pro || 'off' !== $bitter ) {
		$font_families = array();

		if ( 'off' !== $source_sans_pro )
			$font_families[] = 'Source Sans Pro:300,400,700,300italic,400italic,700italic';

		if ( 'off' !== $bitter )
			$font_families[] = 'Bitter:400,700';

		$query_args = array(
			'family' => urlencode( implode( '|', $font_families ) ),
			'subset' => urlencode( 'latin,latin-ext' ),
		);
		$fonts_url = add_query_arg( $query_args, "//fonts.googleapis.com/css" );
	}

	return $fonts_url;
}


/**
 * Enqueue scripts and styles for the front end.
 *
 */
function jacgotstylescripts_styles() {
	
	// Loads our main stylesheet.
	wp_enqueue_style( 'jac_got_style', get_stylesheet_uri(), array(), '2014-07-01' );
  /* wp_enqueue_style( 'bootstrap', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css', array(), '2014-07-01' ); */
  /* wp_enqueue_style( 'bootstrap-carousel', 'http://blog.revolunet.com/angular-carousel/dist/angular-carousel.min.css', array(), '2014-07-01' ); */

  // Register angular from google.
  wp_register_script( 'jQuery', '//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js', array(), null, false );
  wp_register_script( 'angular', '//ajax.googleapis.com/ajax/libs/angularjs/1.2.19/angular.min.js', array(), null, false );
  wp_register_script( 'angular-route', '//cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.20/angular-route.min.js', array(), null, false );

  // Register angular from ourselves.
  // wp_register_script( 'angular', get_template_directory_uri() . '/js/libs/angular.min.js', array(), null, false );

  // Register our main javascript.
  wp_register_script( 'jacatucla', get_template_directory_uri() . '/js/jacatucla.js', array( 'angular', 'angular-route' ), null, false );
  
  // Enqueue angular.
  wp_enqueue_script( 'angular' );
  wp_enqueue_script( 'angular-route' );
  wp_enqueue_script( 'jQuery' );

  // Enqueue our main javascript.
  wp_enqueue_script( 'jacatucla' );
 
}
add_action( 'wp_enqueue_scripts', 'jacgotstylescripts_styles' );

if ( ! function_exists( 'jacatucla_paging_nav' ) ) :
/**
 * Display navigation to next/previous set of posts when applicable.
 *
 */
function jacatucla_paging_nav() {
	// Don't print empty markup if there's only one page.
	if ( $GLOBALS['wp_query']->max_num_pages < 2 ) {
		return;
	}

	$paged        = get_query_var( 'paged' ) ? intval( get_query_var( 'paged' ) ) : 1;
	$pagenum_link = html_entity_decode( get_pagenum_link() );
	$query_args   = array();
	$url_parts    = explode( '?', $pagenum_link );

	if ( isset( $url_parts[1] ) ) {
		wp_parse_str( $url_parts[1], $query_args );
	}

	$pagenum_link = remove_query_arg( array_keys( $query_args ), $pagenum_link );
	$pagenum_link = trailingslashit( $pagenum_link ) . '%_%';

	$format  = $GLOBALS['wp_rewrite']->using_index_permalinks() && ! strpos( $pagenum_link, 'index.php' ) ? 'index.php/' : '';
	$format .= $GLOBALS['wp_rewrite']->using_permalinks() ? user_trailingslashit( 'page/%#%', 'paged' ) : '?paged=%#%';

	// Set up paginated links.
	$links = paginate_links( array(
		'base'     => $pagenum_link,
		'format'   => $format,
		'total'    => $GLOBALS['wp_query']->max_num_pages,
		'current'  => $paged,
		'mid_size' => 0,
    'end_size' => 0,
		'add_args' => array_map( 'urlencode', $query_args ),
		'prev_text' => __( '&larr; Previous', 'jacgotstyle' ),
		'next_text' => __( 'Next &rarr;', 'jacgotstyle' ),
	) );

	if ( $links ) :

	?>
	<nav class="navigation paging-navigation" role="navigation">
		<div class="pagination loop-pagination">
			<?php echo $links; ?>
		</div><!-- .pagination -->
	</nav><!-- .navigation -->
	<?php
	endif;
}
endif;

if ( ! function_exists( 'jacatucla_post_nav' ) ) :
/**
 * Display navigation to next/previous post when applicable.
*
*/
function jacatucla_post_nav() {
	global $post;

	// Don't print empty markup if there's nowhere to navigate.
	$previous = ( is_attachment() ) ? get_post( $post->post_parent ) : get_adjacent_post( false, '', true );
	$next     = get_adjacent_post( false, '', false );

	if ( ! $next && ! $previous )
		return;
	?>
	<nav class="navigation post-navigation" role="navigation">
		<h1 class="screen-reader-text"><?php _e( 'Post navigation', 'twentythirteen' ); ?></h1>
		<div class="nav-links">

			<?php previous_post_link( '%link', _x( '<span class="meta-nav">&larr;</span> %title', 'Previous post link', 'twentythirteen' ) ); ?>
			<?php next_post_link( '%link', _x( '%title <span class="meta-nav">&rarr;</span>', 'Next post link', 'twentythirteen' ) ); ?>

		</div><!-- .nav-links -->
	</nav><!-- .navigation -->
	<?php
}
endif;

/**
 * Filter the page title.
 *
 * Creates a nicely formatted and more specific title element text for output
 * in head of document, based on current view.
 *
 * @param string $title Default title text for current view.
 * @param string $sep   Optional separator.
 * @return string The filtered title.
 * TODO?
 */

/* function jacgotstylewp_title( $title, $sep ) { */
/* 	global $paged, $page; */

/* 	if ( is_feed() ) */
/* 		return $title; */

/* 	// Add the site name. */
/* 	$title .= get_bloginfo( 'name', 'display' ); */

/* 	// Add the site description for the home/front page. */
/* 	$site_description = get_bloginfo( 'description', 'display' ); */
/* 	if ( $site_description && ( is_home() || is_front_page() ) ) */
/* 		$title = "$title $sep $site_description"; */

/* 	// Add a page number if necessary. */
/* 	if ( $paged >= 2 || $page >= 2 ) */
/* 		$title = "$title $sep " . sprintf( __( 'Page %s', 'jacgotstyle' ), max( $paged, $page ) ); */

/* 	return $title; */	
/* } */
/* add_filter( 'wp_title', 'jacgotstylewp_title', 10, 2 ); */

/**
 * Register two widget areas.
 *
 * TODO?
 */

/* function jacgotstylewidgets_init() { */
/* function jacgotstylewidgets_init() { */
/* 	register_sidebar( array( */
/* 		'name'          => __( 'Main Widget Area', 'jacgotstyle' ), */
/* 		'id'            => 'sidebar-1', */
/* 		'description'   => __( 'Appears in the footer section of the site.', 'jacgotstyle' ), */
/* 		'before_widget' => '<aside id="%1$s" class="widget %2$s">', */
/* 		'after_widget'  => '</aside>', */
/* 		'before_title'  => '<h3 class="widget-title">', */
/* 		'after_title'   => '</h3>', */
/* 	) ); */

/* 	register_sidebar( array( */
/* 		'name'          => __( 'Secondary Widget Area', 'jacgotstyle' ), */
/* 		'id'            => 'sidebar-2', */
/* 		'description'   => __( 'Appears on posts and pages in the sidebar.', 'jacgotstyle' ), */
/* 		'before_widget' => '<aside id="%1$s" class="widget %2$s">', */
/* 		'after_widget'  => '</aside>', */
/* 		'before_title'  => '<h3 class="widget-title">', */
/* 		'after_title'   => '</h3>', */
/* 	) ); */
/* } */
/* add_action( 'widgets_init', 'jacgotstylewidgets_init' ); */

/**
 * Enqueue Javascript postMessage handlers for the Customizer.
 *
 * Binds JavaScript handlers to make the Customizer preview
 * reload changes asynchronously.
 *
 * TODO?
 */

/* function twentythirteen_customize_preview_js() { */
/* 	wp_enqueue_script( 'twentythirteen-customizer', get_template_directory_uri() . '/js/theme-customizer.js', array( 'customize-preview' ), '20130226', true ); */
/* } */
/* add_action( 'customize_preview_init', 'twentythirteen_customize_preview_js' ); */
