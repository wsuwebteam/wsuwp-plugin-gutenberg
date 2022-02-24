<ul class="<?php echo esc_attr( $attrs['className']); ?>">
	<?php foreach( $news_items as $news_item ) : ?>
		<li>
			<a href="<?php echo wp_kses_post( $news_item['link'] ); ?>"><?php echo wp_kses_post( $news_item['title'] ); ?></a> 
			<?php if ( empty( $attrs['hideCaption'] ) && ! empty( $news_item['caption'] ) ) : ?>
				<?php echo wp_kses_post( wp_strip_all_tags( $news_item['caption'] ) ); ?>
			<?php endif; ?>
			<?php if ( empty( $attrs['hideDate'] ) && ! empty( $news_item['date'] ) ) : ?>
				<div class="wsu-meta-date"><time><?php echo wp_kses_post( $news_item['date'] ); ?></time></div>
			<?php endif; ?>
		</li>
	<?php endforeach; ?>
</ul>
