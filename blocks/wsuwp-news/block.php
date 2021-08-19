<?php namespace WSUWP\Plugin\Gutenberg;

class Block_WSUWP_News extends Block {

	protected static $block_name    = 'wsuwp/news';
	protected static $default_attrs = array(
		'className'         => '',
		'type'              => 'index',
		'postIn'            => '',
		'imageSrc'          => '',
		'imageSrcset'       => '',
		'imageSizes'        => '',
		'imageAlt'          => '',
		'caption'           => '',
		'publishDate'       => '',
		'authorName'        => '',
		'authorAffiliation' => '',
		'link'              => '',
		'hideDate'          => false,
		'hideCaption'       => false,
		'hideImage'         => false,
		'hideLink'          => false,
		'requireFirstImage' => false,
		'requireImage'      => false,
		'imageSize'         => 'large',
		'postType:'         => 'post',
		'taxonomy'          => 'category',
		'terms'             => '',
		'count'             => '5',
		'offset'            => '0',
		'useFeed'           => '',
		'excludePosts'      => '',
		'hideShownPosts'    => false,
		'buttonText'        => 'More News',
		'buttonLink'        => '',
		'showHeader'        => false,
		'headerText'        => '',
		'headerTag'         => 'h3',
		'headerLink'        => '',
		'perRow'            => '1',

	);


	public static function render( $attrs, $content = '' ) {

		$card_classes = 'wsu-card wsu-card-news';

		$wrapper_classes = 'wsu-card__wrapper';

		static::add_class( $card_classes, '', 'className', $attrs );

		static::add_class( $card_classes, 'wsu-card-', 'type', $attrs );

		static::add_class( $wrapper_classes, 'wsu-card__wrapper-', 'type', $attrs );

		static::add_class( $wrapper_classes, 'wsu-per-row--', 'perRow', $attrs );

		$cards = self::get_cards( $attrs );

		ob_start();

		if ( ! empty( $cards ) ) {

			include __DIR__ . '/templates/before.php';

			foreach( $cards as $card ) {

				switch ( $attrs['type'] ) {

					case 'index':
						include __DIR__ . '/templates/index.php';
						break;
					
					case 'card':
						include __DIR__ . '/templates/card.php';
						break;
					
					case 'list':
						include __DIR__ . '/templates/list.php';
						break;
				}
			}

			include __DIR__ . '/templates/after.php';
		} 


		return ob_get_clean();

	}


	protected function get_cards( $attrs ) {

		$cards = array();

		if ( ! empty( $attrs['postIn'] ) ) {

			$overrides = array(
				'postStatus'        => 'future,private,draft,pending,publish',
				'postIn'            => $attrs['postIn'],
				'orderBy'           => 'post__in',
				'postType'          => 'any',
				'requireFirstImage' => false,
				'requireImage'      => false,
				'excludePosts'      => '',
			);

			$cards = array_merge( $cards, self::get_feed_posts( $attrs, $overrides ) );

		}

		if ( ! empty( $attrs['requireFirstImage'] ) ) {

			$overrides = array(
				'postIn'     => '',
				'count'      => 1,
				'imageQuery' => true,
				'hideImage'  => false,        
			);

			$cards = array_merge( $cards, self::get_feed_posts( $attrs, $overrides ) );

			$attrs['count'] = (int) $attrs['count'] - 1;

			$attrs['excludePosts'] .= ( ! empty( $cards[0]['id'] ) ) ? ','. $cards[0]['id'] : ''; 

		}

		if ( ! empty( $attrs['useFeed'] ) ) {

			$overrides = array(
				'postIn'     => '',
				'imageQuery' => ( ! empty( $attrs['requireImage'] ) ) ? true : false,
				'hideImage'  => ( ! empty( $attrs['requireImage'] ) ) ? false : $attrs['hideImage'], 
			);

			$cards = array_merge( $cards, self::get_feed_posts( $attrs, $overrides ) );

		}

		return $cards;

	}


	protected static function get_feed_posts( $attrs, $overrides = array() ) {

		$attrs = array_merge( $attrs, $overrides );

		$fields = WSU_Query::get_fields( $attrs, array( 'title', 'image', 'caption', 'date', 'link' ) );

		$cards = WSU_Query::get_posts_attrs( $attrs, $fields );

		return $cards;

	}

}
