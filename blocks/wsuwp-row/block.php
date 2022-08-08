<?php namespace WSUWP\Plugin\Gutenberg;

class Block_WSUWP_Row extends Block {

	protected static $block_name    = 'wsuwp/row';
	protected static $default_attrs = array(
		'layout'    => 'single',
		'className' => '',
		'id'        => '',
	);


	public static function render( $attrs, $content = '' ) {

		$wrapper_classes = 'wsu-row';

		static::add_class( $wrapper_classes, '', 'className', $attrs );
		static::add_class( $wrapper_classes, 'wsu-row--', 'layout', $attrs );

		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}

}
