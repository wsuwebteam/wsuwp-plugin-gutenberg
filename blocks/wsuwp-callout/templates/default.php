<<?php echo esc_attr( $callout_tag ); ?> class="<?php echo esc_attr( $attrs['className'] ); ?>">
    <?php if ( ! empty( $attrs['title'] ) ) : ?><<?php echo esc_attr( $attrs['headingTag'] ); ?> class="wsu-callout__title">
        <?php echo wp_kses_post( $attrs['title'] ); ?>
    </<?php echo esc_attr( $attrs['headingTag'] ); ?>><?php endif; ?>
    <?php echo $content; ?>
</<?php echo esc_attr( $callout_tag ); ?>>
