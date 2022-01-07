<?php namespace WSUWP\Plugin\Gutenberg;

class Block_WSUWP_Section extends Block {

	protected static $block_name    = 'wsuwp/section';
	protected static $default_attrs = array(
		'className'   => 'wsu-section',
	);


	public static function render( $attrs, $content = '' ) {

		ob_start();

		include __DIR__ . '/template.php';

		return ob_get_clean();

	}

}