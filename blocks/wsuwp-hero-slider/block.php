<?php namespace WSUWP\Plugin\Gutenberg;

class Block_WSUWP_Hero_Slider extends Block {

	protected static $block_name    = 'wsuwp/hero-slider';
	protected static $default_attrs = array(
		'className' => 'wsu-hero-slider',
	);


	public static function render( $attrs, $content = '' ) {

		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}

}
