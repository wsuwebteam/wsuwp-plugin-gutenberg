<?php namespace WSUWP\Plugin\Gutenberg;

class WSU_Query {

	protected static $queired_posts = array();

	protected static $fields = array(
		'title',
		'link',
		'image',
		'caption',
		'date',
	);


	public static function get( $property ) {

		switch ( $property ) {

			case 'queired_posts':
				return self::$queired_posts;
			
			default:
				return '';

		}
	}


	public static function add_shown_post( $post_id ) {

		self::$queired_posts[] = $post_id;

	}
	

	public static function get_posts( $attrs ) {

		$query_args = self::get_query_args( $attrs );

		$posts = get_posts( $query_args );

		return $posts;

	}


	public static function get_posts_attrs( $attrs, $fields = array() ) {

		$posts = array();

		if ( empty( $fields ) ) {

			$fields = self::$fields;

		}

		$query_args = self::get_query_args( $attrs );

		$wp_posts = get_posts( $query_args );

		if ( ! empty( $wp_posts ) ) {

			foreach ( $wp_posts as $wp_post ) {

				$post = self::get_post_fields( $wp_post, $fields, $attrs );

				$posts[] = $post;

			}
		}

		return $posts;

	}


	public static function get_post_fields( $wp_post, $fields, $attrs = array() ) {

		$post = array();

		// Add to shown posts
		self::add_shown_post( $wp_post->ID );

		$post['id']      = $wp_post->ID;
		$post['title']   = ( in_array( 'title', $fields ) ) ? $wp_post->post_title : '';
		$post['caption'] = ( in_array( 'caption', $fields ) ) ? get_the_excerpt( $wp_post->ID ) : '';
		$post['content'] = ( in_array( 'content', $fields ) ) ? $wp_post->content : '';
		$post['link']    = ( in_array( 'link', $fields ) ) ? get_post_permalink( $wp_post->ID ) : '';
		$post['date']    = ( in_array( 'date', $fields ) ) ? get_the_date( '', $wp_post->ID ) : '';

		if ( in_array( 'image', $fields ) ) {

			$image_attrs = WSU_Image::get_image_attrs( get_post_thumbnail_id( $wp_post->ID ), $attrs );

			$post = array_merge( $post, $image_attrs );

		}

		return $post;

	}


	public static function get_fields( $attrs, $fields ) {

		self::remove_field( $fields, $attrs, 'hideImage', 'image' );
		self::remove_field( $fields, $attrs, 'hideCaption', 'caption' );
		self::remove_field( $fields, $attrs, 'hideLink', 'link' );
		self::remove_field( $fields, $attrs, 'hideAutor', 'author' );
		self::remove_field( $fields, $attrs, 'hideDate', 'date' );

		return $fields;

	}


	protected static function remove_field( &$fields, $attrs, $attr_key, $field ) {

		if ( ! empty( $attrs[ $attr_key ] ) ) {

			$key = array_search( $field, $fields );

			if ( false !== $key ) {

				unset( $fields[ $key ] );

			}
		}
	} 


	protected static function get_query_args( $attrs ) {

		$query_args = array(
			'post_type'      => ( ! empty( $attrs['postType'] ) ) ? explode( ',', $attrs['postType'] ) : array( 'post' ),
			'post_status'    => ( ! empty( $attrs['postStatus'] ) ) ? explode( ',', $attrs['postStatus'] ) : array( 'publish' ),
			'posts_per_page' => ( ! empty( $attrs['count'] ) ) ? $attrs['count'] : 5,
			'orderby'        => ( ! empty( $attrs['orderBy'] ) ) ? $attrs['orderBy'] : 'date',
			'order'          => ( ! empty( $attrs['order'] ) ) ?  $attrs['order'] : 'DESC',
		);

		if ( ! empty( $attrs['excludePosts'] ) ) {

			$query_args['post__not_in'] = explode( ',', $attrs['excludePosts'] );

		}

		if ( ! empty( $attrs['offset'] ) ) {

			$query_args['offset'] = $attrs['offset'];

		}

		if ( ! empty( $attrs['hideShownPosts'] ) ) {

			if ( empty( $query_args['post__not_in'] ) ) {

				$query_args['post__not_in'] = array();

			}

			$query_args['post__not_in'] = array_merge( $query_args['post__not_in'], self::get( 'queired_posts' ) );

		}

		if ( ! empty( $attrs['postIn'] ) ) {

			$query_args['post__in'] = array_filter( explode( ',', $attrs['postIn'] ) );

		}

		if ( ! empty( $attrs['imageQuery'] ) ) {

			$query_args['meta_query'] = array( 
				array(
					'key' => '_thumbnail_id',
				),
			);

		}

		if ( empty( $attrs['postIn'] ) && ! empty( $attrs['terms'] ) ) {

			$query_args['tax_query'] = array(
				array(
					'taxonomy' => $attrs['taxonomy'],
					'field'    => 'term_id',
					'terms'    => explode( ',', $attrs['terms'] ),
				),
			);

		}

		return $query_args;

	}

}
