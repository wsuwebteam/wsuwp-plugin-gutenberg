<article class="<?php echo esc_attr( $card_classes ); ?> wsu-card--horizontal">
	<div class="wsu-card__content">
		<?php if ( ! empty( $card['title'] ) ) : ?> 
		<h2 class="wsu-title">
			<?php if ( ! empty( $card['link'] ) ) : ?><a href="<?php echo esc_url( $card['link'] ); ?>"><?php endif; ?>
			<?php echo wp_kses_post( $card['title'] ); ?>
			<?php if ( ! empty( $card['link'] ) ) : ?></a><?php endif; ?>
		</h2>
        <?php if ( ! empty( $card['date'] ) ) : ?>
		<div class="wsu-meta-date">
			<time><?php echo wp_kses_post( $card['date'] ); ?></time>
		</div>
		<?php endif; ?>
		<?php endif; ?>
		<?php if ( ! empty( $card['caption'] ) ) : ?>
		<div class="wsu-caption">
			<?php echo wp_kses_post( $card['caption'] ); ?>
		</div>
		<?php endif; ?>
	</div>
    <?php if ( ! empty( $card['imageSrc'] ) ) : ?>
	<div class="wsu-image-frame wsu-image-frame--fixed-ratio">
		<?php if ( ! empty( $card['link'] ) ) : ?><a href="<?php echo esc_url( $card['link'] ); ?>"><?php endif; ?>
			<img src="<?php echo esc_attr( $card['imageSrc'] );?>"
				srcset="<?php echo esc_attr( $card['imageSrcset'] ); ?>"
				sizes="<?php echo esc_attr( $card['imageSizes'] );?>"
				alt="<?php echo esc_attr( $card['imageAlt'] );?>" />
		<?php if ( ! empty( $card['link'] ) ) : ?></a><?php endif; ?>
	</div>
	<?php endif; ?>
</article>