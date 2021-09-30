<?php namespace WSUWP\Plugin\Gutenberg;

class Block_WSUWP_Page_Title extends Block {

	protected static $block_name    = 'wsuwp/pagetitle';
	protected static $default_attrs = array(
		'className' => '',
	);


	public static function render( $attrs, $content = '' ) {

		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}

}