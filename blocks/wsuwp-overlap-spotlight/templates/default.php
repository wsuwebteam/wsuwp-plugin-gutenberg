<div class="<?php echo esc_attr( $attrs['className'] ); ?>">
    <div class="wsu-overlap__container">
        <div class="wsu-overlap__column">
            <div class="wsu-overlap__column-inner">
                <div class="wsu-overlap-spotlight__image  <?php echo esc_attr( $attrs['imageClasses'] ); ?>">
                    <div class="wsu-image-frame">
                        <img src="<?php echo esc_attr( $attrs['imageSrc'] ); ?>"
                        srcset="<?php echo esc_attr( $attrs['imageSrcSet'] ); ?>"
                        sizes="<?php echo esc_attr( $attrs['imageSizes'] ); ?>"
                        alt="<?php echo esc_attr( $attrs['imageAlt'] ); ?>"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div class="wsu-overlap__column wsu-overlap--surface-column">
            <div class="wsu-overlap__column-inner">
                <div class="wsu-overlap-spotlight__caption <?php echo esc_attr( $attrs['captionClasses'] ); ?>">
                    <?php echo $content ?>
                </div>
            </div>
        </div>
    </div>
</div>