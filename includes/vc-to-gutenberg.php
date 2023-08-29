<?php namespace WSUWP\Plugin\Gutenberg;

class VC_To_Gutenberg {

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


	public static function admin_to_gutenberg( $post ) {

		if ( 'page' === $post->post_type &&
			isset( $_GET['action'] ) &&
			'edit' === $_GET['action'] &&
			self::is_gutenberg_page() && self::should_convert( $post->post_content ) ) {

			define( 'ISDOINVCEDITOR' , true );

			$post->post_content = self::get_converted_content( $post );
		}

		return $post;

	}


	public static function frontend_to_gutenberg() {

		global $post;

		if ( ! is_admin() && is_singular( 'page' ) && self::should_convert( $post->post_content ) ) {

			$post->post_content = self::get_converted_content( $post );

		}

	}


	public static function get_converted_content( $post ) {

		$content = $post->post_content;

		$convert_codes = array( 'qode_accordion_tab', 'qode_accordion', 'qode_elements_holder_item', 'button', 'qode_elements_holder', 'message' );

		self::add_vc_shortcodes();

		self::replace_content( $content );

		global $shortcode_tags;

		$global_shortcodes = $shortcode_tags;

		foreach ( $shortcode_tags as $tag => $callback ) {

			if ( false === strpos( $tag, 'vc_' ) && ! in_array( $tag, $convert_codes, true ) ) {

				unset( $shortcode_tags[ $tag ] );

			}
		}

		$content = do_shortcode( $content );

		$shortcode_tags = $global_shortcodes;

		return $content;

	}


	protected static function add_vc_shortcodes() {

		add_shortcode( 'vc_row', array( __CLASS__, 'add_vc_row_shortcode' ) );

		add_shortcode( 'vc_row_inner', array( __CLASS__, 'add_vc_row_shortcode' ) );

		add_shortcode( 'vc_column', array( __CLASS__, 'add_vc_column_shortcode' ) );

		add_shortcode( 'vc_column_inner', array( __CLASS__, 'add_vc_column_shortcode' ) );

		add_shortcode( 'vc_column_text', array( __CLASS__, 'return_empty' ) );

		add_shortcode( 'vc_empty_space', array( __CLASS__, 'return_empty' ) );

		add_shortcode( 'vc_separator', array( __CLASS__, 'add_vc_separator_shortcode' ) );

		add_shortcode( 'button', array( __CLASS__, 'add_button_shortcode' ) );

		add_shortcode( 'vc_single_image', array( __CLASS__, 'add_vc_single_image_shortcode' ) );

		add_shortcode( 'qode_elements_holder_item', array( __CLASS__, 'return_empty' ) );

		add_shortcode( 'qode_accordion', array( __CLASS__, 'return_empty' ) );

		add_shortcode( 'qode_accordion_tab', array( __CLASS__, 'add_qode_accordion_tab_shortcode' ) );

		add_shortcode( 'qode_elements_holder', array( __CLASS__, 'return_empty' ) );

		add_shortcode( 'message', array( __CLASS__, 'add_message_shortcode' ) );

	}


	public static function return_empty( $atts, $content ) {

		$content = do_shortcode( $content );

		return $content;

	}


	public static function add_message_shortcode( $atts, $content ) {

		$default_atts = array(
			'title_tag' => '',
			'title'     => '',
		);

		shortcode_atts( $default_atts, $atts, 'qode_accordion_tab' );

		$content = do_shortcode( $content );

		$blocks = parse_blocks( $content );

		foreach ( $blocks as $block_index => $block ) {

			if ( empty( $block['blockName'] ) ) {

				$block['blockName'] = 'core/freeform';

				$blocks[ $block_index ] = $block;
			}
		}

		$content = serialize_blocks( $blocks );

		return '<!-- wp:wsuwp/callout -->' . $content . '<!-- /wp:wsuwp/callout -->';

	}


	public static function add_qode_accordion_tab_shortcode( $atts, $content ) {

		$default_atts = array(
			'title_tag' => '',
			'title'     => '',
		);

		shortcode_atts( $default_atts, $atts, 'qode_accordion_tab' );

		$content = do_shortcode( $content );

		$blocks = parse_blocks( $content );

		foreach ( $blocks as $block_index => $block ) {

			if ( empty( $block['blockName'] ) ) {

				$block['blockName'] = 'core/freeform';

				$blocks[ $block_index ] = $block;
			}

		}

		$content = serialize_blocks( $blocks );

		return '<!-- wp:wsuwp/accordion {"title":"' . $atts['title'] . '","headingTag":"' . $atts['title_tag'] . '"} -->' . $content . '<!-- /wp:wsuwp/accordion -->';

	}


	public static function add_vc_row_shortcode( $atts, $content ) {

		$default_atts = array(
			'layout'    => '',
			'className' => '',
		);

		shortcode_atts( $default_atts, $atts, 'vc_row' );

		$content = do_shortcode( $content );

		if ( empty( $atts['layout'] ) ) {

			return $content;

		}

		return '<!-- wp:wsuwp/row {"layout":"' . $atts['layout'] . '","className":"' . $atts['className'] . '"} -->' . $content . '<!-- /wp:wsuwp/row -->';

	}

	public static function add_vc_row_inner_shortcode( $atts, $content ) {

		$default_atts = array(
			'layout'    => '',
			'className' => '',
		);

		shortcode_atts( $default_atts, $atts, 'vc_row_inner' );

		$content = do_shortcode( $content );

		if ( empty( $atts['layout'] ) ) {

			return $content;

		}

		return '<!-- wp:wsuwp/row {"layout":"' . $atts['layout'] . '","className":"' . $atts['className'] . '"} -->' . $content . '<!-- /wp:wsuwp/row -->';

	}

	public static function add_vc_column_shortcode( $atts, $content ) {

		$default_atts = array(
			'className' => '',
			'width'     => '',
		);

		shortcode_atts( $default_atts, $atts, 'vc_column' );

		$content = do_shortcode( $content );

		$blocks = parse_blocks( $content );

		foreach ( $blocks as $block_index => $block ) {

			if ( empty( $block['blockName'] ) ) {

				$block['blockName'] = 'core/freeform';

				$blocks[ $block_index ] = $block;
			}

		}

		$content = serialize_blocks( $blocks );

		if ( empty( $atts['width'] ) ) {

			return $content;

		}

		return '<!-- wp:wsuwp/column {"className":"' . $atts['className'] . '"} -->' . $content . '<!-- /wp:wsuwp/column -->';

	}


	public static function add_vc_separator_shortcode( $atts, $content ) {

		$default_atts = array(
			'type'    => '',
		);

		shortcode_atts( $default_atts, $atts, 'vc_separator' );

		$content = do_shortcode( $content );

		if ( 'small' === $atts['type'] ) {

			return $content;

		}

		return '<!-- wp:separator --><hr class="wp-block-separator has-alpha-channel-opacity"/><!-- /wp:separator -->';

	}

	public static function add_button_shortcode( $atts, $content ) {

		$default_atts = array(
			'size' => '',
			'text' => '',
			'link' => '',
		);

		shortcode_atts( $default_atts, $atts, 'button' );

		$content = do_shortcode( $content );

		$button_class_name = 'wsu-button\u002d\u002dstyle-outline';

		$button_class_name .= ( 'small' === $atts['size'] ) ? ' wsu-button\u002d\u002dsize-small' : '';

		$block = '<!-- wp:wsuwp/button {"buttonText":"' . $atts['text'] . '","buttonUrl":"' . $atts['link'] . '","buttonClassName":"' . $button_class_name . '"} /-->';

		return ( defined( 'ISDOINVCEDITOR') ) ? $block : do_blocks( $block );

	}

	public static function add_vc_single_image_shortcode( $atts, $content ) {

		$default_atts = array(
			'image'     => '',
			'img_size'  => '',
			'alignment' => '',
		);

		shortcode_atts( $default_atts, $atts, 'button' );

		$url = wp_get_attachment_image_url( (int) $atts['image'], $atts['img_size'] );

		$content = do_shortcode( $content );

		$block = '<!-- wp:image {"id":' . $atts['image'] . ',"sizeSlug":"' . $atts['img_size'] . '","linkDestination":"none"} --><figure class="wp-block-image size-' . $atts['img_size'] . '"><img src="' . $url . '" alt="" class="wp-image-' . $atts['image'] . '"/></figure><!-- /wp:image -->';

		return ( defined( 'ISDOINVCEDITOR') ) ? $block : do_blocks( $block );

	}


	protected static function replace_content( &$content ) {

		$content = str_replace( '][vc_column_inner width="1/2"]', ' layout="halves"][vc_column_inner width="1/2"]', $content );
		$content = str_replace( '][vc_column_inner width="1/3"]', ' layout="thirds"][vc_column_inner width="1/3"]', $content );
		$content = str_replace( '][vc_column_inner width="1/4"]', ' layout="quarters"][vc_column_inner width="1/4"]', $content );
		$content = str_replace( '[/vc_column_inner layout="halves"]', '[/vc_column_inner]', $content );
		$content = str_replace( '[/vc_column_inner layout="thirds"]', '[/vc_column_inner]', $content );
		$content = str_replace( '[/vc_column_inner layout="quarters"]', '[/vc_column_inner]', $content );

		$content = str_replace( '][vc_column width="1/2"]', ' layout="halves"][vc_column width="1/2"]', $content );
		$content = str_replace( '][vc_column width="1/3"]', ' layout="thirds"][vc_column width="1/3"]', $content );
		$content = str_replace( '][vc_column width="1/4"]', ' layout="quarters"][vc_column width="1/4"]', $content );
		$content = str_replace( '[/vc_column layout="halves"]', '[/vc_column]', $content );
		$content = str_replace( '[/vc_column layout="thirds"]', '[/vc_column]', $content );
		$content = str_replace( '[/vc_column layout="quarters"]', '[/vc_column]', $content );

	}


	public static function should_convert( $content ) {

		return ( false !== strpos( $content, '[vc_' ) || false !== strpos( $content, '[qode_' ) );

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

		add_filter( 'the_post', array( __CLASS__, 'admin_to_gutenberg' ), 10, 2 );
		add_action( 'wp', array( __CLASS__, 'frontend_to_gutenberg' ) );

	}

}

VC_To_Gutenberg::init();
