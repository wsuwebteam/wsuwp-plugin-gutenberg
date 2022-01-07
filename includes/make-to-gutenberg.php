<?php namespace WSUWP\Plugin\Gutenberg;

class Make_To_Gutenberg {

	public static $parsing_config = array(
		'banner'            => array(
			'method' => 'append_markup_for_banner',
		),
		'wsuwpheader'       => array(
			'method' => 'append_markup_for_header',
		),
		'wsuwpsingle'       => array(
			'method'          => 'append_markup_for_row',
			'numberOfColumns' => 1,
			'layout'          => 'single',
		),
		'wsuwphalves'       => array(
			'method'          => 'append_markup_for_row',
			'numberOfColumns' => 2,
			'layout'          => 'halves',
		),
		'wsuwpthirds'       => array(
			'method'          => 'append_markup_for_row',
			'numberOfColumns' => 3,
			'layout'          => 'thirds',
		),
		'wsuwpquarters'     => array(
			'method'          => 'append_markup_for_row',
			'numberOfColumns' => 4,
			'layout'          => 'quarters',
		),
		'wsuwpsidebarright' => array(
			'method'          => 'append_markup_for_row',
			'numberOfColumns' => 2,
			'layout'          => 'sidebar-right',
		),
		'wsuwpsidebarleft'  => array(
			'method'          => 'append_markup_for_row',
			'numberOfColumns' => 2,
			'layout'          => 'sidebar-left',
		),
	);

	public static $ignored_section_classes = array(
		'gutter',
		'pad-top',
	);

	public static $color_class_map = array(
		'gray-back'          => 'wsu-color-background--gray-55',
		'gray-er-back'       => 'wsu-color-background--gray-0',
		'er-back'            => 'wsu-color-background--gray-0',
		'white-back'         => 'wsu-color-background--gray-0',
		'gray-light-back'    => 'wsu-color-background--gray-40',
		'light-back'         => 'wsu-color-background--gray-40',
		'gray-lighter-back'  => 'wsu-color-background--gray-25',
		'lighter-bac'        => 'wsu-color-background--gray-25',
		'gray-lightly-back'  => 'wsu-color-background--gray-15',
		'lightly-bac'        => 'wsu-color-background--gray-15',
		'gray-lightest-back' => 'wsu-color-background--gray-5',
		'lightest-back'      => 'wsu-color-background--gray-5',
		'gray-dark-back'     => 'wsu-color-background--gray-75',
		'dark-back'          => 'wsu-color-background--gray-75',
		'gray-darker-back'   => 'wsu-color-background--gray-80',
		'darker-bac'         => 'wsu-color-background--gray-80',
		'gray-darkest-back'  => 'wsu-color-background--gray-95',
		'darkest-back'       => 'wsu-color-background--gray-95',
		'black-bac'          => 'wsu-color-background--gray-95',
	);


	public static function admin_make_to_gutenberg( $post ) {

		if ( 'page' === $post->post_type &&
			isset( $_GET['action'] ) &&
			'edit' === $_GET['action'] &&
			self::is_gutenberg_page() &&
			! self::content_has_blocks( $post->post_content ) ) {

			$post->post_content = self::get_converted_content( $post );
		}

		return $post;

	}


	public static function frontend_make_to_gutenberg() {

		global $post;

		if ( ! is_admin() &&
			is_singular( 'page' ) &&
			! self::content_has_blocks( $post->post_content ) ) {

			$post->post_content = wpautop( self::get_converted_content( $post ) );

		}

	}


	public static function get_converted_content( $post ) {

		$section_ids = get_post_meta( $post->ID, '_ttfmake-section-ids', true );

		if ( ! empty( $section_ids ) ) {
			$content   = '';
			$meta_data = get_post_meta( $post->ID );

			foreach ( $section_ids as $section_id ) {

				$meta_prefix  = "_ttfmake:{$section_id}:";
				$section_type = $meta_data[ "{$meta_prefix}section-type" ][0];

				// Add check for custom fais section types
				$section_type = str_replace( array( 'fais' ), '', $section_type );

				$config       = self::$parsing_config[ $section_type ];

				//$content = self::{$config['method']}( $content, $config, $meta_prefix, $meta_data );

				$content = call_user_func( array( __CLASS__, $config['method'] ), $content, $config, $meta_prefix, $meta_data );
			}

			return $content;
		}

		return $post->post_content;

	}


	public static function append_markup_for_banner( $content, $config, $meta_prefix, $meta_data ) {

		$count = self::get_slide_count( $meta_prefix, $meta_data );

		for ( $i = 0; $i < $count; $i++ ) {
			$slide_id     = $meta_data[ "{$meta_prefix}banner-slide-order:$i" ][0];
			$slide_prefix = "{$meta_prefix}banner-slides:{$slide_id}:";

			$content .= '<!-- wp:wsuwp/hero {';
			$content .= '"title":"' . $meta_data[ "{$slide_prefix}slide-title" ][0] . '",';
			$content .= '"caption":"' . $meta_data[ "{$slide_prefix}content" ][0] . '",';
			$content .= '"imageId":' . $meta_data[ "{$slide_prefix}image-id" ][0] . ',';
			$content .= '"imageSrc":"' . wp_get_attachment_image_url( $meta_data[ "{$slide_prefix}image-id" ][0] ) . '",';
			$content .= '"imageFocalPoint": {"x":".5","y":".5"}';
			$content .= '} /-->';
		}

		return $content;

	}


	public static function append_markup_for_header( $content, $config, $meta_prefix, $meta_data ) {

		$title = $meta_data[ "{$meta_prefix}title" ][0];

		$content .= '<!-- wp:wsuwp/pagetitle ';
		if ( ! empty( $title ) ) {
			$content .= '{"title":"' . $title . '"} ';
		}
		$content .= '/-->';

		return $content;

	}


	public static function append_markup_for_row( $content, $config, $meta_prefix, $meta_data ) {

		$section_title   = $meta_data[ "{$meta_prefix}section-title" ][0];
		$section_classes = self::map_color_classes( self::filter_section_classes( $meta_data[ "{$meta_prefix}section-classes" ][0] ) );

		if ( ! empty( $section_title ) ) {
			$level    = $meta_data[ "{$meta_prefix}header-level" ][0];
			$content .= '<!-- wp:heading {"level":' . substr( $level, -1 ) . '} -->';
			$content .= "<$level>$section_title</$level>";
			$content .= '<!-- /wp:heading -->';
		}

		$content .= '<!-- wp:wsuwp/row {"layout":"' . $config['layout'] . '","className":"' . $section_classes . '"} -->';

		for ( $i = 1; $i <= $config['numberOfColumns']; $i++ ) {
			$column_title   = $meta_data[ "{$meta_prefix}columns:{$i}:title" ][0];
			$column_classes = self::map_color_classes( $meta_data[ "{$meta_prefix}columns:{$i}:column-classes" ][0] );
			$column_content = $meta_data[ "{$meta_prefix}columns:{$i}:content" ][0];

			$content .= '<!-- wp:wsuwp/column {"className":"' . $column_classes . '"} -->';

			if ( ! empty( $column_title ) ) {
				$level    = $meta_data[ "{$meta_prefix}columns:{$i}:header-level" ][0];
				$content .= '<!-- wp:heading {"level":' . substr( $level, -1 ) . '} -->';
				$content .= "<$level>$column_title</$level>";
				$content .= '<!-- /wp:heading -->';
			}

			$content .= '<!-- wp:freeform -->';
			$content .= $column_content;
			$content .= '<!-- /wp:freeform -->';

			$content .= '<!-- /wp:wsuwp/column -->';
		}

		$content .= '<!-- /wp:wsuwp/row -->';

		return $content;

	}


	public static function get_slide_count( $meta_prefix, $meta_data ) {

		$has_slide = true;
		$count     = 0;

		do {
			if ( ! empty( $meta_data[ "{$meta_prefix}banner-slide-order:$count" ][0] ) ) {
				$count++;
				continue;
			}

			$has_slide = false;
		} while ( $has_slide );

		return $count;

	}


	public static function map_color_classes( $classes ) {

		if ( empty( $classes ) ) {
			return '';
		}

		$classes_array = explode( ' ', $classes );

		foreach ( $classes_array as $key => $class ) {
			if ( array_key_exists( $class, self::$color_class_map ) ) {
				$classes_array[ $key ] = self::$color_class_map[ $class ];
			}
		}

		return join( ' ', array_unique( $classes_array ) );

	}


	public static function filter_section_classes( $classes ) {

		if ( empty( $classes ) ) {
			return '';
		}

		$classes_array = explode( ' ', $classes );

		$filtered_class_array = array_filter(
			$classes_array,
			function( $v ) {
				return ! in_array( $v, self::$ignored_section_classes, true );
			}
		);

		return join( ' ', $filtered_class_array );

	}


	public static function content_has_blocks( $content ) {

		return false !== strpos( $content, '<!-- wp:' );

	}


	public static function is_gutenberg_page() {

		if ( function_exists( 'is_gutenberg_page' ) && is_gutenberg_page() ) {
			return true;
		}

		$current_screen = get_current_screen();
		if ( method_exists( $current_screen, 'is_block_editor' ) && $current_screen->is_block_editor() ) {
			return true;
		}

		return false;

	}


	public static function init() {

		add_filter( 'the_post', array( __CLASS__, 'admin_make_to_gutenberg' ), 10, 2 );
		add_action( 'wp', array( __CLASS__, 'frontend_make_to_gutenberg' ) );

	}

}

Make_To_Gutenberg::init();
