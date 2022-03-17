<?php

if ( ! isset( $card ) ) {
	$card = array();
}

WSUWP\Plugin\Gutenberg\Blocks::parse_block_template_args(
	$card,
	array(
		'imageSrc'         => '',
		'imageSrcSet'      => '',
		'imageSizes'       => '',
		'imageAlt'         => '',
		'imageFocalPointX' => '50%',
		'imageFocalPointY' => '50%',
		'title'            => '',
		'caption'          => '',
		'content'          => '',
		'link'             => '',
	)
);

if ( ! isset( $card_attrs ) ) {
	$card_attrs = array();
}

WSUWP\Plugin\Gutenberg\Blocks::parse_block_template_args(
	$card_attrs,
	array(
		'className'   => '',
		'showCaption' => true,
		'showImage'   => true,
		'showHeading'   => true,
		'imageRatio' => '',
		'showContent' => false,
		'headingTag' => 'h3',
	)
);
?>
<article class="<?php echo esc_attr( $card_attrs['className'] ); ?>">
	<?php if ( ! empty( $card['imageSrc'] ) && ! empty( $card_attrs['showImage'] ) ) : ?>
	<div class="wsu-image-frame <?php if ( ! empty( $card_attrs['imageRatio'] ) ) : ?>wsu-image--ratio-<?php echo esc_attr( $card_attrs['imageRatio'] ); ?><?php endif; ?>">
		<?php if ( ! empty( $card['link'] ) ) : ?><a href="<?php echo esc_url( $card['link'] ); ?>" tabindex="-1" aria-hidden="true"><?php endif; ?>
			<img src="<?php echo esc_attr( $card['imageSrc'] ); ?>"
				srcset="<?php echo esc_attr( $card['imageSrcSet'] ); ?>"
				sizes="<?php echo esc_attr( $card['imageSizes'] ); ?>"
				alt="<?php echo esc_attr( $card['imageAlt']); ?>"
				style="object-position: <?php echo esc_attr( $card['imageFocalPointX'] ); ?> <?php echo esc_attr( $card['imageFocalPointY'] ); ?>"
				/>
		<?php if ( ! empty( $card['link'] ) ) : ?></a><?php endif; ?>
	</div>
	<?php endif; ?>
	<div class="wsu-card__content">
		<?php if ( ! empty( $card['title'] ) && ! empty( $card_attrs['showHeading'] ) ) : ?>
		<<?php echo esc_attr( $card_attrs['headingTag'] ); ?> class="wsu-title">
			<?php if ( ! empty( $card['link'] ) ) : ?><a href="<?php echo esc_url( $card['link'] ); ?>"><?php endif; ?>
				<?php echo wp_kses_post( $card['title'] ); ?>
			<?php if ( ! empty( $card['link'] ) ) : ?></a><?php endif; ?>
		</<?php echo esc_attr( $card_attrs['headingTag'] ); ?>>
		<?php endif; ?>
		<?php if ( ! empty( $card['caption'] ) && ! empty( $card_attrs['showCaption'] )  ) : ?>
		<div class="wsu-caption">
			<?php echo wp_kses_post( $card['caption'] ); ?>
		</div>
		<?php endif; ?>
		<?php if ( ! empty( $card['content'] ) && ! empty( $card_attrs['showContent'] )  ) : ?>
		<span class="wsu-card__content-custom">
			<?php echo wp_kses_post( $card['content'] ); ?>
		</span>
		<?php endif; ?>
	</div>
</article>