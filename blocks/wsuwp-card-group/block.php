<?php namespace WSUWP\Plugin\Gutenberg;

class Block_WSUWP_Card_Group extends Block {

	protected static $block_name    = 'wsuwp/card-group';
	protected static $default_attrs = array(
		'className'   => 'wsu-card-wrapper',
		'columns'     => 3,
		'useFeed'     => false,
		'hideDate'    => false,
		'hideCaption' => false,
		'imageRatio'  => '16-9',
		'postType:'   => 'post',
		'taxonomy'    => 'category',
		'terms'       => '',
		'count'       => '3',
		'offset'      => '0',
		'host'        => '',
		'useAndLogic' => false,
		'cardClassName' => '',
		'allowCustomCards' => false,
	);


	public static function render( $attrs, $content = '' ) {

		static::add_class( $attrs['className'], 'wsu-card-wrapper--per-row-', 'columns', $attrs );

		if ( ! empty( $attrs['useFeed'] ) && empty( $attrs['allowCustomCards'] ) ) {

			$content = self::get_feed_content( $attrs );

		} else if ( ! empty( $attrs['useFeed'] ) && ! empty( $attrs['allowCustomCards'] ) ) {

			$content .= self::get_feed_content( $attrs );

		}

		ob_start();

		include __DIR__ . '/template.php';

		return ob_get_clean();

	}


	protected static function get_feed_content( $attrs ) {

		Plugin::load_class( 'query-posts' );

		$post_query = new Query_Posts( $attrs );

		$card_attrs = array(
			'className'  => 'wsu-card ' . $attrs['cardClassName'],
			'imageRatio' => $attrs['imageRatio'],
		);

		$cards = ( ! empty( $attrs['host'] ) ) ? $post_query->get_remote_posts() : $post_query->get_posts();

		ob_start();

		if ( ! empty( $cards ) ) {

			foreach ( $cards as $card ) {

				include Plugin::get( 'dir' ) . '/block-templates/card.php';

			}
		}

		return ob_get_clean();

	}

}
