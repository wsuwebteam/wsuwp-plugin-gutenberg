<?php namespace WSUWP\Plugin\Gutenberg;

class Sitemap {

	public static function init() {

		require_once Plugin::get( 'dir' ) . '/classes/class-people-sitemap.php';

		add_action( 'init', array( __CLASS__, 'add_sitemap_provider' ) );

	}


	public static function add_sitemap_provider() {

		wp_register_sitemap_provider(
			'wsuprofiles',
			new People_Sitemap()
		);

	}

}

Sitemap::init();
