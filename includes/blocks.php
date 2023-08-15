<?php namespace WSUWP\Plugin\Gutenberg;

class Blocks {


	protected static $register_blocks = array(
		'wsuwp/news-list'         => 'Block_WSUWP_News_List',
		'wsuwp/row'               => 'Block_WSUWP_Row',
		'wsuwp/column'            => 'Block_WSUWP_Column',
		'wsuwp/banner'            => 'Block_WSUWP_Banner',
		'wsuwp/decorator'         => 'Block_WSUWP_Decorator',
		'wsuwp/news'              => 'Block_WSUWP_News',
		'wsuwp/callout'           => 'Block_WSUWP_Callout',
		'wsuwp/note'              => 'Block_WSUWP_Note',
		'wsuwp/hero'              => 'Block_WSUWP_Hero',
		'wsuwp/hero-slider'       => 'Block_WSUWP_Hero_Slider',
		'wsuwp/image'             => 'Block_WSUWP_Image',
		'wsuwp/pagetitle'         => 'Block_WSUWP_Page_Title',
		'wsuwp/news-cards'        => 'Block_WSUWP_News_Cards',
		'wsuwp/accordion'         => 'Block_WSUWP_Accordion',
		'wsuwp/section'           => 'Block_WSUWP_Section',
		'wsuwp/people-list'       => 'Block_WSUWP_People_List',
		'wsuwp/button'            => 'Block_WSUWP_Button',
		'wsuwp/card'              => 'Block_WSUWP_Card',
		'wsuwp/card-group'        => 'Block_WSUWP_Card_Group',
		'wsuwp/carousel'          => 'Block_WSUWP_Carousel',
		'wsuwp/container'         => 'Block_WSUWP_Container',
		'wsuwp/menu'              => 'Block_WSUWP_Menu',
		'wsuwp/stat'              => 'Block_WSUWP_Stat',
		'wsuwp/sticky-nav'        => 'Block_WSUWP_Sticky_Nav',
		'wsuwp/outline-header'    => 'Block_WSUWP_Outline_Header',
		'wsuwp/overlap-advanced'  => 'Block_WSUWP_Overlap_Advanced',
		'wsuwp/overlap-column'    => 'Block_WSUWP_Overlap_Column',
		'wsuwp/overlap-spotlight' => 'Block_WSUWP_Overlap_Spotlight',
		'wsuwp/event-list'        => 'Block_WSUWP_Event_List',
	);

	protected static $allowed_blocks = array(
		'wsuwp/row',
		'wsuwp/news',
		'wsuwp/callout',
		'wsuwp/banner',
		'wsuwp/decorator',
		'wsuwp/note',
		'wsuwp/hero',
		'wsuwp/hero-slider',
		'wsuwp/image',
		'wsuwp/pagetitle',
		'wsuwp/news-cards',
		'wsuwp/news-list',
		'wsuwp/accordion',
		'wsuwp/section',
		'wsuwp/sticky-nav',
		'wsuwp/people-list',
		'wsuwp/button',
		'wsuwp/card',
		'wsuwp/container',
		'wsuwp/card-group',
		'wsuwp/carousel',
		'wsuwp/az-index',
		'wsuwp/programs-list',
		'wsuwp/scholarships-search',
		'wsuwp/scholarships-list',
		'wsuwp/outline-header',
		'wsuwp/overlap-advanced',
		'wsuwp/overlap-spotlight',
		'wsuwp/stat',
		'wsuwp/menu',
		'wsuwp/event-list',
		'bcn/breadcrumb-trail',
		'core/code',
		'core/embed',
		'core/freeform',
		'core/heading',
		'core/gallery',
		'core/html',
		'core/image',
		'core/list',
		'core/list-item',
		'core/paragraph',
		'core/quote',
		'core/reusableBlock',
		'core/separator',
		'core/shortcode',
		'core/spacer',
		'core/table',
		'core/video',
		'gravityforms/form',
	);


	public static function get( $property ) {

		switch ( $property ) {

			case 'register_blocks':
				return self::$register_blocks;

			default:
				return '';
		}

	}


	public static function setup_classes() {

		Plugin::load_class( 'block' );
		Plugin::load_class( 'wsu-query' );
		Plugin::load_class( 'wsu-image' );

	}


	public static function init() {

		self::setup_classes();

		add_filter( 'allowed_block_types', array( __CLASS__, 'remove_blocks' ) );

		add_action( 'init', array( __CLASS__, 'register' ) );

	}


	public static function register() {

		// Get blocks to register
		$blocks = self::$register_blocks;

		// Get the block directory
		$block_dir = Plugin::get( 'dir' ) . 'blocks/';

		foreach ( $blocks as $block => $class ) {

			// folder name should be the block name with the / replaced with - (i.e. wsuwp/name -> wsupw-name)
			$block_folder = str_replace( '/', '-', $block );

			$block_class = __NAMESPACE__ . '\\' . $class;

			require_once $block_dir . $block_folder . '/block.php';

			// Call get('register_block') to check if the block should be registered, default is true in class-block.php
			if ( call_user_func( array( $block_class, 'get' ), 'register_block' ) ) {

				register_block_type(
					$block,
					array(
						'api_version'     => 2,
						'render_callback' => array( $block_class, 'render_block' ),
						'editor_script'   => 'wsuwp-theme-wds-2-blocks',
					)
				);
			}
		}

	}


	public static function remove_blocks( $allowed_blocks ) {

		$allowed_blocks = apply_filters( 'wsu_allowed_blocks_filter', self::$allowed_blocks );
		return $allowed_blocks;

	}

	/**
	 * Loop through default values and set defauts if they do not exist
	 *
	 * @param $args | array | Array of template values
	 * @param $default | array | Array of default values
	 */
	public static function parse_block_template_args( &$args, $default = array() ) {

		foreach ( $default as $key => $value ) {

			if ( ! isset( $args[ $key ] ) ) {

				$args[ $key ] = $value;

			}
		}

	}

}

Blocks::init();
