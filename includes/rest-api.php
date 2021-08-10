<?php namespace WSUWP\Plugin\Gutenberg;

class Rest_API {


	public static function setup_classes() {

		Plugin::load_class( 'block' );
		Plugin::load_class( 'wsu-query' );
		Plugin::load_class( 'wsu-image' );

	}


	public static function init() {

		self::setup_classes();

		add_action( 'rest_api_init', array( __CLASS__, 'register_routes' ) );

	}


	public static function register_routes() {

		register_rest_route(
			'wsu-gutenberg/v1',
			'render-block/(?P<block_name>[a-zA-Z0-9-]+)',
			array(
				'methods'  => 'GET',
				'callback' => array( __CLASS__, 'render_endpoint' ),
			)
		);

		register_rest_route(
			'wsu-gutenberg/v1',
			'search-posts',
			array(
				'methods'  => 'GET',
				'callback' => array( __CLASS__, 'search_posts' ),
			)
		);

	}


	public static function render_endpoint( $request ) {

		$block = array();

		$block_params = $request->get_params();

		// Check to make sure block_name exists
		if ( ! empty( $block_params['block_name'] ) ) {

			$registered_blocks = Blocks::get( 'register_blocks' );

			// Fix the block name to expected format
			$block_name = str_replace( '--', '/', $block_params['block_name'] );

			$block['name'] = $block_name;

			// Check if this is one of our registered blocks
			if ( array_key_exists( $block_name, $registered_blocks ) ) {

				$block_class = __NAMESPACE__ . '\\' . $registered_blocks[ $block_name ];

				$block['rendered'] = call_user_func( array( $block_class, 'render_block' ), $block_params );

			}
		}

		return wp_json_encode( $block, JSON_UNESCAPED_SLASHES );

	}


	public static function search_posts( $request ) {
		$params = $request->get_params();

	}

}

Rest_API::init();
