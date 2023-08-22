<div
	class="js-wsu-events-card wsu-events-card <?php echo esc_attr( $attrs['className'] ); ?>"
	data-component-id="<?php echo str_replace( '-', '', wp_generate_uuid4() ); ?>"
	<?php
	foreach ( $data_attrs as $key => $value ) {
		$value = is_array( $value ) ? implode( ',', $value ) : $value;
		?>

			data-<?php echo esc_attr( str_replace( '_', '-', $key ) ); ?>="<?php echo esc_attr( $value ); ?>"
		<?php
	}
	?>
></div>
