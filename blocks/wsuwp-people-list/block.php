<?php namespace WSUWP\Plugin\Gutenberg;

class Block_WSUWP_People_List extends Block {

	protected static $profiles = array();

	protected static $block_name    = 'wsuwp/people-list';
	protected static $default_attrs = array(
		'className'                      => '',
		'count'                          => '10',
		'page'                           => '1',
		'nid'                            => '',
		'data_source'                    => 'global',
		'custom_data_source'             => '',
		'classification'                 => array(),
		'university_category'            => array(),
		'university_location'            => array(),
		'university_organization'        => array(),
		'tag'                            => array(),
		'profile_order'                  => '',
		'display_fields'                 => array(
			'photo',
			'name',
			'title',
			'office',
			'email',
		),
		'focus_area_label'               => 'Focus Area',
		'website_link_text'              => 'Website',
		'profile_link'                   => '',
		'headingTag'                     => 'h2',
		'columns'                        => '3',
		'photo_size'                     => 'medium',
		'photo_srcset'                   => '',
		'filters'                        => array(),
		'only_show_selected_term_values' => false,
		'exclude_term_values'            => array(),
		'include_term_values'            => array(),
		'category_filter_label'          => 'Filter by Category',
		'category_filter_terms'          => array(),
		'classification_filter_label'    => 'Filter by Classification',
		'classification_filter_terms'    => array(),
		'location_filter_label'          => 'Filter by Location',
		'location_filter_terms'          => array(),
		'organization_filter_label'      => 'Filter by Organization',
		'organization_filter_terms'      => array(),
		'search_filter_label'            => 'Type to search',
		'tag_filter_label'               => 'Filter by Tag',
		'tag_filter_terms'               => array(),
		'directory'                      => array(),
		'exclude_child_directories'      => true,
		'show_profile'                   => false,
		'indexProfiles'                  => false,
		'use_custom_profile_link'        => false,
		'custom_profile_link'            => '',
	);


	public static function init() {

		include __DIR__ . '/classes/class-profile.php';

		add_filter(
			'query_vars',
			function ( $query_vars ) {
				$query_vars[] = 'wsuprofile';
				return $query_vars;
			}
		);

		add_filter( 'the_title', array( __CLASS__, 'filter_title' ), 1 );

		add_filter( 'wp_nav_menu_items', array( __CLASS__, 'add_menu_fitler' ), 10, 2 );

		add_filter( 'pre_wp_nav_menu', array( __CLASS__, 'remove_menu_fitler' ), 10, 2 );

		add_filter( 'the_content', array( __CLASS__, 'filter_content' ), 1 );

		//add_action( 'the_post', array( __CLASS__, 'replace_content' ), 1 );

	}


	private static function resolve_base_url( $data_source, $custom_data_source ) {

		$sources = array(
			'global' => PEOPLE_API_DOMAIN,
			'local'  => site_url(),
			'custom' => $custom_data_source,
		);

		return $sources[ $data_source ];

	}


	public static function render( $attrs, $content = '' ) {

		// enqueue scripts and styles
		if ( ! is_admin() ) {
			wp_enqueue_script( 'wsu_design_system_script_people_list' );
		}

		// If not using custom profile link remove it.
		if ( empty( $attrs['use_custom_profile_link'] ) ) {

			$attrs['custom_profile_link'] = '';

		} elseif ( ! empty( $attrs['use_custom_profile_link'] ) ) {

			$attrs['custom_profile_link'] = trailingslashit( $attrs['custom_profile_link'] );

		}

		// extend default data attributes and filter out non-data attributes
		$data_attrs = array_filter(
			array_merge( self::$default_attrs, $attrs ),
			function( $k ) {
				return array_key_exists( $k, self::$default_attrs );
			},
			ARRAY_FILTER_USE_KEY
		);

		// resolve base url
		$data_attrs['base_url']  = self::resolve_base_url( $data_attrs['data_source'], $data_attrs['custom_data_source'] );
		$data_attrs['directory'] = ( is_array( $attrs['directory'] ) && ! empty( $attrs['directory']['id'] ) ) ? $attrs['directory']['id'] : false;
		$data_attrs['children']  = $attrs['includeChildDirectories'];

		// remove unneeded attributes
		if ( ( $index = array_search( 'data_source', array_keys( $data_attrs ) ) ) !== false ) {
			array_splice( $data_attrs, $index, 1 );
		}
		if ( ( $index = array_search( 'custom_data_source', array_keys( $data_attrs ) ) ) !== false ) {
			array_splice( $data_attrs, $index, 1 );
		}

		// implode array values for inserting in html attributes
		$implode_keys     = array(
			'classification',
			'university_category',
			'university_location',
			'university_organization',
			'tag',
			'include_term_values',
			'exclude_term_values',
		);
		$filter_term_keys = array(
			'tag_filter_terms',
			'organization_filter_terms',
			'location_filter_terms',
			'classification_filter_terms',
			'category_filter_terms',
		);

		foreach ( $implode_keys as $implode_key ) {
			if ( ! empty( $data_attrs[ $implode_key ] ) && is_array( $data_attrs[ $implode_key ] ) ) {
				$data_attrs[ $implode_key ] = implode( ',', array_column( $data_attrs[ $implode_key ], 'slug' ) );
			}
		}

		foreach ( $filter_term_keys as $filter_term_key ) {
			if ( ! empty( $data_attrs[ $filter_term_key ] ) && is_array( $data_attrs[ $filter_term_key ] ) ) {
				$options = array();

				foreach ( $data_attrs[ $filter_term_key ] as $term ) {
					$options[] = $term['slug'] . '|' . $term['name'];
				}

				$data_attrs[ $filter_term_key ] = implode( ',', $options );
			}
		}

		// render block
		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}


	public static function remove_menu_fitler( $nav_menu, $args ) {

		// we are working with menu, so remove the title filter
		remove_filter( 'the_title', array( __CLASS__, 'filter_title' ), 1 );

		return $nav_menu;

	}


	public static function add_menu_fitler( $items, $args ) {

		// we are done working with menu, so add the title filter back
		add_filter( 'the_title', array( __CLASS__, 'filter_title' ), 1 );

		return $items;

	}


	public static function filter_title( $title ) {

		$profile_nid = get_query_var( 'wsuprofile', false );

		if ( ! is_admin() && is_main_query() && ! empty( $profile_nid ) ) {

				$profile = self::get_profile( $profile_nid );

				$title = $profile->get( 'name' );

		}

		return $title;

	}


	protected static function get_profile( $nid ) {

		global $post;

		$people_blocks = self::get_people_block_recursive( parse_blocks( $post->post_content ) );

		$profile_source = false;

		if ( ! empty( $people_blocks ) && ! empty( $people_blocks[0]['attrs']['custom_data_source'] ) ) {

			$profile_source = $people_blocks[0]['attrs']['custom_data_source'];

		}

		if ( array_key_exists( $nid, self::$profiles ) ) {

			return self::$profiles[ $nid ];

		} else {

			$profile = new Profile( $nid, $profile_source );

			self::$profiles[ $nid ] = $profile;

			return $profile;

		}

	}


	public static function filter_content( $content ) {

		$profile_nid = get_query_var( 'wsuprofile', false );

		if ( ! is_admin() && is_main_query() && ! empty( $profile_nid ) && is_singular() ) {

				if ( get_the_ID() === get_queried_object_id() ) {

					$profile = self::get_profile( $profile_nid );

				if ( $profile ) {

					ob_start();

					include __DIR__ . '/templates/profile.php';

					$content = ob_get_clean();

				}
			}
		}

		return $content;

	}


	public static function get_people_block_recursive( $blocks ) {

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


	/* public static function replace_content( $post_object ) {

		$profile_nid = get_query_var( 'wsuprofile', false );

		if ( ! is_admin() && is_main_query() && ! empty( $profile_nid ) && is_singular() ) {

			

			if ( strpos( $post_object->post_content, 'show_profile' ) ) {

				

				$profile = self::get_profile( $profile_nid );

				if ( $profile ) {

					global $post;

					ob_start();
	
					include __DIR__ . '/templates/profile.php';
	
					$post->post_content = ob_get_clean();
	
				}
			}
		}
	} */


}

Block_WSUWP_People_List::init();

