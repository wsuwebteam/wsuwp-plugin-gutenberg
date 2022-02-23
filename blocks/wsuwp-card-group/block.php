<?php namespace WSUWP\Plugin\Gutenberg;

class Block_WSUWP_Card_Group extends Block {

	protected static $block_name    = 'wsuwp/card-group';
	protected static $default_attrs = array(
		'className'   => 'wsu-card-wrapper',
		'columns'     => 3,
	);


	public static function render( $attrs, $content = '' ) {

		static::add_class( $attrs['className'], 'wsu-card-wrapper--per-row-', 'columns', $attrs );

		ob_start();

		include __DIR__ . '/template.php';

		return ob_get_clean();

	}

}