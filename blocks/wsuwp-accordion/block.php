<?php namespace WSUWP\Plugin\Gutenberg;

class Block_WSUWP_Accordion extends Block {

	protected static $block_name    = 'wsuwp/accordion';
	protected static $default_attrs = array(
		'className'  => 'wsu-accordion',
		'title'      => '',
		'headingTag' => 'h3',
 	);


	public static function render( $attrs, $content = '' ) {

		ob_start();

		if ( ! empty( $attrs['title'] ) ) {

			include __DIR__ . '/template.php';

		}

		return ob_get_clean();

	}

}
