<?php namespace WSUWP\Plugin\Gutenberg;

class Block_WSUWP_Slate_Form extends Block {

	protected static $block_name    = 'wsuwp/slate-form';
	protected static $default_attrs = array(
		'className'   => 'wsu-slate-form',
		'formId'      => '',
	);


	public static function render( $attrs, $content = '' ) {

		if ( ! empty( $attrs['formId'] ) ) {

			$attrs['formId'] = str_replace( 'form_', '', $attrs['formId'] );

			ob_start();

			include __DIR__ . '/template.php';

			return ob_get_clean();

		}

	}

}
