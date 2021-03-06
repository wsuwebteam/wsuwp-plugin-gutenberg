<?php namespace WSUWP\Plugin\Gutenberg;

class Blocks {


	protected static $register_blocks = array(
		'wsuwp/row'       => 'Block_WSUWP_Row',
		'wsuwp/column'    => 'Block_WSUWP_Column',
		'wsuwp/news'      => 'Block_WSUWP_News',
		'wsuwp/callout'   => 'Block_WSUWP_Callout',
	);

	protected static $allowed_blocks = array(
		'wsuwp/row',
		'wsuwp/news',
		'wsuwp/callout',
		'core/button',
		'core/code',
		'core/embed',
		'core/freeform',
		'core/heading',
		'core/html',
		'core/image',
		'core/list',
		'core/paragraph',
		'core/quote',
		'core/button',
		'core/buttons',
		'core/reusableBlock',
		'core/separator',
		'core/shortcode',
		'core/spacer',
		'core/table',
		'core/video',
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

		return self::$allowed_blocks;

	}

}

Blocks::init();
