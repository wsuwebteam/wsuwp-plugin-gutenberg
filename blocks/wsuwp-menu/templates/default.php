<?php if ( ! empty( $attrs['tag'] ) ) : ?><<?php echo esc_attr( $attrs['tag']  ); ?> class="<?php echo esc_attr( $attrs['className'] ); ?>">
	<div class="wsu-navigation__content">
	<?php endif; ?>
	<?php if ( ! empty( $attrs['slug'] ) ) {

		wp_nav_menu(
			array(
				'menu' => $attrs['slug'],
				'menu_class' => $attrs['menuClassname'],
				'depth' => 3,
			)
		);

	} 
	
	echo wp_kses_post( $content );

	?>
	<?php if ( ! empty( $attrs['tag'] ) ) : ?>
	</div>
</<?php echo esc_attr( $attrs['tag']  ); ?>>
<?php endif; ?>


