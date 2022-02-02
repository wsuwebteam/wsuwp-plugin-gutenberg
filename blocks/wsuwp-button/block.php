<?php namespace WSUWP\Plugin\Gutenberg;

class Block_WSUWP_Button extends Block {

	protected static $block_name    = 'wsuwp/button';
	protected static $default_attrs = array(
		'className'     => '',
		'buttonText'    => '',
		'buttonUrl'     => '',
		'opensInNewTab' => false,
		'iconBefore'    => '',
		'iconAfter'     => '',
		'size'          => '',
	);

	protected static function render( $attrs, $content ) {

		// merge attributes
		$attrs = array_merge( self::$default_attrs, $attrs );

		// resolve classname
		$attrs['className'] = 'wsu-button ' . $attrs['className'];
		$attrs['className'] = ( ! empty( $attrs['size'] ) ) ? $attrs['className'] . ' wsu-button--size-' . $attrs['size'] : $attrs['className'];

		// render block
		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}

}
