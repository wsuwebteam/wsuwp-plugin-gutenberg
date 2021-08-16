<?php namespace WSUWP\Plugin\Gutenberg;

class Block_WSUWP_Callout extends Block {

	protected static $block_name    = 'wsuwp/callout';
	protected static $default_attrs = array(
		'layout' => 'single',
	);


	public static function render( $attrs, $content = '' ) {

		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}

}
