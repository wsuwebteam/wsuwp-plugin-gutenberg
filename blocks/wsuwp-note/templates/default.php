<<?php echo esc_attr( $note_tag ); ?> class="<?php echo esc_attr( $attrs['className'] ); ?>">
	<?php
	if ( ! empty( $attrs['icon'] ) ) :
		?>
		<i class="wsu-note__icon wsu-icon wsu-i-<?php echo esc_attr( $attrs['icon'] ); ?>" aria-label="Icon label"></i>
	<?php endif; ?>

	<?php
	if ( $attrs['showTitle'] && ! empty( $attrs['title'] ) ) :
		?>
		<<?php echo esc_attr( $attrs['titleTag'] ); ?> class="wsu-note__title">
			<?php echo wp_kses_post( $attrs['title'] ); ?>
		</<?php echo esc_attr( $attrs['titleTag'] ); ?>>
	<?php endif; ?>
	
	<?php echo $content; ?>
</<?php echo esc_attr( $note_tag ); ?>>
