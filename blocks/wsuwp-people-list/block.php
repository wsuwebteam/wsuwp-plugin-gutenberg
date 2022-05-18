<?php namespace WSUWP\Plugin\Gutenberg;

class Block_WSUWP_People_List extends Block {

	protected static $block_name    = 'wsuwp/people-list';
	protected static $default_attrs = array(
		'count'                          => '10',
		'page'                           => '1',
		'nid'                            => '',
		'classification'                 => array(),
		'university_category'            => array(),
		'university_location'            => array(),
		'university_organization'        => array(),
		'profile_order'                  => '',
		'display_fields'                 => array(
			'photo',
			'name',
			'title',
			'office',
			'email',
		),
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

		$implode_keys = array(
			'classification',
			'university_category',
			'university_location',
			'university_organization',
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
