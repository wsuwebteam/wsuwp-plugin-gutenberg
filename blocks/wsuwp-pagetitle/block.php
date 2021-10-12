<?php namespace WSUWP\Plugin\Gutenberg;

class Block_WSUWP_Page_Title extends Block {

	protected static $block_name    = 'wsuwp/pagetitle';
	protected static $default_attrs = array(
		'className'  => '',
		'title'      => '',
		'shareTitle' => '',
		'shareLink'  => '',
	);


	public static function render( $attrs, $content = '' ) {

		$attrs['shareTitle'] = ( ! empty( $attrs['shareTitle'] ) ) ? $attrs['shareTitle'] : get_the_title();
		$attrs['shareLink']  = ( ! empty( $attrs['shareLink'] ) ) ? $attrs['shareLink'] : get_permalink();

		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}

}