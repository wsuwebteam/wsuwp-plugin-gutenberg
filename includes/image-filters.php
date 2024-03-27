<?php namespace WSUWP\Plugin\Gutenberg;

class ImageFilters {

	public static function filter_wp_calculate_image_srcset( $sources, $size, $image_src, $image_meta, $attachment_id ) {

		if ( $attachment_id === 0 && $GLOBALS['WSUWP_GUTENBURG_RETRIEVING_REMOTE_POSTS'] === true ) {
			$file_location = dirname( $image_src );

			foreach ( $sources as &$source ) {
				$filename      = basename( $source['url'] );
				$source['url'] = $file_location . '/' . $filename;
			}
		}

		return $sources;

	}


	public static function init() {

		add_filter( 'wp_calculate_image_srcset', array( __CLASS__, 'filter_wp_calculate_image_srcset' ), 10, 5 );

	}

}

ImageFilters::init();
