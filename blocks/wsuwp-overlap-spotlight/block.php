<?php namespace WSUWP\Plugin\Gutenberg;

class Block_WSUWP_Overlap_Spotlight extends Block {

	protected static $block_name    = 'wsuwp/overlap-spotlight';
	protected static $default_attrs = array(
		'className' 		=> 'wsu-overlap wsu-overlap-spotlight',
		'captionClasses'    => '',
		'imageClasses'      => '',
		'imageSize'         => 'large',
		'imageId'           => '0',
		'imageSrc'          => '',
		'imageAlt'          => '',
		'imageSrcSet'       => '',
		'imageSizes'        => '',
	);


	public static function render( $attrs, $content = '' ) {

		if ( $attrs['imageId'] ) {

			$image_src_array = wp_get_attachment_image_src( $attrs['imageId'], $attrs['imageSize'] );

			$attrs['imageSrc']    = $image_src_array[0];
			$attrs['imageSizes']  = wp_get_attachment_image_sizes( $attrs['imageId'], $attrs['imageSize'] );
			$attrs['imageSrcSet'] = wp_get_attachment_image_srcset( $attrs['imageId'], $attrs['imageSize'] );
			$attrs['imageAlt']    = wp_get_attachment_caption( $attrs['imageId'] );
		}


		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}

}
