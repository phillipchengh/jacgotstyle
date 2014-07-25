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

	register_nav_menu( 'primary', __( 'Navigation Menu', 'jacgotstyle' ) );

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
	/*
	 * Adds JavaScript to pages with the comment form to support
	 * sites with threaded comments (when in use).
   * TODO?
	 */
	/* if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) */
	/* 	wp_enqueue_script( 'comment-reply' ); // /wp-includes/js/comment-reply.js */

	// Loads our main stylesheet.
	wp_enqueue_style( 'jac_got_style', get_stylesheet_uri(), array(), '2014-07-01' );

  // Register angular from google.
  wp_register_script( 'angular', '//ajax.googleapis.com/ajax/libs/angularjs/1.2.19/angular.min.js', array(), null, false );

  // Register jac scripts.
  wp_register_script( 'app', get_template_directory_uri() . '/js/app.js', array( 'angular' ), null, false );
  
  wp_register_script( 'services', get_template_directory_uri() . '/js/services.js', array( 'angular' ), null, false );
  
  // Enqueue angular.
  wp_enqueue_script( 'angular' );

  // Enqueue jac scripts.
  wp_enqueue_script( 'app' );

  wp_enqueue_script( 'services' );

	}
add_action( 'wp_enqueue_scripts', 'jacgotstylescripts_styles' );

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
