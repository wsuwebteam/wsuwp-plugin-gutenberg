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

	public static function convert_sections_to_gutenberg( $post ) {

		if ( 'page' === $post->post_type &&
			isset( $_GET['action'] ) &&
			'edit' === $_GET['action'] &&
			self::is_gutenberg_page() &&
			! self::content_has_blocks( $post->post_content ) ) {

			$section_ids = get_post_meta( $post->ID, '_ttfmake-section-ids', true );

			if ( ! empty( $section_ids ) ) {
				$content   = '';
				$meta_data = get_post_meta( $post->ID );

				foreach ( $section_ids as $section_id ) {
					$meta_prefix  = "_ttfmake:{$section_id}:";
					$section_type = $meta_data[ "{$meta_prefix}section-type" ][0];
					$config       = self::$parsing_config[ $section_type ];

					$content = self::{$config['method']}( $content, $config, $meta_prefix, $meta_data );
				}

				$post->post_content = $content;

				remove_filter( 'the_post', array( __CLASS__, 'convert_sections_to_gutenberg' ) );
			}
		}

		return $post;
	}



	public static function append_markup_for_banner( $content, $config, $meta_prefix, $meta_data ) {
		// TODO
		return $content;
	}

	public static function append_markup_for_header( $content, $config, $meta_prefix, $meta_data ) {
		// TODO
		return $content;
	}

	public static function append_markup_for_row( $content, $config, $meta_prefix, $meta_data ) {
		$section_title   = $meta_data[ "{$meta_prefix}section-title" ][0];
		$section_classes = self::filter_section_classes( $meta_data[ "{$meta_prefix}section-classes" ][0] );

		if ( ! empty( $section_title ) ) {
			$level    = $meta_data[ "{$meta_prefix}header-level" ][0];
			$content .= '<!-- wp:heading {"level":' . substr( $level, -1 ) . '} -->';
			$content .= "<$level>$section_title</$level>";
			$content .= '<!-- /wp:heading -->';
		}

		$content .= '<!-- wp:wsuwp/row {"layout":"' . $config['layout'] . '","className":"' . $section_classes . '"} -->';

		for ( $i = 1; $i <= $config['numberOfColumns']; $i++ ) {
			$column_title   = $meta_data[ "{$meta_prefix}columns:{$i}:title" ][0];
			$column_classes = $meta_data[ "{$meta_prefix}columns:{$i}:column-classes" ][0];
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

	/*
	$meta["_ttfmake:1569601132204:title"]

	$meta["_ttfmake:1569601154570:header-level"]

	$meta["_ttfmake:1569601132204:section-classes"]

	$meta["_ttfmake:1569601154570:columns-order:0"]
	$meta["_ttfmake:1569601154570:columns:1:title"]
	$meta["_ttfmake:1569601154570:columns:1:header-level"]
	$meta["_ttfmake:1569601154570:columns:1:column-classes"]
	$meta["_ttfmake:1569601154570:columns:1:content"]
	$meta["_ttfmake:1569601154570:section-layout"]
	*/



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

		add_filter( 'the_post', array( __CLASS__, 'convert_sections_to_gutenberg' ) );

	}

}

Make_To_Gutenberg::init();
