<section class="<?php echo esc_attr( $attrs['className'] ); ?>">
    <?php if ( false !== strpos( $attrs['className'], 'wsu-width--full' ) ) : ?><div class="wsu-section__inner wsu-width--content"><?php endif; ?>
    <?php echo $content; ?>
    <?php if ( false !== strpos( $attrs['className'], 'wsu-width--full' ) ) : ?></div><?php endif; ?>
</section>