<div class="<?php echo esc_attr( $attrs['className'] ); ?>">
    <div class="wsu-overlap__container">
        <div class="wsu-overlap__column<?php if ( ! empty( $attrs['overlap'] ) ) : ?> wsu-overlap--overlap-<?php echo esc_attr( $attrs['overlap'] ); ?><?php endif; ?>">
            <div class="wsu-overlap__column-inner">
                <div class="wsu-overlap-spotlight__image  <?php echo esc_attr( $attrs['imageClasses'] ); ?>">
                    <div class="wsu-image-frame <?php if ( ! empty( $attrs['imageRatio'] ) && 'auto' !== $attrs['imageRatio'] ) : ?>wsu-image--ratio-<?php echo esc_attr( $attrs['imageRatio'] ); ?><?php endif; ?>">
                        <img src="<?php echo esc_attr( $attrs['imageSrc'] ); ?>"
                        srcset="<?php echo esc_attr( $attrs['imageSrcSet'] ); ?>"
                        sizes="<?php echo esc_attr( $attrs['imageSizes'] ); ?>"
                        alt="<?php echo esc_attr( $attrs['imageAlt'] ); ?>"
                        style="object-position: <?php echo esc_attr( $attrs['imageFocalPointX'] ); ?> <?php echo esc_attr( $attrs['imageFocalPointY'] ); ?>"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div class="wsu-overlap__column wsu-overlap--surface-column<?php if ( ! empty( $attrs['overlap'] ) ) : ?> wsu-overlap--overlap-<?php echo esc_attr( $attrs['overlap'] ); ?><?php endif; ?>">
            <div class="wsu-overlap__column-inner">
                <div class="wsu-overlap-spotlight__caption <?php echo esc_attr( $attrs['captionClasses'] ); ?>">
                    <?php echo $content ?>
                </div>
            </div>
        </div>
    </div>
</div>