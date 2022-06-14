<div class="wsu-stat <?php echo esc_attr( $attrs['className'] ); ?>" role="statistic">
	<span class="wsu-stat__value"><?php echo esc_html( $attrs['stat'] ); ?></span>

	<?php if ( ! empty( $attrs['unit'] ) ) : ?>
		<span class="wsu-stat__unit"><?php echo esc_attr( $attrs['unit'] ); ?></span>
	<?php endif; ?>

	<?php if ( ! empty( $attrs['caption'] ) ) : ?>
		<span class="wsu-stat__caption"><?php echo esc_attr( $attrs['caption'] ); ?></span>
	<?php endif; ?>

	<?php if ( ! empty( $attrs['icon'] ) ) : ?>
		<i class="wsu-stat__icon wsu-i-<?php echo esc_attr( $attrs['icon'] ); ?>"></i>
	<?php endif; ?>
</div>
