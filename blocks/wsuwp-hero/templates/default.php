<div class="<?php echo esc_attr( $attrs['className'] ); ?>">
	<?php if ( ! empty( $attrs['link'] ) ) : ?>
	<a class="wsu-hero__link-slide" href="<?php echo esc_url( $attrs['link'] ); ?>" aria-hidden="true" tabindex="-1">
		<?php echo wp_kses_post( $attrs['title'] ); ?>
    </a>
	<?php endif; ?>
	<div class="wsu-image-frame wsu-image-frame--fill">
	<?php if ( $attrs['imageId'] ) : ?>
		<img src="<?php echo esc_attr( $attrs['imageSrc'] ); ?>"
			srcset="<?php echo esc_attr( $attrs['imageSrcSet'] ); ?>"
			sizes="<?php echo esc_attr( $attrs['imageSizes'] ); ?>"
			alt="<?php echo esc_attr( $attrs['imageAlt']); ?>"
			style="object-position: <?php echo esc_attr( $attrs['imageFocalPointX'] ); ?> <?php echo esc_attr( $attrs['imageFocalPointY'] ); ?>"
			/>
	<?php endif; ?>
	</div>
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
			<a class="wsu-button wsu-button--size-small" href="#" aria-labelledby="<?php echo esc_attr( $attrs['titleId'] ); ?>">
				<?php echo esc_html( $attrs['buttonText'] ); ?>
			</a>
			<?php endif; ?>
		</div>
	</div>
</div>
