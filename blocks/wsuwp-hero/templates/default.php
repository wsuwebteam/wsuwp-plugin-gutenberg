<div class="wsu-hero wsu-width--full wsu-pattern--wsu-light-radial-left">
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
	<div class="wsu-overlay wsu-overlay--dark-left wsu-pattern-after"></div>
	<div class="wsu-hero__content">
		<div class="wsu-hero__caption">
			<?php if ( ! empty( $attrs['title'] ) ) : ?>
			<div class="wsu-title"><?php echo wp_kses_post( $attrs['title'] ); ?></div>
			<?php endif; ?>
			<?php if ( ! empty( $attrs['caption'] ) ) : ?>
			<div class="wsu-caption">
				<?php echo wp_kses_post( $attrs['caption'] ); ?>
			</div>
			<?php endif; ?>
		</div>
	</div>
</div>
