<?php namespace WSUWP\Plugin\Gutenberg;

class Block_WSUWP_Overlap_Advanced extends Block {

	protected static $block_name    = 'wsuwp/overlap-advanced';
	protected static $default_attrs = array(
		'className'   => 'wsu-overlap',
	);

	

	public static function render( $attrs, $content = '' ) {

		ob_start();

		include __DIR__ . '/template.php';

		return ob_get_clean();

	}

}