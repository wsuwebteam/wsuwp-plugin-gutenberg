<?php namespace WSUWP\Plugin\Gutenberg;

class Block_WSUWP_Card extends Block {

	protected static $block_name    = 'wsuwp/card';
	protected static $default_attrs = array(
		'className'  => 'wsu-card',
		'imageRatio' => '16-9',
		'title'      => '',
		'headingTag' => 'h3',
		'caption'    => '',
		'link'       => '',
		'imageSize'        => 'full',
		'imageId'          => '',
		'imageSrc'         => '',
		'imageAlt'         => '',
		'imageSrcSet'      => '',
		'imageSizes'       => '',
		'imageFocalPoint'  => '',
		'imageFocalPointX' => '50%',
		'imageFocalPointY' => '50%',
	);


	public static function render( $attrs, $content = '' ) {

		static::set_image_id_attrs( $attrs );

		//var_dump( $attrs );

		ob_start();

		include __DIR__ . '/templates/card.php';

		return ob_get_clean();

	}

}