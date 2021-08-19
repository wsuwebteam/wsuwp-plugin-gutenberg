<?php namespace WSUWP\Plugin\Gutenberg;

class Disable_Drop_cap {

	public static function disable_drop_cap( $editor_settings ) {
		$editor_settings['__experimentalFeatures']['global']['typography']['dropCap'] = false;
		return $editor_settings;

	}

	public static function init() {
		add_action( 'block_editor_settings', array( __CLASS__, 'disable_drop_cap' ) );
	}
}

Disable_Drop_cap::init();
