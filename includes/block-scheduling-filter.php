<?php namespace WSUWP\Plugin\Gutenberg;

class BlockSchedulingFilter {

	public static function render_block( $block_content, $block ) {

		if ( ! is_admin() && isset( $block['attrs']['blockSchedulingEnabled'] ) && true === $block['attrs']['blockSchedulingEnabled'] ) {

			$now       = new \DateTime();
			$publish   = isset( $block['attrs']['blockSchedulingPublishDateTime'] ) ? new \DateTime( $block['attrs']['blockSchedulingPublishDateTime'] ) : new \DateTime( 'yesterday' );
			$unpublish = isset( $block['attrs']['blockSchedulingUnpublishDateTime'] ) ? new \DateTime( $block['attrs']['blockSchedulingUnpublishDateTime'] ) : new \DateTime( 'tomorrow' );

			if ( true === ( $block['attrs']['blockSchedulingIsDisabled'] ?? false )
			|| ( $publish && $now < $publish )
			|| ( $unpublish && $now > $unpublish )
			) {
				return '';
			}
		}

		return $block_content;

	}


	public static function init() {

		add_filter( 'render_block', array( __CLASS__, 'render_block' ), 10, 2 );

	}

}

BlockSchedulingFilter::init();
