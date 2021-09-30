<?php namespace WSUWP\Plugin\Gutenberg;

class Block_WSUWP_Hero extends Block {

	protected static $block_name    = 'wsuwp/hero';
	protected static $default_attrs = array(
		'className'        => '',
		'imageSize'        => 'full',
		'imageId'          => '0',
		'title'            => '',
		'caption'          => '',
		'link'             => '',
		'imageFocalPoint'  => '',
		'imageFocalPointX' => '50%',
		'imageFocalPointY' => '50%',
 	);


	public static function render( $attrs, $content = '' ) {

		$wrapper_classes = 'wsu-row';

		$attrs['imageId'] = (int) $attrs['imageId'];

		if ( is_array( $attrs['imageFocalPoint'] ) ) {
			$attrs['imageFocalPointX'] = ( isset( $attrs['imageFocalPoint']['x'] ) ) ? ( $attrs['imageFocalPoint']['x'] * 100 ) . '%' : '50%';
			$attrs['imageFocalPointY'] = ( isset( $attrs['imageFocalPoint']['y'] ) ) ? ( $attrs['imageFocalPoint']['y'] * 100 ) . '%' : '50%';
		}

		static::add_class( $wrapper_classes, '', 'className', $attrs );
		static::add_class( $wrapper_classes, 'wsu-row--', 'layout', $attrs );

		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}

}
