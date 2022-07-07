<div class="<?php echo esc_attr( $attrs['className'] ); ?>">
	<?php if ( ! empty( $attrs['link'] ) ) : ?>
	<a class="wsu-hero__link-slide" href="<?php echo esc_url( $attrs['link'] ); ?>" aria-hidden="true" tabindex="-1">
		<?php echo wp_kses_post( $attrs['title'] ); ?>
	</a>
	<?php endif; ?>
	
	<?php self::load_background_template( $attrs ); ?> 

	<div class="<?php echo esc_attr( $overlay_classes ); ?>"></div>
	<div class="wsu-hero__content">
		<div class="wsu-hero__caption">
			<?php if ( ! empty( $attrs['eyebrowHeading'] ) ) : ?>
			<div class="wsu-eyebrow-header">
				<?php echo wp_kses_post( $attrs['eyebrowHeading'] ); ?>
			</div>
			<?php endif; ?>
			<?php if ( ! empty( $attrs['title'] ) ) : ?>
			<<?php echo esc_attr( $attrs['headingTag'] ); ?> id="<?php echo esc_attr( $attrs['titleId'] ); ?>" class="wsu-title"><?php echo wp_kses_post( $attrs['title'] ); ?></<?php echo esc_attr( $attrs['headingTag'] ); ?>>
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
