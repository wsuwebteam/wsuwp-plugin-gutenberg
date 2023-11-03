<?php namespace WSUWP\Plugin\Gutenberg;

class People_Sitemap extends \WP_Sitemaps_Provider {

	public function __construct() {

		$this->name = 'wsuprofiles'; // public-facing name in URLs says parent class.

	}


	public function get_url_list( $page_num, $post_type = '' ) {

		$url_list = array( array() );

		$profile_links = self::get_profile_links();

		if ( ! empty( $profile_links ) ) {

			foreach ( $profile_links as $url => $nids ) {

				if ( ! empty( $nids ) ) {

					foreach ( $nids as $nid ) {

						$url_list[] = array( 'loc' => $url . 'wsu-profile/' . $nid );
					}
				}
			}
		}

		return ( ! empty( $url_list ) ) ? $url_list : array( array() );
	}


	public function get_max_num_pages( $subtype = '' ) {

		return 1;

	}


	public static function get_profile_links() {

		$profile_links = array();

		$posts = self::get_people_posts();

		$directory_nids = array();

		foreach ( $posts as $url => $post ) {

			$profile_links[ $url ] = array();

			$people_blocks = Block_WSUWP_People_List::get_people_block_recursive( parse_blocks( $post->post_content ) );

			$directories = self::get_people_directories( $people_blocks );

			foreach ( $directories as $directory ) {

				$nids = self::get_directory_nids( $directory );

				if ( ! empty( $nids ) ) {

					foreach ( $nids as $nid ) {

						if ( ! in_array( $nid, $profile_links[ $url ], true ) ) {

							$profile_links[ $url ][] = $nid;

						}
					}
				}
			}
		}

		return $profile_links;

	}


	protected static function get_people_block_recursive( $blocks ) {

		$people_blocks = array();

		foreach ( $blocks as $block ) {

			if ( ! empty( $block['innerBlocks'] ) ) {

				$child_blocks = self::get_people_block_recursive( $block['innerBlocks'] );

				if ( ! empty( $child_blocks ) ) {

					$people_blocks = array_merge( $people_blocks, $child_blocks );

				}
			}

			if ( 'wsuwp/people-list' === $block['blockName'] ) {

				$people_blocks[] = $block;

			}
		}

		return $people_blocks;

	}


	protected static function get_people_directories( $people_blocks ) {

		$directories = array();

		foreach ( $people_blocks as $people_block ) {

			if ( ! empty( $people_block['attrs']['indexProfiles'] ) && ! empty( $people_block['attrs']['directory'] ) ) {

				$directory_id = $people_block['attrs']['directory']['id'];

				if ( ! empty( $people_block['attrs']['custom_data_source'] ) ) {

					$directories[] = array( 'id' => $directory_id, 'source' => $people_block['attrs']['custom_data_source'] );

				}

				$directories[] = $directory_id;

			}
		}

		return $directories;

	}


	protected static function get_people_posts() {

		$posts = array();

		$args = array(
			'posts_per_page' => 30,
			'post_type'      => 'any',
			's'              => 'wsuwp/people-list',
		);

		$profile_query = new \WP_Query( $args );

		if ( $profile_query->have_posts() ) {

			while ( $profile_query->have_posts() ) {

				$profile_query->the_post();

				$posts[ get_the_permalink() ] = $profile_query->post;

			}
		}

		wp_reset_postdata();

		return $posts;

	}


	protected static function get_directory_nids( $directory ) {

		$nids = array();

		if ( is_array( $directory ) ) {

			$request_url = $directory['source'];
			$directory_id = $directory['id'];

		} else {

			$request_url = ( $directory && is_numeric( $directory ) ) ? 'https://people.wsu.edu/wp-json/peopleapi/v1/people?directory=' . $directory : false;

		}

		if ( $request_url ) {

			$response = wp_remote_request( $request_url );

			if ( $response ) {

				$people = json_decode( wp_remote_retrieve_body( $response ), true );

				if ( ! empty( $people ) ) {

					foreach ( $people as $person ) {

						if ( ! empty( $person['nid'] ) ) {

							$nids[] = $person['nid'];

						}
					}
				}
			}
		}

		return $nids;

	}

}
