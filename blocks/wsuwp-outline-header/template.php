<<?php echo esc_attr( $attrs['tag'] ); ?> class="wsu-header--style-outline">
    <?php if ( ! empty( $attrs['before'] ) ) : ?><span class="wsu-header__before"><?php echo wp_kses_post( $attrs['before'] ); ?></span><?php endif; ?>
    <span class="wsu-header__outline"><?php echo implode( ' ', $outlines ); ?></span>
    <?php if ( ! empty( $attrs['after'] ) ) : ?><span class="wsu-header__after"><?php echo wp_kses_post( $attrs['after'] ); ?></span><?php endif; ?>
</<?php echo esc_attr( $attrs['tag'] ); ?>>