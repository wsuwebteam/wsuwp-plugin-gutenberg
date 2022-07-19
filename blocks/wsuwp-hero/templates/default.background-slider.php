<div class="wsu-background-slider wsu-background-slider--effect-<?php echo esc_attr( $attrs['sliderEffect'] ); ?>" 
	data-delay="<?php echo esc_attr( $attrs['sliderDelay'] ); ?>">
	<?php foreach ( $attrs['sliderImages'] as $index => $slider_image ) : ?> 
		<div class="wsu-background-slider__slide <?php if ( 0 == $index ) : ?>wsu-slide--active<?php endif; ?>">
			<img class="wsu-background-slider__image" 
				src="<?php echo esc_attr( $slider_image['imageSrc'] ); ?>"
				srcset="<?php echo esc_attr( $slider_image['imageSrcSet'] ); ?>"
				sizes="<?php echo esc_attr( $slider_image['imageSizes'] ); ?>"
				alt="<?php echo esc_attr( $slider_image['imageAlt'] ); ?>"
				style="object-position: <?php echo esc_attr( $slider_image['imageFocalPointX'] ); ?> <?php echo esc_attr( $slider_image['imageFocalPointY'] ); ?>"
				/>
		</div>
	<?php endforeach; ?>
	<button class="wsu-button-pause-background wsu-background-slider__pause-button" aria-label="Pause Animation"></button>
</div>
