<?php if ( 1 < count( $cards ) ) : ?><div class="<?php echo esc_attr( $wrapper_classes ); ?>"><?php endif; ?>
	<?php if ( ! empty( $attrs['headerText'] ) ) : ?><h3><?php echo wp_kses_post( $attrs['headerText'] ); ?></h3><?php endif; ?>
	<?php foreach ( $cards as $card ) : ?>
	<article class="<?php echo esc_attr( $card_classes ); ?>">
		<?php if ( ! empty( $card['imageSrc'] ) ) : ?>
		<div class="wsu-image-frame wsu-ratio--4-3">
			<?php if ( ! empty( $card['link'] ) ) : ?><a href="<?php echo esc_url( $card['link'] ); ?>"><?php endif; ?>
				<img src="<?php echo esc_attr( $card['imageSrc'] );?>"
					srcset="<?php echo esc_attr( $card['imageSrcset'] ); ?>"
					sizes="<?php echo esc_attr( $card['imageSizes'] );?>"
					alt="<?php echo esc_attr( $card['imageAlt'] );?>" />
			<?php if ( ! empty( $card['link'] ) ) : ?></a><?php endif; ?>
		</div>
		<?php endif; ?>
		<div class="wsu-news-card__content">
			<?php if ( ! empty( $card['title'] ) ) : ?> 
			<h2 class="wsu-article-title">
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
	<?php endforeach; ?>
	<?php if ( ! empty( $attrs['buttonLink'] ) ) : ?>
		<a class="wsu-button" href="<?php echo esc_url( $attrs['buttonLink'] ); ?>"><?php echo wp_kses_post( $attrs['buttonText'] ); ?></a>
	<?php endif; ?>
<?php if ( 1 < count( $cards ) ) : ?></div><?php endif; ?>
