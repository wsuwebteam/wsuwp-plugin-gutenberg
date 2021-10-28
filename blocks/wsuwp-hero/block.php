<?php namespace WSUWP\Plugin\Gutenberg;

class Block_WSUWP_Hero extends Block {

	protected static $block_name    = 'wsuwp/hero';
	protected static $default_attrs = array(
		'className'        => 'wsu-hero wsu-width--full wsu-pattern--wsu-light-radial-left',
		'imageSize'        => 'full',
		'imageId'          => '0',
		'imageSrc'         => '',
		'imageAlt'         => '',
		'imageSrcSet'      => '',
		'imageSizes'       => '',
		'title'            => '',
		'caption'          => '',
		'link'             => '',
		'imageFocalPoint'  => '',
		'imageFocalPointX' => '50%',
		'imageFocalPointY' => '50%',
		'eyebrowHeading'   => '',
		'buttonText'       => 'Read More',
		'photoCredit'      => '',
		'lightOverlay'     => false,
		'pattern'          => 'wsu',
 	);


	public static function render( $attrs, $content = '' ) {

		$attrs['imageId'] = (int) $attrs['imageId'];

		if ( is_array( $attrs['imageFocalPoint'] ) ) {
			$attrs['imageFocalPointX'] = ( isset( $attrs['imageFocalPoint']['x'] ) ) ? ( $attrs['imageFocalPoint']['x'] * 100 ) . '%' : '50%';
			$attrs['imageFocalPointY'] = ( isset( $attrs['imageFocalPoint']['y'] ) ) ? ( $attrs['imageFocalPoint']['y'] * 100 ) . '%' : '50%';
		}

		if ( $attrs['imageId'] ) {

			$image_src_array = wp_get_attachment_image_src( $attrs['imageId'], $attrs['imageSize'] );

			$attrs['imageSrc']    = $image_src_array[0];
			$attrs['imageSizes']  = wp_get_attachment_image_sizes( $attrs['imageId'], $attrs['imageSize'] );
			$attrs['imageSrcSet'] = wp_get_attachment_image_srcset( $attrs['imageId'], $attrs['imageSize'] );
			$attrs['imageAlt']    = wp_get_attachment_caption( $attrs['imageId'] );
		}

		static::add_class( $wrapper_classes, '', 'className', $attrs );
		static::add_class( $wrapper_classes, 'wsu-row--', 'layout', $attrs );

		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}

}
