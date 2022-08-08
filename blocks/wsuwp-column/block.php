<?php namespace WSUWP\Plugin\Gutenberg;

class Block_WSUWP_Column extends Block {

	protected static $block_name    = 'wsuwp/column';
	protected static $default_attrs = array(
		'className' => '',
		'id'        => '',
		'layout'    => 'single',
	);


	public static function render( $attrs, $content = '' ) {

		$column_classes = 'wsu-column';

		static::add_class( $column_classes, '', 'className', $attrs );

		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}

}
