<?php namespace WSUWP\Plugin\Gutenberg;

class Block_WSUWP_Card extends Block {

	protected static $block_name    = 'wsuwp/card';
	protected static $default_attrs = array(
		'className'        => 'wsu-card',
		'imageRatio'       => '16-9',
		'title'            => '',
		'headingTag'       => 'h3',
		'headingClass'     => '',
		'caption'          => '',
		'link'             => '',
		'linkCard'         => '',
		'imageSize'        => 'full',
		'imageId'          => '',
		'imageSrc'         => '',
		'imageAlt'         => '',
		'imageSrcSet'      => '',
		'imageSizes'       => '',
		'imageFocalPoint'  => '',
		'imageFocalPointX' => '50%',
		'imageFocalPointY' => '50%',
		'showImage'        => true,
		'showHeading'      => true,
		'showCaption'      => true,
		'showContent'      => false,
		'version'          => '1',
		'customImageAlt'   => false,
	);


	public static function render( $attrs, $content = '' ) {

		static::set_image_id_attrs( $attrs );

		$card_attrs = array(
			'className'   => $attrs['className'],
			'imageRatio'  => $attrs['imageRatio'],
			'showImage'   => $attrs['showImage'],
			'showCaption' => $attrs['showCaption'],
			'showHeading' => $attrs['showHeading'],
			'showContent' => ( '2' === $attrs['version'] ) ? true : $attrs['showContent'],
			'headingTag'  => $attrs['headingTag'],
			'headingClass' => $attrs['headingClass'],
			'linkCard'    => $attrs['linkCard'],
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

		if ( '2' === $attrs['version'] ) {

			include __DIR__ . '/templates/card-v2.php';

		} else {

			include Plugin::get( 'dir' ) . '/block-templates/card.php';

		}

		return ob_get_clean();

	}

}
