<?php
/**
 * Plugin Name: WSUWP Gutenberg
 * Plugin URI: https://github.com/wsuwebteam/wsuwp-plugin-gutenberg
 * Description: Describe the plugin
 * Version: 1.3.10
 * Requires PHP: 7.3
 * Author: Washington State University, Danial Bleile
 * Author URI: https://web.wsu.edu/
 * Text Domain: wsuwp-plugin-gutenberg
 */


// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

define( 'WSUWPPLUGINGUTENBERGVERSION', '1.3.10' );

add_action( 'after_setup_theme', 'wsuwp_plugin_gutenberg_init' );

function wsuwp_plugin_gutenberg_init() {

	if ( defined( 'ISWDS' ) ) {

		// Initiate plugin
		require_once __DIR__ . '/includes/plugin.php';

	}

}
