<?php namespace WSUWP\Plugin\Gutenberg;

class Sitemap {

	public static function init() {

		require_once Plugin::get( 'dir' ) . '/classes/class-people-sitemap.php';

		add_action( 'init', array( __CLASS__, 'add_sitemap_provider' ) );

		add_action( 'sm_build_content', array( __CLASS__, 'add_google_sitemap' ), 20, 3 );

	}


	public static function add_sitemap_provider() {

		wp_register_sitemap_provider(
			'wsuprofiles',
			new People_Sitemap()
		);

	}

	public static function add_google_sitemap( $gsg, $type, $params) {

		if ( 'misc' === $type ) {

			$psm = new People_Sitemap();

			$urls = $psm->get_url_list( 1, $post_type = '' );

			foreach ( $urls as $person ) {

				if ( ! empty( $person['loc'] ) ) { 

					$gsg->AddUrl( $person['loc'], time(), 'weekly' );

				}
			}
		}

	}

}

Sitemap::init();
