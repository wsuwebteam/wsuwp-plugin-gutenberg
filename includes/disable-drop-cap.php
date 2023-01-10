<?php namespace WSUWP\Plugin\Gutenberg;

class Disable_Drop_cap {


	public static function disable_drop_cap_5_8( $editor_settings ) {

		$editor_settings['__experimentalFeatures']['typography']['dropCap'] = false;
		return $editor_settings;

	}

	public static function disable_drop_cap( $editor_settings ) {

		$editor_settings['__experimentalFeatures']['global']['typography']['dropCap'] = false;
		return $editor_settings;

	}

	public static function init() {

		if ( version_compare( get_bloginfo( 'version' ), '5.8', '>=' ) ) {
			add_action( 'block_editor_settings_all', array( __CLASS__, 'disable_drop_cap_5_8' ) );
		} else {
			add_action( 'block_editor_settings', array( __CLASS__, 'disable_drop_cap' ) );
		}

	}


}

Disable_Drop_cap::init();
