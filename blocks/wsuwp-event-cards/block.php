<?php namespace WSUWP\Plugin\Gutenberg;

class Block_WSUWP_Event_Cards extends Block {

	protected static $block_name    = 'wsuwp/event-cards';
	protected static $default_attrs = array(
		'className'       => '',
		'data_source'     => '',
		'search'          => '',
		'source_type'     => 'feed',
		'count'           => 5,
		'selected_events' => array(),
		'excluded_events' => array(),
		'types'           => array(),
		'categories'      => array(),
		'tags'            => array(),
		'organizations'   => array(),
		'offset'          => 0,
		'columns'         => 3,
	);


	public static function render( $attrs, $content = '' ) {

		$attrs['data_source'] = empty( $attrs['data_source'] ) ? site_url() : $attrs['data_source'];

		$data_attrs                  = array();
		$data_attrs['type']          = $attrs['source_type'];
		$data_attrs['search']        = $attrs['search'];
		$data_attrs['data_source']   = $attrs['data_source'];
		$data_attrs['count']         = $attrs['count'];
		$data_attrs['offset']        = $attrs['offset'];
		$data_attrs['post_ids']      = join( ',', array_column( $attrs['selected_events'], 'id' ) );
		$data_attrs['exclude']       = join( ',', array_column( $attrs['excluded_events'], 'id' ) );
		$data_attrs['types']         = join( ',', array_column( $attrs['types'], 'id' ) );
		$data_attrs['categories']    = join( ',', array_column( $attrs['categories'], 'id' ) );
		$data_attrs['tags']          = join( ',', array_column( $attrs['tags'], 'id' ) );
		$data_attrs['organizations'] = join( ',', array_column( $attrs['organizations'], 'id' ) );

		// render block
		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}

}
