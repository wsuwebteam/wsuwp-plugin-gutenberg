<?php namespace WSUWP\Plugin\Gutenberg;

class Query_Posts {

	public $rest_api;
	public $post_type;
	public $posts_per_page;
	public $post__in;
	public $offset;
	public $order;
	public $taxonomy;
	public $terms;
	public $host;
	public $exclude_posts;
	public $image_size;
	public $show_sticky;
	public $require_image;
	public $require_first_image;
	public $hide_shown_posts;


	public function __construct( $attrs ) {

		$this->set_args( $attrs );

	}

	public function set_args( $attrs ) {

		$this->rest_api             = ( ! empty( $attrs['restApi'] ) ) ? $attrs['restApi'] : 'wp-json/wp/v2/';
		$this->post_type            = ( ! empty( $attrs['postType'] ) ) ? explode( ',', $attrs['postType'] ) : array( 'post' );
		$this->posts_per_page       = ( ! empty( $attrs['count'] ) ) ? (int) $attrs['count'] : 5;
		$this->post__in             = ( ! empty( $attrs['postIn'] ) ) ? array_filter( explode( ',', $attrs['postIn'] ) ) : array();
		$this->offset               = ( ! empty( $attrs['offset'] ) ) ? (int) $attrs['offset'] : 0;
		$this->order                = ( ! empty( $attrs['order'] ) ) ? $attrs['order'] : 'DESC';
		$this->taxonomy             = ( ! empty( $attrs['taxonomy'] ) ) ? $attrs['taxonomy'] : 'category';
		$this->terms                = ( ! empty( $attrs['terms'] ) ) ? explode( ',', $attrs['terms'] ) : array();
		$this->host                 = ( ! empty( $attrs['host'] ) ) ? $attrs['host'] : '';
		$this->exclude_posts        = ( ! empty( $attrs['exclude_posts'] ) ) ? explode( ',', $attrs['exclude_posts'] ) : array();
		$this->image_size           = ( ! empty( $attrs['imageSize'] ) ) ? $attrs['imageSize'] : 'large';
		$this->show_sticky          = ( ! empty( $attrs['showSticky'] ) ) ? $attrs['showSticky'] : false;
		$this->require_image        = ( ! empty( $attrs['requireImage'] ) ) ? $attrs['requireImage'] : false;
		$this->require_first_image  = ( ! empty( $attrs['requireFirstImage'] ) ) ? $attrs['requireFirstImage'] : false;
		$this->hide_shown_posts     = ( ! empty( $attrs['hideShownPosts'] ) ) ? $attrs['hideShownPosts'] : false;


	}


	public function get_posts() {

		$query_args = $this->get_local_query_args();

		$posts = ( $this->require_first_image ) ? $this->get_first_image_post( $query_args ) : array();

		$posts = array_merge( $posts, $this->get_local_posts( $query_args ) );

		return $posts;

	}


	public function get_remote_posts() {

		$posts = array();

		$request_url = $this->get_remote_query_url();

		$response = wp_remote_get( $request_url );

		if( is_wp_error( $request ) ) {

			return $posts;

		}

		$body = wp_remote_retrieve_body( $response );

		$post_array = json_decode( $body, true );

		if ( ! is_array( $post_array ) ) {

			return $posts;

		}

		foreach ( $post_array as $api_post ) {

			$post = array();

			$post['id']      = $api_post['id'];
			$post['title']   = $api_post['title']['rendered'];
			$post['caption'] = $api_post['excerpt']['rendered'];
			$post['content'] = $api_post['content']['rendered'];
			$post['link']    = $api_post['link'];
			$post['date']    = $api_post['date'];

			if ( isset( $api_post['_embedded']['wp:featuredmedia'][0] ) && ! empty( $api_post['_embedded']['wp:featuredmedia'][0] ) ) {

				$media = $api_post['_embedded']['wp:featuredmedia'][0];

				$image_id     = get_post_thumbnail_id();
				$image_src_array      = wp_get_attachment_image_src( $image_id, $this->image_size );
				$post['imageId']    = $media['id'];
				$post['imageSrc']    = $image_src_array[0];
				$post['imageAlt']    = $media['alt_text'];
				$post['imageCaption'] = $media['caption']['rendered'];

				if ( ! empty( $media['media_details']['sizes'][ $this->image_size ] ) ) {

					$post['imageSrc'] = $media['media_details']['sizes'][ $this->image_size ]['source_url'];

				} else {

					$post['imageSrc'] = $media['source_url'];

				}
			}

			$posts[] = $post;

		}

		return $posts;

	}


	public function get_local_query_args() {

		$query_args = array(
			'post_type'           => $this->post_type,
			'posts_per_page'      => $this->posts_per_page,
			'offset'              => $this->offset,
			'order'               => $this->order,
			'ignore_sticky_posts' => $this->show_sticky,
		);

		if ( ! empty( $this->terms ) ) {

			$query_args['tax_query'] = array(
				array(
					'taxonomy' => $this->taxonomy,
					'field'    => 'term_id',
					'terms'    => $this->terms,
				),
			);
		}

		if ( ! empty( $this->post__in ) ) {

			$query_args['post__in'] = $this->post__in;

		}


		if ( ! empty( $this->hide_shown_posts ) ) {


			$this->exclude_posts = array_merge( $this->exclude_posts, Query::get_show_posts() );

		}

		if ( ! empty( $this->exclude_posts ) ) {

			$query_args['post__not_in'] = $this->exclude_posts;

		}

		if ( ! empty( $this->require_image ) ) {

			$query_args['meta_query'] = array( 
				array(
					'key' => '_thumbnail_id',
				),
			);

		}


		return $query_args;

	}


	protected function get_local_posts( $query_args ) {

		$posts = array();

		$the_query = new \WP_Query( $query_args );

		if ( $the_query->have_posts() ) {

			while ( $the_query->have_posts() ) {
				$the_query->the_post();

				$post['id']      = get_the_ID();
				$post['title']   = get_the_title();
				$post['caption'] = get_the_excerpt();
				$post['content'] = get_the_content();
				$post['link']    = get_post_permalink();
				$post['date']    = get_the_date();

				if ( has_post_thumbnail() ) {

					$image_id     = get_post_thumbnail_id();
					$image_src_array      = wp_get_attachment_image_src( $image_id, $this->image_size );
					$post['imageSrc']    = $image_src_array[0];
					$post['imageSizes']  = wp_get_attachment_image_sizes( $image_id, $this->image_size );
					$post['imageSrcSet'] = wp_get_attachment_image_srcset( $image_id, $this->image_size );
					$post['imageAlt']    = wp_get_attachment_caption( $image_id );

				}

				$posts[] = $post;

			}
		}

		wp_reset_postdata();

		return $posts;

	}


	public function get_remote_query_url() {

		$query_args = $this->get_remote_query_args();

		$url = ( ! empty( $this->host ) ) ? $this->host : get_bloginfo( 'url' );

		$url = trailingslashit( $url ) . $this->rest_api;

		switch ( $this->post_type[0] ) {

			case 'post':
				$url .= 'posts/';
				break;

			case 'page':
				$url .= 'pages/';
				break;
			default:
				$url .= $this->post_type[0] . '/';
		}

		$url .= '?' . http_build_query( $query_args );

		$url .= '&_embed';

		return $url;

	}


	public function get_remote_query_args() {

		$query_args = array(
			'per_page'       => $this->posts_per_page,
			'offset'         => $this->offset,
			'order'          => strtolower( $this->order ),
		);

		if ( ! empty( $this->terms ) ) {

			switch ( $this->taxonomy ) {

				case 'category':
					$query_args['categories'] = implode( ',', $this->terms );
					break;
				case 'post_tag':
					$query_args['tags'] = implode( ',', $this->terms );
					break;

			}

		}

		if ( ! empty( $this->exclude_posts ) ) {

			$query_args['exclude'] = implode( ',', $this->exclude_posts );

		}

		return $query_args;

	}


	protected function get_first_image_post( &$query_args ) {

		$temp_query = $query_args;
		$temp_query['posts_per_page'] = 1;

		$temp_query['meta_query'] = array(
			array(
				'key' => '_thumbnail_id',
			),
		);

		$posts = $this->get_local_posts( $temp_query );

		if ( ! empty( $posts[0]['id'] ) ) {

			$post_id = $posts[0]['id'];

			if ( ! empty( $query_args['post__not_in'] ) && is_array( $query_args['post__not_in'] ) ) {

				$query_args['post__not_in'][] = $post_id;

			} else {

				$query_args['post__not_in'] = array( $post_id );

			}

			if ( '-1' !== $query_args['posts_per_page'] ) {

				$query_args['posts_per_page'] = ( (int) $query_args['posts_per_page'] - 1 );

			}

		}

		return $posts;

	}

}