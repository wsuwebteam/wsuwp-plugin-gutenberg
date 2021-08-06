<?php namespace WSUWP\Plugin\Gutenberg;

class Scripts {


	public static function setup_classes() {

		// Load any of the /classes/... used

	}


	public static function init() {

		self::setup_classes();

		add_action( 'enqueue_block_editor_assets', array( __CLASS__, 'enqueue_block_editor_assets' ) );

	}


	public static function enqueue_block_editor_assets() {

		// Block Editor
		wp_enqueue_script(
			'wsuwp-plugin-gutenberg-scripts',
			Plugin::get( 'url' ) . 'assets/dist/js/gutenberg-editor.js',
			array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),
			filemtime( Plugin::get( 'dir' ) . 'assets/dist/js/gutenberg-editor.js' )
		);

		/*wp_enqueue_style(
			'wsuwp-plugin-blocks-styles',
			Plugin::get_plugin_url() . 'assets/dist/index.css',
			array(),
			Plugin::get_plugin_version( self::get('is_local') )
		);*/

	}

}

Scripts::init();
