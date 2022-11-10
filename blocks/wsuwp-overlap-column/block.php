<?php namespace WSUWP\Plugin\Gutenberg;

class Block_WSUWP_Overlap_Column extends Block {

	protected static $block_name    = 'wsuwp/overlap-column';
	protected static $default_attrs = array(
		'className'   => 'wsu-overlap-column',
		'before'      => '',
		'outline'   => '',
		'after'     => '',
		'tag'     => 'h2',
	);

	

	public static function render( $attrs, $content = '' ) {

		ob_start();

		include __DIR__ . '/template.php';

		return ob_get_clean();

	}

}