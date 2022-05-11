<?php namespace WSUWP\Plugin\Gutenberg;

class Scripts {


	public static function setup_classes() {

		// Load any of the /classes/... used
	}


	public static function init() {

		self::setup_classes();

		// TODO: Abstact out the enqueueing of scripts and styles. In the block would probably make the most sense.
		add_action( 'enqueue_block_editor_assets', array( __CLASS__, 'enqueue_block_editor_assets' ) );
		add_action( 'enqueue_block_assets', array( __CLASS__, 'enqueue_frontend_assets' ) );
		add_action( 'init', array( __CLASS__, 'register_assets' ) );

	}


	public static function register_assets() {

		wp_register_script( 'wsu_design_system_script_people_list', 'https://cdn.web.wsu.edu/designsystem/2.x/dist/bundles/standalone/people-list/scripts.js', array(), WSUWPPLUGINGUTENBERGVERSION, true );
		wp_register_script( 'wsu_design_system_script_hero_slider', 'https://cdn.web.wsu.edu/designsystem/2.beta/dist/bundles/standalone/hero-slider/scripts.js', array(), WSUWPPLUGINGUTENBERGVERSION, true );
		wp_register_style( 'wsu_design_system_script_hero_slider', 'https://cdn.web.wsu.edu/designsystem/2.beta/dist/bundles/standalone/hero-slider/styles-wds.css', array(), WSUWPPLUGINGUTENBERGVERSION );

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


	public static function enqueue_frontend_assets() {

		if ( is_singular() ) {
			$id = get_the_ID();

			if ( has_block( 'wsuwp/hero-slider', $id ) ) {
				wp_enqueue_style( 'wsu_design_system_script_hero_slider' );
				wp_enqueue_script( 'wsu_design_system_script_hero_slider' );
			}
		}

	}

}

Scripts::init();
