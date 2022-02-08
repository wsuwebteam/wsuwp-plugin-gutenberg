<div class="wsu-cta <?php echo esc_attr( $attrs['wrapperClassName'] ); ?>">
	<a
		<?php
		if ( ! empty( $attrs['buttonUrl'] ) ) :
			?>
			href="<?php echo esc_url( $attrs['buttonUrl'] ); ?>"<?php endif; ?>	
		class="wsu-button <?php echo esc_attr( $attrs['className'] ); ?>">
		<?php if ( ! empty( $attrs['iconBefore'] ) ) : ?>
			<i class="wsu-icon wsu-i-<?php echo esc_attr( $attrs['iconBefore'] ); ?>"></i>
		<?php endif; ?>	
		<?php echo esc_html( $attrs['buttonText'] ); ?>
		<?php if ( ! empty( $attrs['iconAfter'] ) ) : ?>
			<i class="wsu-icon wsu-i-<?php echo esc_attr( $attrs['iconAfter'] ); ?>"></i>
		<?php endif; ?>
	</a>
</div>
