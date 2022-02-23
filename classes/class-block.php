<?php namespace WSUWP\Plugin\Gutenberg;

class Block {

	protected static $block_name        = false;
	protected static $default_attrs     = array();
	protected static $customizer_prefix = 'wsuwp_wds_component_';
	protected static $register_block    = true;


	public static function get( $property ) {

		switch ( $property ) {

			case 'block_name':
				return static::$block_name;

			case 'default_attrs':
				return static::$default_attrs;

			case 'customizer_prefix':
				return static::$customizer_prefix;

			case 'register_block';
				return static::$register_block;

			default:
				return '';

		}

	}


	public static function render_block( $attrs, $content = '' ) {

		self::parse_attrs( $attrs );

		return static::render( $attrs, $content );

	}


	protected static function parse_attrs( &$attrs ) {

		$default_attrs   = self::get( 'default_attrs' );
		$customizer_name = str_replace( '/', '_', self::get( 'blockname' ) );
		$customizer_base = self::get( 'customizer_prefix' ) . '_' . $customizer_name . '_';

		// Add default classname it additional classnames are provided
		if ( ! empty( $attrs['className'] ) && ! empty( $default_attrs['className'] ) ) {

			$attrs['className'] = $default_attrs['className'] . ' ' . $attrs['className'];

		}

		// If no value is set for key add default
		foreach ( $default_attrs as $attr_key => $default_value ) {

			if ( ! self::is_set( $attrs, $attr_key ) ) {

				$customizer_setting = $customizer_base . str_replace( '-', '_', $attr_key );

				$attrs[ $attr_key ] = get_theme_mod( $customizer_setting, $default_value );

			}
		}

		foreach ( $attrs as $attr_key => $value ) {

			if ( 'true' === $value || 'false' === $value ) {

				$attrs[ $attr_key ] = ( 'true' === $value ) ? true : false;
			}
		}

	}


	protected static function is_set( $attrs, $key ) {

		if ( ! isset( $attrs[ $key ] ) ) {

			return false;

		}

		if ( '' === $attrs[ $key ] || 'default' === $attrs[ $key ] ) {

			return false;

		} else {

			return true;
		}

	}


	protected static function add_class( &$classes, $prefix, $attr_key, $attrs ) {

		if ( self::is_set( $attrs, $attr_key ) ) {

			$classes .= ' ' . $prefix . $attrs[ $attr_key ];

		}
	}


	protected static function set_image_id_attrs( &$attrs ) {

		if ( ! empty( $attrs['imageId'] ) ) {

			$attrs['imageId'] = (int) $attrs['imageId'];

			$image_src_array = wp_get_attachment_image_src( $attrs['imageId'], $attrs['imageSize'] );

			$attrs['imageSrc']    = $image_src_array[0];
			$attrs['imageSizes']  = wp_get_attachment_image_sizes( $attrs['imageId'], $attrs['imageSize'] );
			$attrs['imageSrcSet'] = wp_get_attachment_image_srcset( $attrs['imageId'], $attrs['imageSize'] );
			$attrs['imageAlt']    = wp_get_attachment_caption( $attrs['imageId'] );

		}

		if ( ! empty( $attrs['imageFocalPoint'] ) && is_array( $attrs['imageFocalPoint'] ) ) {
			$attrs['imageFocalPointX'] = ( isset( $attrs['imageFocalPoint']['x'] ) ) ? ( $attrs['imageFocalPoint']['x'] * 100 ) . '%' : '50%';
			$attrs['imageFocalPointY'] = ( isset( $attrs['imageFocalPoint']['y'] ) ) ? ( $attrs['imageFocalPoint']['y'] * 100 ) . '%' : '50%';
		}

	}
}
