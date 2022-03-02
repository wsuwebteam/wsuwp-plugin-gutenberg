<?php

if ( ! isset( $card ) ) {
	$card = array();
}

WSUWP\Plugin\Gutenberg\Blocks::parse_block_template_args(
	$card,
	array(
		'imageSrc'         => '',
		'imageRatio'       => '',
		'imageSrcSet'      => '',
		'imageSizes'       => '',
		'imageAlt'         => '',
		'imageFocalPointX' => '50%',
		'imageFocalPointY' => '50%',
		'title'            => '',
		'headingTag'       => 'h3',
		'caption'          => '',
	)
);

if ( ! isset( $card_attrs ) ) {
	$card_attrs = array();
}

WSUWP\Plugin\Gutenberg\Blocks::parse_block_template_args(
	$card_attrs,
	array(
		'className'   => '',
		'hideCaption' => false,
		'hideImage'   => false,
		'hideTitle'   => false,
	)
);
?>
<article class="<?php echo esc_attr( $card_attrs['className'] ); ?>">
	<?php if ( ! empty( $card['imageSrc'] ) ) : ?>
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
		<?php if ( ! empty( $card['title'] ) ) : ?>
		<<?php echo esc_attr( $card['headingTag'] ); ?> class="wsu-title">
			<?php if ( ! empty( $card['link'] ) ) : ?><a href="<?php echo esc_url( $card['link'] ); ?>"><?php endif; ?>
				<?php echo wp_kses_post( $card['title'] ); ?>
			<?php if ( ! empty( $card['link'] ) ) : ?></a><?php endif; ?>
		</<?php echo esc_attr( $card['headingTag'] ); ?>>
		<?php endif; ?>
		<?php if ( ! empty( $card['caption'] ) ) : ?>
		<div class="wsu-caption">
			<?php echo wp_kses_post( $card['caption'] ); ?>
		</div>
		<?php endif; ?>
		<?php echo wp_kses_post( $content ); ?>
	</div>
</article>