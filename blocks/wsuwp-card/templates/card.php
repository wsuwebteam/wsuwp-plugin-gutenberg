<article class="<?php echo esc_attr( $attrs['className'] ); ?>">
	<?php if ( ! empty( $attrs['imageSrc'] ) ) : ?>
		<?php include __DIR__ . '/image-frame.php'; ?>
	<?php endif; ?>
	<div class="wsu-card__content">
		<?php if ( ! empty( $attrs['title'] ) ) : ?>
		<<?php echo esc_attr( $attrs['headingTag'] ); ?> class="wsu-title">
			<?php if ( ! empty( $attrs['link'] ) ) : ?><a href="<?php echo esc_url( $attrs['link'] ); ?>"><?php endif; ?>
				<?php echo wp_kses_post( $attrs['title'] ); ?>
			<?php if ( ! empty( $attrs['link'] ) ) : ?></a><?php endif; ?>
		</<?php echo esc_attr( $attrs['headingTag'] ); ?>>
		<?php endif; ?>
		<?php if ( ! empty( $attrs['caption'] ) ) : ?>
		<div class="wsu-caption">
			<?php echo wp_kses_post( $attrs['caption'] ); ?>
		</div>
		<?php endif; ?>
		<?php echo wp_kses_post( $content ); ?>
	</div>
</article>
