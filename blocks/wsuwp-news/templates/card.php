<article class="<?php echo esc_attr( $card_classes ); ?>">
	<?php if ( ! empty( $attrs['allowVideo'] ) && ! empty( $card['thumbnailVideo'] ) ) : ?>
	<div class="wsu-card__video-wrapper" <?php if ( ! empty( $card['imageSrc'] ) ) : ?> style="background-image:url(<?php echo esc_attr( $card['imageSrc'] ); ?>)"<?php endif; ?>>
		<iframe class="wsu-featured-video wsu-featured-video--vimeo" src="https://player.vimeo.com/video/<?php echo esc_attr( $card['thumbnailVideo'] ); ?>?background=1" width="100%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen="" title="WSU" style="aspect-ratio: 16 / 9; max-width: 100%;"></iframe>
		<?php if ( ! empty( $card['link'] ) ) : ?><a class="wsu-card__video-link" href="<?php echo esc_url( $card['link'] ); ?>" style="font-size:0;color:transparent" tabindex="-1" aria-hidden="true"><?php echo wp_kses_post( $card['title'] ); ?></a><?php endif; ?>
	</div>
	<?php elseif ( ! empty( $card['imageSrc'] ) ) : ?>
	<div class="wsu-image-frame wsu-image-frame--fixed-ratio">
		<?php if ( ! empty( $card['link'] ) ) : ?><a href="<?php echo esc_url( $card['link'] ); ?>"><?php endif; ?>
			<img src="<?php echo esc_attr( $card['imageSrc'] );?>"
				srcset="<?php echo esc_attr( $card['imageSrcset'] ); ?>"
				sizes="<?php echo esc_attr( $card['imageSizes'] );?>"
				alt="<?php echo esc_attr( $card['imageAlt'] );?>" />
		<?php if ( ! empty( $card['link'] ) ) : ?></a><?php endif; ?>
	</div>
	<?php endif; ?>
	<div class="wsu-card__content">
		<?php if ( ! empty( $card['title'] ) ) : ?> 
		<h2 class="wsu-title">
			<?php if ( ! empty( $card['link'] ) ) : ?><a href="<?php echo esc_url( $card['link'] ); ?>"><?php endif; ?>
			<?php echo wp_kses_post( $card['title'] ); ?>
			<?php if ( ! empty( $card['link'] ) ) : ?></a><?php endif; ?>
		</h2>
		<?php endif; ?>
        <?php if ( ! empty( $card['date'] ) ) : ?>
		<div class="wsu-meta-date">
			<time><?php echo wp_kses_post( $card['date'] ); ?></time>
		</div>
		<?php endif; ?>
		<?php if ( ! empty( $card['caption'] ) ) : ?>
		<div class="wsu-caption">
			<?php echo wp_kses_post( $card['caption'] ); ?>
		</div>
		<?php endif; ?>
	</div>
</article>