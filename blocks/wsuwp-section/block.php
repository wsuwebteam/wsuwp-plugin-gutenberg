<?php namespace WSUWP\Plugin\Gutenberg;

class Block_WSUWP_Section extends Block {

	protected static $block_name    = 'wsuwp/section';
	protected static $default_attrs = array(
		'className'   => 'wsu-section',
		'id'          => '',
	);


	public static function render( $attrs, $content = '' ) {

		//var_dump( $attrs );

		ob_start();

		include __DIR__ . '/template.php';

		return ob_get_clean();

	}

}