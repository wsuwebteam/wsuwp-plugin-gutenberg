<article class="wsu-card wsu-card--news wsu-card--id-<?php echo esc_attr( $post['id'] );?> <?php echo esc_attr( $attrs['cardClassName'] );?>">
	<?php if ( ! empty( $attrs['allowVideo'] ) && ! empty( $post['thumbnailVideo'] ) ) : ?>
	<div class="wsu-card__video-wrapper" <?php if ( empty( $attrs['hideImage'] ) && ! empty( $post['imageSrc'] ) ) : ?> style="background-image:url(<?php echo esc_attr( $post['imageSrc'] ); ?>)"<?php endif; ?>>
		<iframe class="wsu-featured-video wsu-featured-video--vimeo" src="https://player.vimeo.com/video/<?php echo esc_attr( $post['thumbnailVideo'] ); ?>?background=1" width="100%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen="" title="WSU" style="aspect-ratio: 16 / 9; max-width: 100%;"></iframe>
	</div>
	<?php elseif ( empty( $attrs['hideImage'] ) && ! empty( $post['imageSrc'] ) ) : ?>
	<div class="wsu-image-frame wsu-image-frame--fixed-ratio">
		<?php if ( empty( $attrs['hideLink'] ) && ! empty( $post['link'] ) ) : ?><a href="<?php echo esc_url( $post['link'] ); ?>" tabindex="-1" aria-hidden="true"><?php endif; ?>
			<img src="<?php echo esc_attr( $post['imageSrc'] );?>"
				srcset="<?php echo esc_attr( $post['imageSrcSet'] ); ?>"
				sizes="<?php echo esc_attr( $post['imageSizes'] );?>"
				alt="<?php echo esc_attr( $post['imageAlt'] );?>" />
		<?php if ( empty( $attrs['hideLink'] ) && ! empty( $post['link'] ) ) : ?></a><?php endif; ?>
	</div>
	<?php endif; ?>
	<div class="wsu-card__content">
		<?php if ( ! empty( $post['eyebrow_heading'] ) ) : ?><div class="wsu-eyebrow-header"><?php echo wp_kses_post( $post['eyebrow_heading'] ); ?></div><?php endif; ?>
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
		<?php if ( ! empty( $attrs['showAuthor'] ) ) : ?>
		<div class="wsu-card-footer">
			<address class="wsu-meta-byline">
				<span class="wsu-meta-byline__text">
					By
				</span>
				<span class="wsu-meta-byline__name">
				<?php echo wp_kses_post( $post['author'] ); ?></span>
			</address>
		</div>
		<?php endif; ?>
	</div>
	<?php if ( empty( $attrs['hideLink'] ) && ! empty( $attrs['linkCard'] ) ) : ?><a class='wsu-card__link' href="<?php echo esc_url( $post['link'] ); ?>" aria-hidden="true" tabindex="-1" ></a><?php endif; ?>
</article>