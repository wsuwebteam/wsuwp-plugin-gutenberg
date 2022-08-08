<<?php echo esc_attr( $attrs['tag'] ); ?> class="<?php echo esc_attr( $attrs['className'] ); ?>" <?php if ( ! empty( $attrs['id'] ) ) :?>id="<?php echo esc_attr( $attrs['id'] ); ?>"<?php endif; ?>>
    <?php echo $content; ?>
</<?php echo esc_attr( $attrs['tag'] ); ?>>