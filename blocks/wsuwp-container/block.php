<?php namespace WSUWP\Plugin\Gutenberg;

class Block_WSUWP_Container extends Block {

	protected static $block_name    = 'wsuwp/container';
	protected static $default_attrs = array(
		'className' => 'wsu-container',
		'id'        => '',
        'tag'       => 'div',
	);


	public static function render( $attrs, $content = '' ) {

		ob_start();

		include __DIR__ . '/template.php';

		return ob_get_clean();

	}

}