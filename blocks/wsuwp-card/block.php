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
		'showImage'    => true,
		'showHeading'  => true,
		'showCaption'  => true,
		'showContent' => false,
	);


	public static function render( $attrs, $content = '' ) {

		static::set_image_id_attrs( $attrs );

		$card_attrs = array(
			'className'   => $attrs['className'],
			'imageRatio'  => $attrs['imageRatio'],
			'showImage'   => $attrs['showImage'],
			'showCaption' => $attrs['showCaption'],
			'showHeading' => $attrs['showHeading'],
			'showContent' => $attrs['showContent'],
			'headingTag'  => $attrs['headingTag'],
		);

		$card = array(
			'imageSrc'         => $attrs['imageSrc'],
			'imageSrcSet'      => $attrs['imageSrcSet'],
			'imageSizes'       => $attrs['imageSizes'],
			'imageAlt'         => $attrs['imageAlt'],
			'imageFocalPointX' => $attrs['imageFocalPointX'],
			'imageFocalPointY' => $attrs['imageFocalPointY'],
			'title'            => $attrs['title'],
			'caption'          => $attrs['caption'],
			'content'          => $content,
			'link'             => $attrs['link'],
		);

		ob_start();

		include Plugin::get( 'dir' ) . '/block-templates/card.php';

		return ob_get_clean();

	}

}
