<div class="<?php echo esc_attr( $attrs['className'] ); ?>">
	<?php if ( ! empty( $attrs['link'] ) ) : ?>
	<a class="wsu-hero__link-slide" href="<?php echo esc_url( $attrs['link'] ); ?>" aria-hidden="true" tabindex="-1">
		<?php echo wp_kses_post( $attrs['title'] ); ?>
    </a>
	<?php endif; ?>
	<?php if ( $attrs['imageId'] ) : ?>
	<div class="wsu-image-frame wsu-image-frame--fill">
		<img src="<?php echo esc_attr( $attrs['imageSrc'] ); ?>"
			srcset="<?php echo esc_attr( $attrs['imageSrcSet'] ); ?>"
			sizes="<?php echo esc_attr( $attrs['imageSizes'] ); ?>"
			alt="<?php echo esc_attr( $attrs['imageAlt']); ?>"
			style="object-position: <?php echo esc_attr( $attrs['imageFocalPointX'] ); ?> <?php echo esc_attr( $attrs['imageFocalPointY'] ); ?>"
			/>
	</div>
	<?php endif; ?>
	<?php if ( ! empty( $attrs['backgroundVideo'] ) && ! empty( $attrs['videoId'] ) && ! empty( $attrs['videoTitle'] ) && ! empty( $attrs['videoDescription'] ) ) : ?>
		<div class="wsu-video-frame wsu-video-frame--position-fill">
			<iframe class="wsu-video-frame__video-background" src="https://player.vimeo.com/video/<?php echo esc_attr( $attrs['videoId'] ); ?>?background=1" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen title="<?php echo esc_attr( $attrs['videoTitle'] ); ?>"></iframe>
			<button class="wsu-button-pause-background wsu-video-frame--action-pause-background" aria-label="Pause Animation"></button>
			<div class="wsu-visibility-hidden">
				<?php echo wp_kses_post( $attrs['videoDescription'] ); ?>
			</div>
		</div>
	<?php endif; ?>
	<div class="<?php echo esc_attr( $overlay_classes ); ?>"></div>
	<div class="wsu-hero__content">
		<div class="wsu-hero__caption">
			<?php if ( ! empty( $attrs['eyebrowHeading'] ) ) : ?>
			<div class="wsu-eyebrow-header">
				<?php echo wp_kses_post( $attrs['eyebrowHeading'] ); ?>
            </div>
			<?php endif; ?>
			<?php if ( ! empty( $attrs['title'] ) ) : ?>
			<div id="<?php echo esc_attr( $attrs['titleId'] ); ?>" class="wsu-title"><?php echo wp_kses_post( $attrs['title'] ); ?></div>
			<?php endif; ?>
			<?php if ( ! empty( $attrs['caption'] ) ) : ?>
			<div class="wsu-caption">
				<?php echo wp_kses_post( $attrs['caption'] ); ?>
			</div>
			<?php endif; ?>
			<?php if ( ! empty( $attrs['link'] ) && ! empty( $attrs['buttonText'] ) ) : ?>
			<a class="wsu-button wsu-button--size-small" href="<?php echo esc_url( $attrs['link'] ); ?>" aria-labelledby="<?php echo esc_attr( $attrs['titleId'] ); ?>">
				<?php echo esc_html( $attrs['buttonText'] ); ?>
			</a>
			<?php endif; ?>
		</div>
	</div>
</div>
