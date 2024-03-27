<?php namespace WSUWP\Plugin\Gutenberg;

class WSU_Image {

	protected static $default_attrs = array(
		'imageId'      => '',
		'imageSrc'     => '',
		'imageSrcSet'  => '',
		'imageSizes'   => '',
		'imageAlt'     => '',
		'imageCaption' => '',
	);


	public static function get_image_attrs( $image_id, $attrs = array() ) {

		$img_attrs = array();

		$img_attrs['imageSize']    = ( ! empty( $attrs['imageSize'] ) ) ? $attrs['imageSize'] : 'full';
		$img_attrs['imageId']      = $image_id;
		$img_attrs['imageSrc']     = ( $image_id && empty( $attrs['imageSrc'] ) ) ? wp_get_attachment_image_src( $image_id, $img_attrs['imageSize'] ) : '';
		$img_attrs['imageSrcSet']  = ( $image_id && empty( $attrs['imageSrcSet'] ) ) ? wp_get_attachment_image_srcset( $image_id, $img_attrs['imageSize'] ) : '';
		$img_attrs['imageSizes']   = ( $image_id && empty( $attrs['imageSizes'] ) ) ? wp_get_attachment_image_sizes( $image_id, $img_attrs['imageSize'] ) : '';
		$img_attrs['imageAlt']     = ( $image_id && empty( $attrs['imageAlt'] ) ) ? get_post_meta( $image_id, '_wp_attachment_image_alt', true ) : '';
		$img_attrs['imageCaption'] = ( $image_id && empty( $attrs['imageCaption'] ) ) ? wp_get_attachment_caption( $image_id ) : '';

		if ( is_array( $img_attrs['imageSrc'] ) ) {

			$img_attrs['imageSrc'] = $img_attrs['imageSrc'][0];
		}

		return $img_attrs;

	}


}
