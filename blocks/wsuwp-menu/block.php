<?php namespace WSUWP\Plugin\Gutenberg;

/**
 * Render the block.
 *
 * @param array  $attrs Block attributes.
 * @param string $content Block content.
 * @return string Rendered block content.
 */
class Block_WSUWP_Menu extends Block {

	protected static $block_name    = 'wsuwp/menu';
	protected static $default_attrs = array(
		'className'     => 'wsu-navigation',
		'slug'          => '',
		'menuClassname' => '',
		'tag'           => 'nav',
		'custom'        => false,
	);

	/**
	 * Render the template.
	 *
	 * @param  array  $attrs
	 * @param  string $content
	 * @return string
	 */
	protected static function render( $attrs, $content ) {

		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}

}
