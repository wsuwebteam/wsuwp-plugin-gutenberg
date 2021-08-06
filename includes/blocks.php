<?php namespace WSUWP\Plugin\Gutenberg;

class Blocks {


	protected static $register_blocks = array(
		'wsuwp/row'    => 'Block_WSUWP_Row',
		'wsuwp/column' => 'Block_WSUWP_Column',
	);

	protected static $allowed_blocks = array(
		'wsuwp/row',
		'wsuwp/column',
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
		'core/reusableBlock',
		'core/separator',
		'core/shortcode',
		'core/spacer',
		'core/table',
		'core/video',
	);


	public static function setup_classes() {

		Plugin::load_class( 'block' );

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

			require_once $block_dir . $block_folder . '/block.php';

			register_block_type(
				$block,
				array(
					'api_version'     => 2,
					'render_callback' => array( __NAMESPACE__ . '\\' . $class, 'render_block' ),
					'editor_script'   => 'wsuwp-theme-wds-2-blocks',
				)
			);
		}
	}


	public static function remove_blocks( $allowed_blocks ) {

		return self::$allowed_blocks;

	}

}

Blocks::init();
