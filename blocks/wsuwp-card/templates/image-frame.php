<?php if ( ! empty( $attrs['imageSrc'] ) ) : ?>
<div class="wsu-image-frame <?php if ( ! empty( $attrs['imageRatio'] ) ) : ?>wsu-image--ratio-<?php echo esc_attr( $attrs['imageRatio'] ); ?><?php endif; ?>">
    <?php if ( ! empty( $attrs['link'] ) ) : ?><a href="<?php echo esc_url( $attrs['link'] ); ?>" tabindex="-1" aria-hidden="true"><?php endif; ?>
		<img src="<?php echo esc_attr( $attrs['imageSrc'] ); ?>"
			srcset="<?php echo esc_attr( $attrs['imageSrcSet'] ); ?>"
			sizes="<?php echo esc_attr( $attrs['imageSizes'] ); ?>"
			alt="<?php echo esc_attr( $attrs['imageAlt']); ?>"
			style="object-position: <?php echo esc_attr( $attrs['imageFocalPointX'] ); ?> <?php echo esc_attr( $attrs['imageFocalPointY'] ); ?>"
			/>
    <?php if ( ! empty( $attrs['link'] ) ) : ?></a><?php endif; ?>
</div>
<?php endif; ?>