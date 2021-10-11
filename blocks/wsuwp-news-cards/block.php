<?php namespace WSUWP\Plugin\Gutenberg;

class Block_WSUWP_News_Cards extends Block {

	protected static $block_name    = 'wsuwp/news-cards';
	protected static $default_attrs = array(
		'className'         => 'wsu-card-wrapper wsu-card-wrapper--news',
		'source'            => 'feed',
		'buttonText'        => 'More News',
		'buttonLink'        => '',
		'perRow'            => '1',
		'postIn'            => '',
		'imageSrc'          => '',
		'imageSrcset'       => '',
		'imageSizes'        => '',
		'imageAlt'          => '',
		'caption'           => '',
		'publishDate'       => '',
		'authorName'        => '',
		'authorAffiliation' => '',
		'link'              => '',
		'hideDate'          => false,
		'hideCaption'       => true,
		'hideImage'         => false,
		'hideLink'          => false,
		'requireFirstImage' => false,
		'requireImage'      => false,
		'imageSize'         => 'medium',
		'postType:'         => 'post',
		'taxonomy'          => 'category',
		'terms'             => '',
		'count'             => '1',
		'offset'            => '0',
		'host'              => '',
		'excludePosts'      => '',
		'hideShownPosts'    => false,
	);


	public static function render( $attrs, $content = '' ) {

		Plugin::load_class( 'query-posts' );

		static::add_class( $attrs['className'], 'wsu-card-wrapper--per-row-', 'perRow', $attrs );

		$content = self::render_feed_posts( $attrs );

		ob_start();

		if ( ! empty( $content ) ) {

			include __DIR__ . '/templates/default.php';

		}

		return ob_get_clean();

	}

	protected static function render_feed_posts( $attrs ) {

		$posts = self::get_posts( $attrs );

		ob_start();

		if ( ! empty( $posts ) ) {

			foreach ( $posts as $post ) {

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