<?php namespace WSUWP\Plugin\Gutenberg;

class Query_Posts {

	public $attrs;
	public $rest_api;
	public $post_type;
	public $posts_per_page;
	public $post__in;
	public $offset;
	public $order;
	public $taxonomy;
	public $terms;
	public $taxonomy_query;
	public $tax_query;
	public $host;
	public $exclude_posts;
	public $image_size;
	public $show_sticky;
	public $require_image;
	public $require_first_image;
	public $hide_shown_posts;
	public $use_and_logic;
	public $exclude_shown_posts;
	public $do_related;


	public function __construct( $attrs ) {

		$this->set_args( $attrs );

	}

	public function set_args( $attrs ) {

		$this->attrs                = ( ( ! empty( $attrs ) ) && is_array( $attrs ) ) ? $attrs : array();
		$this->rest_api             = ( ! empty( $attrs['restApi'] ) ) ? $attrs['restApi'] : 'wp-json/wp/v2/';
		$this->post_type            = ( ! empty( $attrs['postType'] ) ) ? explode( ',', $attrs['postType'] ) : array( 'post' );
		$this->posts_per_page       = ( ! empty( $attrs['count'] ) ) ? (int) $attrs['count'] : 5;
		$this->post__in             = ( ! empty( $attrs['postIn'] ) ) ? array_filter( explode( ',', $attrs['postIn'] ) ) : array();
		$this->offset               = ( ! empty( $attrs['offset'] ) ) ? (int) $attrs['offset'] : 0;
		$this->order                = ( ! empty( $attrs['order'] ) ) ? $attrs['order'] : 'DESC';
		$this->taxonomy             = ( ! empty( $attrs['taxonomy'] ) ) ? $attrs['taxonomy'] : 'category';
		$this->terms                = ( ! empty( $attrs['terms'] ) ) ? explode( ',', $attrs['terms'] ) : array();
		$this->taxonomy_query       = ( ! empty( $attrs['termsSelected'] ) ) ? $attrs['termsSelected'] : array();
		$this->host                 = ( ! empty( $attrs['host'] ) ) ? $attrs['host'] : '';
		$this->exclude_posts        = ( ! empty( $attrs['exclude_posts'] ) ) ? explode( ',', $attrs['exclude_posts'] ) : array();
		$this->image_size           = ( ! empty( $attrs['imageSize'] ) ) ? $attrs['imageSize'] : 'large';
		$this->show_sticky          = ( ! empty( $attrs['showSticky'] ) ) ? $attrs['showSticky'] : false;
		$this->require_image        = ( ! empty( $attrs['requireImage'] ) ) ? $attrs['requireImage'] : false;
		$this->require_first_image  = ( ! empty( $attrs['requireFirstImage'] ) ) ? $attrs['requireFirstImage'] : false;
		$this->hide_shown_posts     = ( ! empty( $attrs['hideShownPosts'] ) ) ? $attrs['hideShownPosts'] : false;
		$this->use_and_logic        = ( ! empty( $attrs['useAndLogic'] ) ) ? $attrs['useAndLogic'] : false;
		$this->exclude_shown_posts  = ( ! empty( $attrs['hideShownPosts'] ) ) ? $attrs['hideShownPosts'] : false;
		$this->tax_query            = ( ! empty( $attrs['queryTerms'] ) ) ? $attrs['queryTerms'] : false;
		$this->do_related           = ( ! empty( $attrs['doRelated'] ) ) ? $attrs['doRelated'] : false;
		$this->order_by             = ( ! empty( $attrs['orderByTitle'] ) ) ? 'title' : 'date';

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

		if ( is_wp_error( $response ) ) {

			return $posts;

		}

		$body = wp_remote_retrieve_body( $response );

		$post_array = json_decode( $body, true );

		if ( ! is_array( $post_array ) ) {

			return $posts;

		}

		$date_format = get_option( 'date_format' );

		if ( is_array( $post_array ) ) {

			foreach ( $post_array as $api_post ) {

				if ( is_array( $api_post ) ) {

					$post = array();
		
					$post['id']      = ( ! empty( $api_post['id'] ) ) ? $api_post['id'] : '';
					$post['title']   = ( ! empty( $api_post['title']['rendered'] ) ) ? $api_post['title']['rendered'] : '';
					$post['caption'] = ( ! empty( $api_post['excerpt']['rendered'] ) ) ? $api_post['excerpt']['rendered'] : '';
					$post['content'] = ( ! empty( $api_post['content']['rendered'] ) ) ? $api_post['content']['rendered'] : '';
					$post['link']    = ( ! empty( $api_post['link'] ) ) ? $api_post['link'] : '';
					$post['date']    = ( ! empty( $api_post['date'] ) ) ? date_i18n( $date_format, strtotime( $api_post['date'] ) ) : '';
		
					if ( isset( $api_post['_embedded']['wp:featuredmedia'][0] ) && ! empty( $api_post['_embedded']['wp:featuredmedia'][0] ) ) {
		
						$media = $api_post['_embedded']['wp:featuredmedia'][0];

						$post['imageId']      = ( ! empty( $media['id'] ) ) ? $media['id'] : '';
						$post['imageAlt']     = ( ! empty( $media['alt_text'] ) ) ? $media['alt_text'] : '';
						$post['imageCaption'] = ( ! empty( $media['caption']['rendered'] ) ) ? $media['caption']['rendered'] : '';
		
						if ( ! empty( $media['media_details']['sizes'][ $this->image_size ] ) ) {
		
							$post['imageSrc'] = $media['media_details']['sizes'][ $this->image_size ]['source_url'];
		
						} else {
		
							$post['imageSrc'] = $media['source_url'];
		
						}
					}
		
					$posts[] = $post;

				}
			}
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
			'orderby'             => $this->order_by,
		);

		if ( 'title' === $this->order_by ) {

			$query_args['order'] = 'ASC';

		}

		if ( ! empty( $this->do_related ) ) {

			$post_id = get_the_ID();

			if ( $post_id ) {

				$related_term_id = self::get_related_term_id( $post_id, $this->taxonomy );

			}
		}

		if ( ! empty( $this->terms ) && empty( $this->tax_query ) ) {

			$query_args['tax_query'] = array(
				array(
					'taxonomy' => $this->taxonomy,
					'field'    => 'term_id',
					'terms'    => $this->terms,
					'operator' => ( ! empty( $this->use_and_logic ) ) ? 'AND' : 'IN',
				),
			);
		} else if ( ! empty( $this->tax_query ) ) {

			$tax_queries = $this->get_tax_query_sorted();
			$query_args['tax_query'] = array();

			foreach ( $tax_queries as $taxonomy => $terms  ) {

				$query_args['tax_query'][] = array(
					'taxonomy' => $taxonomy,
					'field'    => 'term_id',
					'terms'    => $terms,
					'operator' => ( ! empty( $this->use_and_logic ) ) ? 'AND' : 'IN',
				);

			}

			if ( 1 < count( $tax_queries ) ) {
				$query_args['tax_query']['relation'] = 'AND';
			}

		}

		if ( ! empty( $this->do_related ) ) {

			$post_id = get_the_ID();

			if ( $post_id ) {

				$related_term_id = self::get_related_term_id( $post_id, $this->taxonomy );

				if ( $related_term_id ) {

					if ( empty( $query_args['tax_query'] ) ) {

						$query_args['tax_query'] = array();

					}

					$query_args['tax_query'][] = array(
						'taxonomy' => $this->taxonomy,
						'field'    => 'term_id',
						'terms'    => $related_term_id,
					);

					$this->exclude_posts[] = $post_id;

				}
			}
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

		if ( ! empty( $this->exclude_shown_posts ) ) {

			$shown_posts = Query::get_show_posts();

			if ( ! empty( $shown_posts ) ) {

				$query_args['post__not_in'] = array_merge( $this->exclude_posts, $shown_posts );

			}
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

				$wsu_post = array();				

				$wsu_post['id']      = get_the_ID();
				$wsu_post['title']   = get_the_title();
				$wsu_post['caption'] = get_the_excerpt();
				$wsu_post['content'] = get_the_content();
				$wsu_post['link']    = get_permalink();
				$wsu_post['date']    = get_the_date();
				$wsu_post['author']  = get_the_author();

				if ( has_post_thumbnail() ) {

					$image_id     = get_post_thumbnail_id();
					$image_src_array      = wp_get_attachment_image_src( $image_id, 'large' );
					$wsu_post['imageSrc']    = $image_src_array[0];
					$wsu_post['imageSizes']  = wp_get_attachment_image_sizes( $image_id, $this->image_size );
					$wsu_post['imageSrcSet'] = wp_get_attachment_image_srcset( $image_id, $this->image_size );
					$wsu_post['imageAlt']    = get_post_meta( $image_id, '_wp_attachment_image_alt', true );

				}
				$wsu_post['eyebrow_heading'] = get_post_meta( $wsu_post['id'], '_eyebrow_heading', true );
				$wsu_post['youtubeVideo']    = get_post_meta( $wsu_post['id'], '_wsu_featured_video_youtube', true );
				$wsu_post['vimeoVideo']      = get_post_meta( $wsu_post['id'], '_wsu_featured_video_vimeo', true );
				$wsu_post['thumbnailVideo']  = get_post_meta( $wsu_post['id'], '_wsu_featured_thumbnail_video', true );


				$posts[] = $wsu_post;

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

		if ( ! empty( $this->taxonomy_query ) ) {

			$api_taxonomies = array(
				'categories'           => array(),
				'post_tag'             => array(),
				'wsuwp_university_org' => array(),
			);

			foreach ( $this->taxonomy_query as $index => $taxonomy ) {

				switch ( $taxonomy['type'] ) {

					case 'category':
						$api_taxonomies['categories'][] = $taxonomy['id'];
						break;
					case 'post_tag':
						$api_taxonomies['tags'][] = $taxonomy['id'];
						break;
					case 'wsuwp_university_org':
						$api_taxonomies['wsuwp_university_org'][] = $taxonomy['id'];
						break;
				}

			}

			foreach ( $api_taxonomies as $api_taxonomy => $api_terms ) {

				if ( ! empty( $api_terms ) ) {

					$query_args[ $api_taxonomy ] = implode( ',', $api_terms );

				}
			}
		} elseif ( ! empty( $this->terms ) ) {

			switch ( $this->taxonomy ) {

				case 'category':
					$query_args['categories'] = implode( ',', $this->terms );
					break;
				case 'post_tag':
					$query_args['tags'] = implode( ',', $this->terms );
					break;
				case 'wsuwp_university_org':
					$query_args['wsuwp_university_org'] = implode( ',', $this->terms );
					break;

			}
		}

		if ( ! empty( $this->use_and_logic ) ) {

			$query_args['term_relation'] = 'AND';

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


	protected function get_tax_query_sorted() {

		$sorted_query = array();

		foreach ( $this->tax_query as $tax_query ) {

			$taxonomy = $tax_query['taxonomy'];
			$term     = $tax_query['termID'];

			if ( array_key_exists( $taxonomy, $sorted_query ) ) {

				$sorted_query[ $taxonomy ][] = $term;

			} else {

				$sorted_query[ $taxonomy ] = array( $term );

			}

		}

		return $sorted_query;

	}


	protected static function get_related_term( $post_id, $taxonomy = 'category' ) {

		$terms = get_the_terms( $post_id, $taxonomy );

		if ( ! is_array( $terms ) || ! $terms || is_wp_error( $terms ) ) {

			return false;

		}

		foreach ( $terms as $term ) {

			if ( 'uncategorized' !== $term->name ) {

				return $term;

			}
		}

		return false;

	}


	protected static function get_related_term_id( $post_id, $taxonomy = 'category' ) {

		$term = self::get_related_term( $post_id, $taxonomy );

		return ( ! $term ) ? false : $term->term_id;

	}

}