<?php namespace WSUWP\Plugin\Gutenberg;

class People_Profiles {


	protected static $profiles = array();


	public static function init() {

		add_action( 'init', array( __CLASS__, 'add_rewrite' ) );

		add_filter( 'query_vars', function( $query_vars ) {
			$query_vars[] = 'wsuprofile';
			return $query_vars;
		} );

		add_filter( 'the_content', array( __CLASS__, 'filter_content' ), 1 );

	}


	public static function add_rewrite() {

		add_rewrite_rule( '(.?.+?)/wsu-profile/([a-z0-9_.-]+)/?$', 'index.php?pagename=$matches[1]&wsuprofile=$matches[2]','top' );

	}

	public static function filter_content( $content ) {

		$profile_nid = get_query_var( 'wsuprofile', false );

		if ( ! is_admin() && is_main_query() && ! empty( $profile_nid ) ) {

			$profile = self::get_remote_profile( $profile_nid );

			$content = self::get_profile_template( $profile );

		}

		return $content;

	}



	protected static function get_profile_template( $profile ) {

		$profile_template = '';

		$name       = ( ! empty( $profile['name'] ) ) ? $profile['name'] : '';
		$first_name = ( ! empty( $profile['first_name'] ) ) ? $profile['first_name'] : '';
		$last_name  = ( ! empty( $profile['last_name'] ) ) ? $profile['last_name'] : '';
		$title      = ( ! empty( $profile['title'] ) ) ? $profile['title']: '';
		$email      = ( ! empty( $profile['email'] ) ) ? $profile['email'] : '';
		$phone      = ( ! empty( $profile['phone'] ) ) ? $profile['phone'] : '';
		$office     = ( ! empty( $profile['office'] ) ) ? $profile['office'] : '';
		$address    = ( ! empty( $profile['address'] ) ) ? $profile['address'] : '';
		$degree     = ( ! empty( $profile['degree'] ) ) ? $profile['degree'] : '';
		$website    = ( ! empty( $profile['website'] ) ) ? $profile['website'] : '';
		$bio        = ( ! empty( $profile['bio'] ) ) ? $profile['bio'] : '';
		$photo      = ( ! empty( $profile['photo']) ) ? $profile['photo'] : '';



		ob_start();

		include Plugin::get('dir') . '/templates/profile.php';

		$profile_template = ob_get_clean();

		return $profile_template;

	}


	/*public static function filter_title( $title ) {

		$profile_nid = get_query_var( 'wsuprofile', false );

		if ( ! is_admin() && is_main_query() && ! empty( $profile_nid ) ) {

			var_dump( is_singular('page') );

			if ( 'page' === get_post_type() ) {

				

				$profile = self::get_remote_profile( $profile_nid );

				$title = 'Something else';

			}

		}

		return $title;

	}*/


	protected static function get_remote_profile( $nid ) {

		if ( array_key_exists( $nid, self::$profiles ) ) {

			return self::$profiles[ $nid ];

		}

		$request_url = 'https://people.wsu.edu/wp-json/peopleapi/v1/people?nid=' . $nid;

		$response = wp_remote_request( $request_url );

		if ( $response ) {

			$body = json_decode( wp_remote_retrieve_body( $response ), true );

			if ( $body && ! empty( $body[0] ) ) {

				self::$profiles[ $nid ] = $body[0];

				return $body[0];

			}
		}


	}


}

People_Profiles::init();
