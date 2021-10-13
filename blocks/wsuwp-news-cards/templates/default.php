<div class="<?php echo esc_attr( $attrs['className'] ); ?>">
    <?php if ( ! empty( $attrs['showHeading'] ) && ! empty( $attrs['headingText'] ) ) : ?>
    <h2 class="wsu-card-wrapper__title">
        <?php if ( ! empty( $attrs['linkHeading'] ) && ! empty( $attrs['buttonLink'] ) ) : ?><a href="<?php echo esc_url( $attrs['buttonLink'] ); ?>"><?php endif; ?>
            <?php echo wp_kses_post( $attrs['headingText'] ); ?>
        <?php if ( ! empty( $attrs['linkHeading'] ) && ! empty( $attrs['buttonLink'] ) ) : ?></a><?php endif; ?>
    </h2>
    <?php endif; ?>
    <?php echo wp_kses_post( $content ); ?>
    <?php if ( ! empty( $attrs['showButton'] ) && ! empty( $attrs['buttonLink'] ) && ! empty( $attrs['buttonText'] ) ) : ?>
    <div class="wsu-card-wrapper__footer">
        <a class="wsu-button" href="<?php echo esc_url( $attrs['buttonLink'] ); ?>"><?php echo wp_kses_post( $attrs['buttonText'] ); ?></a>
    </div>
    <?php endif; ?>
</div>