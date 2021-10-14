<article class="wsu-card wsu-card--news">
	<?php if ( empty( $attrs['hideImage'] ) && ! empty( $post['imageSrc'] ) ) : ?>
	<div class="wsu-image-frame wsu-image-frame--fixed-ratio">
		<?php if ( empty( $attrs['hideLink'] ) && ! empty( $post['link'] ) ) : ?><a href="<?php echo esc_url( $post['link'] ); ?>"><?php endif; ?>
			<img src="<?php echo esc_attr( $post['imageSrc'] );?>"
				srcset="<?php echo esc_attr( $post['imageSrcset'] ); ?>"
				sizes="<?php echo esc_attr( $post['imageSizes'] );?>"
				alt="<?php echo esc_attr( $post['imageAlt'] );?>" />
		<?php if ( empty( $attrs['hideLink'] ) && ! empty( $post['link'] ) ) : ?></a><?php endif; ?>
	</div>
	<?php endif; ?>
	<div class="wsu-card__content">
		<?php if ( empty( $attrs['hideTitle'] ) && ! empty( $post['title'] ) ) : ?> 
		<<?php echo esc_attr( $attrs['headingTag'] ); ?> class="wsu-title">
			<?php if ( empty( $attrs['hideLink'] ) && ! empty( $post['link'] ) ) : ?><a href="<?php echo esc_url( $post['link'] ); ?>"><?php endif; ?>
			<?php echo wp_kses_post( $post['title'] ); ?>
			<?php if ( empty( $attrs['hideLink'] ) && ! empty( $post['link'] ) ) : ?></a><?php endif; ?>
		</<?php echo esc_attr( $attrs['headingTag'] ); ?>>
		<?php endif; ?>
        <?php if ( empty( $attrs['hideDate'] ) && ! empty( $post['date'] ) ) : ?>
		<div class="wsu-meta-date">
			<time><?php echo wp_kses_post( $post['date'] ); ?></time>
		</div>
		<?php endif; ?>
		<?php if ( empty( $attrs['hideCaption'] ) && ! empty( $post['caption'] ) ) : ?>
		<div class="wsu-caption">
			<?php echo wp_kses_post( $post['caption'] ); ?>
		</div>
		<?php endif; ?>
	</div>
</article>