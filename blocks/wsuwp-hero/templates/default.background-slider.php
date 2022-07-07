<div class="wsu-slider-frame swiper swiper-no-swiping" 
	data-delay="<?php echo esc_attr( $attrs['sliderDelay'] ); ?>" 
	data-effect="<?php echo esc_attr( $attrs['sliderEffect'] ); ?>">
	<div class="swiper-wrapper">        
		<?php
		foreach ( $attrs['sliderImages'] as $slider_image ) {
			?>
				<div class="swiper-slide">
					<img class="wsu-slider-frame__image" 
						src="<?php echo esc_attr( $slider_image['imageSrc'] ); ?>"
						srcset="<?php echo esc_attr( $slider_image['imageSrcSet'] ); ?>"
						sizes="<?php echo esc_attr( $slider_image['imageSizes'] ); ?>"
						alt="<?php echo esc_attr( $slider_image['imageAlt'] ); ?>"
						style="object-position: <?php echo esc_attr( $slider_image['imageFocalPointX'] ); ?> <?php echo esc_attr( $slider_image['imageFocalPointY'] ); ?>"
						/>
				</div>
		<?php } ?>
	</div>
	<button class="wsu-button-pause-background wsu-slider-frame__pause-button" aria-label="Pause Animation"></button>
</div>
