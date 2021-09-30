<div class="wsu-hero  wsu-pattern--wsu-light-radial-left">
	<div class="wsu-image-frame wsu-image-frame--fill">
	<?php if ( $attrs['imageId'] ) : ?>
		<img src="<?php echo esc_attr( wp_get_attachment_image_src( $attrs['imageId'], $attrs['imageSize'] ) ); ?>"
			srcset="<?php echo esc_attr( wp_get_attachment_image_srcset( $attrs['imageId'], $attrs['imageSize'] ) ); ?>"
			sizes="<?php echo esc_attr( wp_get_attachment_image_sizes( $attrs['imageId'], $attrs['imageSize']) ); ?>"
			alt="<?php echo esc_attr( wp_get_attachment_caption( $attrs['imageId'] ) ); ?>"
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
