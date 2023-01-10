<?php namespace WSUWP\Plugin\Gutenberg;

class BlockCategories {

	public static $BLOCK_CATEGORY_MAP = array(
		'core/code'      => 'advanced',
		'core/html'      => 'advanced',
		'core/buttons'   => 'text',
		'core/shortcode' => 'text',
	);

	public static function register_block_categories( $block_categories, $block_editor_context ) {

		// change text category title to 'Content'.
		foreach ( $block_categories as &$c ) {
			if ( 'text' === $c['slug'] ) {
				$c['title'] = 'Content';
				break;
			}
		}
		unset( $c );

		// return new list of categories.
		return array_merge(
			$block_categories,
			array(
				array(
					'slug'  => 'feeds',
					'title' => 'Feeds',
				),
				array(
					'slug'  => 'advanced',
					'title' => 'Advanced',
				),
			)
		);

	}

	public static function init() {

		if ( version_compare( get_bloginfo( 'version' ), '5.8', '>=' ) ) {
			add_filter( 'block_categories_all', array( __CLASS__, 'register_block_categories' ), 10, 2 );
		} else {
			add_filter( 'block_categories', array( __CLASS__, 'register_block_categories' ), 10, 2 );
		}

	}

}

BlockCategories::init();
