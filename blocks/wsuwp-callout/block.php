<?php namespace WSUWP\Plugin\Gutenberg;

class Block_WSUWP_Callout extends Block {

	protected static $block_name    = 'wsuwp/callout';
	protected static $default_attrs = array(
		'className'   => 'wsu-callout',
		'layout'      => 'title',
		'headingTag'  => 'h3',
		'useAsideTag' => true,
	);


	public static function render( $attrs, $content = '' ) {

		$callout_tag = ( $attrs['useAsideTag'] ) ? 'aside' : 'div';

		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}

}
