<?php if ( 1 < count( $cards ) ) : ?><div class="<?php echo esc_attr( $wrapper_classes ); ?>"><?php endif; ?>
	<?php if ( ! empty( $attrs['headerText'] ) ) : ?>
		<h3>
			<?php if ( ! empty( $attrs['headerLink'] ) )  : ?><a href="<?php echo esc_url( $attrs['headerLink'] ); ?>"><?php endif; ?>
				<?php echo wp_kses_post( $attrs['headerText'] ); ?></h3>
				<?php if ( ! empty( $attrs['headerLink'] ) )  : ?></a><?php endif; ?>
	<?php endif; ?>