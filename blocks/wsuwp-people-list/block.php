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
		'headingTag'                     => 'h2',
		'columns'                        => '3',
		'photo_size'                     => 'medium',
		'photo_srcset'                   => '',
		'filters'                        => array(),
		'only_show_selected_term_values' => false,
		'include_term_values'            => array(),
		'exclude_term_values'            => array(),
		'category_filter_label'          => 'Filter by Category',
		'classification_filter_label'    => 'Filter by Classification',
		'location_filter_label'          => 'Filter by Location',
		'organization_filter_label'      => 'Filter by Organization',
		'search_filter_label'            => 'Type to search',
		'tag_filter_label'               => 'Filter by Tag',
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

		$data_attrs['classification']          = implode( ',', array_column( $data_attrs['classification'], 'slug' ) );
		$data_attrs['university_category']     = implode( ',', array_column( $data_attrs['university_category'], 'slug' ) );
		$data_attrs['university_location']     = implode( ',', array_column( $data_attrs['university_location'], 'slug' ) );
		$data_attrs['university_organization'] = implode( ',', array_column( $data_attrs['university_organization'], 'slug' ) );
		$data_attrs['include_term_values']     = implode( ',', array_column( $data_attrs['include_term_values'], 'slug' ) );
		$data_attrs['exclude_term_values']     = implode( ',', array_column( $data_attrs['exclude_term_values'], 'slug' ) );

		// render block
		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}

}
