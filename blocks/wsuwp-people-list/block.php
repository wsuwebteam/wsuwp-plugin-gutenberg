<?php namespace WSUWP\Plugin\Gutenberg;

class Block_WSUWP_People_List extends Block {

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
	);


	private static function resolve_base_url( $data_source, $custom_data_source ) {

		$sources = array(
			// 'global' => str_contains( site_url(), '.local' ) ? 'https://peopleapi.local' : 'https://people.wsu.edu',
			'global' => 'https://people.wsu.edu',
			'local'  => site_url(),
			'custom' => $custom_data_source,
		);

		return $sources[ $data_source ];

	}


	public static function render( $attrs, $content = '' ) {

		// enqueue scripts and styles
		wp_enqueue_script( 'wsu_design_system_script_people_list' );

		// extend default data attributes and filter out non-data attributes
		$data_attrs = array_filter(
			array_merge( self::$default_attrs, $attrs ),
			function( $k ) {
				return array_key_exists( $k, self::$default_attrs );
			},
			ARRAY_FILTER_USE_KEY
		);

		// resolve base url
		$data_attrs['base_url'] = self::resolve_base_url( $data_attrs['data_source'], $data_attrs['custom_data_source'] );

		// remove unneeded attributes
		if ( ( $index = array_search( 'data_source', array_keys( $data_attrs ) ) ) !== false ) {
			array_splice( $data_attrs, $index, 1 );
		}
		if ( ( $index = array_search( 'custom_data_source', array_keys( $data_attrs ) ) ) !== false ) {
			array_splice( $data_attrs, $index, 1 );
		}

		// implode array values for inserting in html attributes
		$implode_keys = array(
			'classification',
			'university_category',
			'university_location',
			'university_organization',
			'tag',
			'include_term_values',
			'exclude_term_values',
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

		// render block
		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}

}
