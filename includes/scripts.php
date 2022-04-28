<?php namespace WSUWP\Plugin\Gutenberg;

class Scripts {


	public static function setup_classes() {

		// Load any of the /classes/... used
	}


	public static function init() {

		self::setup_classes();

		add_action( 'enqueue_block_editor_assets', array( __CLASS__, 'enqueue_block_editor_assets' ) );
		add_action( 'wp_enqueue_scripts', array( __CLASS__, 'enqueue_scripts' ) );
	}


	public static function enqueue_scripts() {
		wp_register_script( 'wsu_design_system_script_people_list', 'https://cdn.web.wsu.edu/designsystem/2.x/dist/bundles/standalone/people-list/scripts.js', array(), WSUWPPLUGINGUTENBERGVERSION, true );
	}


	public static function enqueue_block_editor_assets() {

		// Block Editor
		wp_enqueue_script(
			'wsuwp-plugin-gutenberg-editor-scripts',
			Plugin::get( 'url' ) . 'assets/dist/js/gutenberg-editor.js',
			array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),
			filemtime( Plugin::get( 'dir' ) . 'assets/dist/js/gutenberg-editor.js' )
		);

		wp_enqueue_style(
			'wsuwp-plugin-gutenberg-editor-styles',
			Plugin::get( 'url' ) . 'assets/dist/css/gutenberg-editor.css',
			array(),
			filemtime( Plugin::get( 'dir' ) . 'assets/dist/css/gutenberg-editor.css' )
		);

	}

}

Scripts::init();
