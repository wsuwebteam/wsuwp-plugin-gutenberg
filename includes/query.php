<?php namespace WSUWP\Plugin\Gutenberg;

class Query {

    protected static $show_posts = array();


	public static function get_show_posts() {

        return self::$show_posts;

    }


    public static function add_shown_post( $post_id ) {

        self::$show_posts[] = $post_id;

    }

}