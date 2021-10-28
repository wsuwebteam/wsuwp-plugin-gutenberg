<div class="<?php echo esc_attr( $attrs['className'] ); ?>">
    <<?php echo esc_attr( $attrs['headingTag'] ); ?> id="unique-id-1__title" class="wsu-accordion__title">
        <button class="wsu-accordion__title-button wsu-accordion--toggle" aria-expanded="false" aria-controls="unique-id-1__content"><?php echo wp_kses_post( $attrs['title'] ); ?></button>
    </<?php echo esc_attr( $attrs['headingTag'] ); ?>>
    <div id="unique-id-1__content" class="wsu-accordion__content" aria-labelledby="unique-id-1__title">
        <div class="wsu-accordion__content-inner">
            <?php echo wp_kses_post( $content ); ?>
        </div>
    </div>
</div>