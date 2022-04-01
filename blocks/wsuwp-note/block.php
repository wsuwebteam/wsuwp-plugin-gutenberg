<?php namespace WSUWP\Plugin\Gutenberg;

class Block_WSUWP_Note extends Block {

	protected static $block_name    = 'wsuwp/note';
	protected static $default_attrs = array(
		'className'   => 'wsu-note',
		'icon'        => '',
		'showTitle'   => true,
		'title'       => '',
		'titleTag'    => 'div',
		'useAsideTag' => true,
	);


	public static function render( $attrs, $content = '' ) {

		$note_tag = ( $attrs['useAsideTag'] ) ? 'aside' : 'div';

		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}

}
