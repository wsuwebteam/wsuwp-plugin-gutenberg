<div class="<?php echo esc_attr( $attrs['className'] ); ?>">
	<div class="wsu-hero__background">
		<?php if ( 'video' === $attrs['backgroundType'] && ! empty( $attrs['videoId'] ) ) : ?>
			<div class="wsu-video-frame">
				<iframe class="wsu-video-frame__video-background" src="https://player.vimeo.com/video/<?php echo esc_attr( $attrs['videoId'] ); ?>?background=1" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen title="<?php echo esc_attr( $attrs['videoTitle'] ); ?>"></iframe>
				<button class="wsu-button-pause-background wsu-video-frame--action-pause-background" aria-label="Pause Animation"></button>
				<div class="wsu-visibility-hidden">
					<?php echo wp_kses_post( $attrs['videoDescription'] ); ?>
				</div>
			</div>
		<?php else : ?>
			<?php if ( ! empty( $attrs['imageSrc'] ) ) : ?>
			<img class="wsu-image" src="<?php echo esc_attr( $attrs['imageSrc'] ); ?>"
				srcset="<?php echo esc_attr( $attrs['imageSrcSet'] ); ?>"
				sizes="<?php echo esc_attr( $attrs['imageSizes'] ); ?>"
				alt="<?php echo esc_attr( $attrs['imageAlt'] ); ?>"
				style="object-position: <?php echo esc_attr( $attrs['imageFocalPointX'] ); ?> <?php echo esc_attr( $attrs['imageFocalPointY'] ); ?>"
				/>
			<?php endif; ?>
		<?php endif; ?>
	</div>
	<div class="wsu-hero__overlay">
	</div>
	<div class="wsu-hero__content-wrapper">
		<div class="wsu-hero__inner-content-wrapper">
			<div class="wsu-hero__title-wrapper">
				<?php if ( ! empty( $attrs['title'] ) ) : ?><div class="wsu-hero__title"><?php echo wp_kses_post( $attrs['title'] ); ?></div><?php endif; ?>
				<?php if ( ! empty( $attrs['caption'] ) ) : ?><div class="wsu-hero__caption"><?php echo wp_kses_post( $attrs['caption'] ); ?></div><?php endif; ?>
				<?php if ( ! empty( $attrs['link'] ) && ! empty( $attrs['buttonText'] ) ) : ?>
				<a class="wsu-button wsu-button--size-small" href="<?php echo esc_url( $attrs['link'] ); ?>" aria-labelledby="<?php echo esc_attr( $attrs['titleId'] ); ?>">
					<?php echo esc_html( $attrs['buttonText'] ); ?>
				</a>
				<?php endif; ?>
			</div>
			<div class="wsu-hero__content">
			</div>
		</div>
	</div>
</div>
