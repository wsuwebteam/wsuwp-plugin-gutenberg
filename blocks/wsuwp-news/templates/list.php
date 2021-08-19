<article class="<?php echo esc_attr( $card_classes ); ?> wsu-card--small">
	<div class="wsu-card__content">
		<?php if ( ! empty( $card['title'] ) ) : ?> 
		<h2 class="wsu-title">
			<?php if ( ! empty( $card['link'] ) ) : ?><a href="<?php echo esc_url( $card['link'] ); ?>"><?php endif; ?>
			<?php echo wp_kses_post( $card['title'] ); ?>
			<?php if ( ! empty( $card['link'] ) ) : ?></a><?php endif; ?>
		</h2>
		<?php endif; ?>
		<?php if ( ! empty( $card['caption'] ) ) : ?>
		<div class="wsu-caption">
			<?php echo wp_kses_post( $card['caption'] ); ?>
		</div>
		<?php endif; ?>
		<?php if ( ! empty( $card['date'] ) ) : ?>
		<div class="wsu-meta-date">
			<time><?php echo wp_kses_post( $card['date'] ); ?></time>
		</div>
		<?php endif; ?>
	</div>
</article>