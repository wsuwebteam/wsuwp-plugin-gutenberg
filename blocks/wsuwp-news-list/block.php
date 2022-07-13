<?php namespace WSUWP\Plugin\Gutenberg;

class Block_WSUWP_News_List extends Block {

	protected static $block_name    = 'wsuwp/news-list';
	protected static $default_attrs = array(
		'className'   => 'wsu-news-list',
		'postIn'      => '',
		'hideDate'    => false,
		'hideCaption' => false,
		'postType:'   => 'post',
		'taxonomy'    => 'category',
		'terms'       => '',
		'queryTerms'  => array(),
		'count'       => '3',
		'offset'      => '0',
		'host'        => '',
		'useAndLogic' => false,
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

}
