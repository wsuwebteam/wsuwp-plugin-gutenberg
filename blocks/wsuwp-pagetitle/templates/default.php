<header class="wsu-article-header<?php if ( ! empty( $attrs['className'] ) ) : ?> <?php echo esc_attr( $attrs['className'] ); ?><?php endif; ?> ">
	<h1 class="wsu-article-header__title">
		<?php if ( ! empty( $attrs['title'] ) ) {
				echo wp_kses_post( $attrs['title'] );
			} else {
				the_title();
			}?>
	</h1>
	<?php if ( apply_filters( 'wsu_wds_template_option', false, 'show_publish_date', 'single' ) ) : ?>
		<div class="wsu-meta-date"><time><?php echo esc_html( get_the_date() ); ?></time></div>
	<?php endif; ?>
	<?php if ( apply_filters( 'wsu_wds_template_option', false, 'show_share', 'single' ) ) : ?>
	<ul class="wsu-social-icons">
		<li class="wsu-social-icons__twitter">
			<a href="https://twitter.com/intent/tweet?text=<?php echo esc_url( $attrs['shareTitle'] ); ?>&url=<?php echo esc_url( $attrs['shareLink'] ); ?>" title="Share on Twitter"></a>
		</li>
		<li class="wsu-social-icons__faceblook">
			<a href="https://www.facebook.com/sharer/sharer.php?u=<?php echo esc_url( $attrs['shareLink'] ); ?>" title="Share on FaceBook"></a>
		</li>
		<li class="wsu-social-icons__linkedin">
			<a href="https://www.linkedin.com/shareArticle?mini=true&url=<?php echo esc_url( $attrs['shareLink'] ); ?>" title="Share on Linkedin"></a>
		</li>
		<li class="wsu-social-icons__email">
			<a href="mailto:?subject=Shared%20With%20You:%20<?php echo esc_attr( urldecode( $attrs['shareTitle'] ) ); ?>&body=<?php echo esc_url( $attrs['shareLink'] ); ?>" title="share with email"></a>
		</li>
	</ul>
	<?php endif; ?>
</header>
