<?php namespace WSUWP\Plugin\Gutenberg;

class Block_WSUWP_Hero extends Block {

	protected static $block_name    = 'wsuwp/hero';
	protected static $default_attrs = array(
		'className'         => 'wsu-hero wsu-width--full wsu-pattern--wsu-light-radial-left',
		'requiredClassName' => '',
		'imageSize'         => 'full',
		'imageId'           => '0',
		'imageSrc'          => '',
		'imageAlt'          => '',
		'imageSrcSet'       => '',
		'imageSizes'        => '',
		'title'             => '',
		'headingTag'        => 'div',
		'caption'           => '',
		'link'              => '',
		'imageFocalPoint'   => '',
		'imageFocalPointX'  => '50%',
		'imageFocalPointY'  => '50%',
		'eyebrowHeading'    => '',
		'buttonText'        => '',
		'photoCredit'       => '',
		'lightOverlay'      => false,
		'pattern'           => 'wsu-light-radial-left',
		'overlay'           => 'dark-left',
		'backgroundVideo'   => false,
		'backgroundType'    => '',
		'sliderImages'      => array(),
		'sliderEffect'      => 'fade',
		'sliderDelay'       => 5000,
	);


	public static function render( $attrs, $content = '' ) {

		add_filter( 'wp_calculate_image_srcset', array( __CLASS__, 'set_srcset_image_sizes' ), 10, 3 );

		$attrs['titleId'] = uniqid( 'title-id-' );

		$attrs['imageId'] = (int) $attrs['imageId'];

		$attrs['className'] = $attrs['className'] . ' ' . $attrs['requiredClassName'];

		if ( is_array( $attrs['imageFocalPoint'] ) ) {
			$attrs['imageFocalPointX'] = ( isset( $attrs['imageFocalPoint']['x'] ) ) ? ( $attrs['imageFocalPoint']['x'] * 100 ) . '%' : '50%';
			$attrs['imageFocalPointY'] = ( isset( $attrs['imageFocalPoint']['y'] ) ) ? ( $attrs['imageFocalPoint']['y'] * 100 ) . '%' : '50%';
		}

		if ( $attrs['imageId'] ) {

			$image_src_array = wp_get_attachment_image_src( $attrs['imageId'], $attrs['imageSize'] );

			$attrs['imageSrc']    = $image_src_array[0];
			$attrs['imageSizes']  = wp_get_attachment_image_sizes( $attrs['imageId'], $attrs['imageSize'] );
			$attrs['imageSrcSet'] = wp_get_attachment_image_srcset( $attrs['imageId'], $attrs['imageSize'] );
			$attrs['imageAlt']    = get_post_meta( $attrs['imageId'], '_wp_attachment_image_alt', true );
		}

		$overlay_classes = 'wsu-overlay wsu-pattern-after';

		static::add_class( $overlay_classes, 'wsu-overlay--', 'overlay', $attrs );
		static::add_class( $overlay_classes, 'wsu-pattern--', 'pattern', $attrs );

		ob_start();

		if ( false !== strpos( $attrs['className'], 'wsu-style--boxed' ) ) {

			include __DIR__ . '/templates/v3-boxed.php';


		} else {

			include __DIR__ . '/templates/default.php';

		}

		remove_filter( 'wp_calculate_image_srcset', array( __CLASS__, 'set_srcset_image_sizes' ), 10, 3 );

		return ob_get_clean();

	}

	public static function set_srcset_image_sizes( $sources, $size_array, $image_src ) {

		foreach ( $sources as $size => $source ) {

			$sources[ $size ]['url'] = $image_src;

		}

		return $sources;

	}

	private static function load_background_template( $attrs ) {

		$template_path = '';

		// ugly conditionals for backwards compatibility. Perhaps should be refactored.
		if ( ( 'image' === $attrs['backgroundType'] || ( '' === $attrs['backgroundType'] && false === $attrs['backgroundVideo'] ) ) && $attrs['imageId'] ) {

			$template_path = '/templates/default.background-image.php';

		} elseif ( ( 'video' === $attrs['backgroundType'] || ( true === $attrs['backgroundVideo'] && empty( $attrs['backgroundType'] ) ) )
			&& ( ! empty( $attrs['videoId'] ) && ! empty( $attrs['videoTitle'] ) && ! empty( $attrs['videoDescription'] ) ) ) {

			$template_path = '/templates/default.background-video.php';

		} elseif ( 'slider' === $attrs['backgroundType'] && ! empty( $attrs['sliderImages'] ) ) {

			$attrs['sliderImages'] = self::process_slider_images( $attrs['sliderImages'] );
			$template_path         = '/templates/default.background-slider.php';

		}

		if ( $template_path && file_exists( __DIR__ . $template_path ) ) {
			include __DIR__ . $template_path;
		}

	}


	private static function process_slider_images( $slider_images ) {

		$slider_images_processed = array();

		foreach ( $slider_images as $slider_image ) {

			$slider_image_processed = array();

			if ( ! empty( $slider_image['id'] ) ) {

				$image_src_array = wp_get_attachment_image_src( $slider_image['id'], 'full' );

				$slider_image_processed['imageSrc']    = $image_src_array[0];
				$slider_image_processed['imageSizes']  = wp_get_attachment_image_sizes( $slider_image['id'], 'full' );
				$slider_image_processed['imageSrcSet'] = wp_get_attachment_image_srcset( $slider_image['id'], 'full' );
				$slider_image_processed['imageAlt']    = wp_get_attachment_caption( $slider_image['id'] );
			}

			if ( ! empty( $slider_image['focalPoint'] ) ) {

				$slider_image_processed['imageFocalPointX'] = ( isset( $slider_image['focalPoint']['x'] ) ) ? ( $slider_image['focalPoint']['x'] * 100 ) . '%' : '50%';
				$slider_image_processed['imageFocalPointY'] = ( isset( $slider_image['focalPoint']['y'] ) ) ? ( $slider_image['focalPoint']['y'] * 100 ) . '%' : '50%';
			}

			$slider_images_processed[] = $slider_image_processed;

		}

		return $slider_images_processed;

	}

}
