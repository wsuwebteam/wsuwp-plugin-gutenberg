<div 
	class="wsu-hero-slider wsu-width--full swiper <?php echo esc_attr( $attrs['className'] ); ?>"
	data-autoplay=<?php echo $attrs['autoplay'] ? 'true' : 'false'; ?>
	data-autoplay-delay=<?php echo esc_attr( $attrs['autoplayDelay'] ); ?>>
	<div class="wsu-hero-slider__wrapper swiper-wrapper">
		<?php echo $content; ?>
	</div>
	<div class="wsu-hero-slider__slider-elements">
		<nav class="wsu-hero-slider__navigation">
			<button class="wsu-hero-slider__icon wsu-i-arrow-left-carrot" aria-label="Previous"></button>
			<?php
			if ( true === $attrs['autoplay'] ) {
				?>
				<button class="wsu-hero-slider__pause-btn wsu-hero-slider__icon wsu-i-pause play" id="slider-pause" aria-label="Pause"></button>
				<?php
			}
			?>
			<button class="wsu-hero-slider__icon wsu-i-arrow-right-carrot" aria-label="Next"></button>
		</nav>
		<div class="wsu-hero-slider__pagination"></div>
	</div>
</div>
