<?php namespace WSUWP\Plugin\Gutenberg;

class Block_WSUWP_Sticky_Nav extends Block {

	protected static $block_name    = 'wsuwp/sticky-nav';
	protected static $default_attrs = array(
		'className'   => 'wsu-sticky-nav',
	);


	public static function render( $attrs, $content = '' ) {

		ob_start();

		include __DIR__ . '/template.php';

		return ob_get_clean();

	}

}