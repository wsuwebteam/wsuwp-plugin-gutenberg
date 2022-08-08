<?php namespace WSUWP\Plugin\Gutenberg;

class Block_WSUWP_Button extends Block {

	protected static $block_name    = 'wsuwp/button';
	protected static $default_attrs = array(
		'buttonClassName'  => '',
		'className'        => '',
		'buttonText'       => '',
		'buttonUrl'        => '',
		'iconBefore'       => '',
		'iconAfter'        => '',
		'id'               => '',
	);

	protected static function render( $attrs, $content ) {

		// render block
		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}

}
