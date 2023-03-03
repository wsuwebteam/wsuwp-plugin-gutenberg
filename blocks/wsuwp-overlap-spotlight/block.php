<?php namespace WSUWP\Plugin\Gutenberg;

class Block_WSUWP_Overlap_Spotlight extends Block {

	protected static $block_name    = 'wsuwp/overlap-spotlight';
	protected static $default_attrs = array(
		'className' 		=> 'wsu-overlap wsu-overlap-spotlight',
		'captionClasses'    => '',
		'overlap'           => '',
		'imageClasses'      => '',
		'imageSize'         => 'large',
		'imageId'           => '0',
		'imageSrc'          => '',
		'imageAlt'          => '',
		'imageSrcSet'       => '',
		'imageSizes'        => '',
		'imageFocalPoint'  => '',
		'imageFocalPointX' => '50%',
		'imageFocalPointY' => '50%',
		'customImageAlt'   => false,
	);


	public static function render( $attrs, $content = '' ) {

		static::set_image_id_attrs( $attrs );

		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}

}
