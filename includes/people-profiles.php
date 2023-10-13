<?php namespace WSUWP\Plugin\Gutenberg;

class People_Profiles {


    protected static $profiles = array();


	public static function init() {

		add_action( 'init', array( __CLASS__, 'add_rewrite' ) );

        add_filter( 'query_vars', function( $query_vars ) {
            $query_vars[] = 'profile';
            return $query_vars;
        } );

	}


    public static function add_rewrite() {

        add_rewrite_rule( '(.?.+?)/wsu-profile/([a-z0-9_.-]+)/?$', 'index.php?pagename=$matches[1]&profile=$matches[2]','top' );

    }


}

People_Profiles::init();
