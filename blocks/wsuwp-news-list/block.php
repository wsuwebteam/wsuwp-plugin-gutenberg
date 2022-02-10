<?php namespace WSUWP\Plugin\Gutenberg;

class Block_WSUWP_News_List extends Block {

	protected static $block_name    = 'wsuwp/news-list';
	protected static $default_attrs = array(
		'className'         => 'wsu-news-list',
		'postIn'            => '',
		'hideDate'          => false,
		'hideCaption'       => false,
		'postType:'         => 'post',
		'taxonomy'          => 'category',
		'terms'             => '',
		'count'             => '5',
		'offset'            => '0',
		'host'              => '',
		'useAndLogic'       => false,
	);


	public static function render( $attrs, $content = '' ) {

		Plugin::load_class( 'query-posts' );

        $post_query = new Query_Posts( $attrs );

        $news_items = ( ! empty( $attrs['host'] ) ) ? $post_query->get_remote_posts() : $post_query->get_posts();

		ob_start();

        if ( ! empty( $news_items ) ) {

			include __DIR__ . '/template.php';

		}

		return ob_get_clean();

	}









	protected static function render_feed_posts( $attrs ) {

		$temp_attrs = $attrs;

		$posts = self::get_posts( $attrs );

		ob_start();

		if ( ! empty( $posts ) ) {

			foreach ( $posts as $index => $post ) {

				Query::add_shown_post( $post['id'] );

				// Require first image should override hide image on the first post
				$attrs['hideImage'] = ( 0 === $index && $attrs['requireFirstImage'] ) ?  false : $temp_attrs['hideImage'];

				include __DIR__ . '/templates/card.php';

			}
		}

		return ob_get_clean();

	}


	protected static function get_posts( $attrs ) {

		$post_query = new Query_Posts( self::parse_query_arg_attrs( $attrs ) );

		if ( ! empty( $attrs['host'] ) ) {

			return $post_query->get_remote_posts();

		} else {

			return $post_query->get_posts();

		}

	}


	protected static function parse_query_arg_attrs( $attrs ) {

		switch ( $attrs['source'] ) {

			case 'feed':
				$attrs['postIn'] = '';
				break;

			case 'select':
				$attrs = array(
					'postType' => 'any',
					'postIn'   => $attrs['postIn'],
					'orderby'  => 'post__in',
					'count'    => count( explode( ',', $attrs['postIn'] ) ),
				);
				break;

		}

		return $attrs;

	}


}