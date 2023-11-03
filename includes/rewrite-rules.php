<?php namespace WSUWP\Plugin\Gutenberg;

class Rewrite_Rules {

    public static function init() {

        self::add_profile_rewrite();

    }

    public static function add_profile_rewrite() {

		add_rewrite_rule(
			'(.?.+?)/wsu-profile/([a-z0-9_.-]+)/?$',
			'index.php?pagename=$matches[1]&wsuprofile=$matches[2]',
			'top'
		);
	
		// Flush the rewrite rules
		//flush_rewrite_rules();

	}

}

Rewrite_Rules::init();
