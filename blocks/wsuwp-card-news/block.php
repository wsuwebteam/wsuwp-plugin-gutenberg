<?php namespace WSUWP\Plugin\Gutenberg;

class Block_WSUWP_Card_News extends Block {

	protected static $block_name    = 'wsuwp/card-news';
	protected static $default_attrs = array(
		'className' => '',
	);


	public static function render( $attrs, $content = '' ) {

		$wrapper_classes = 'wsu-card wsu-card-news';

		static::add_class( $wrapper_classes, '', 'className', $attrs );

		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}

}
