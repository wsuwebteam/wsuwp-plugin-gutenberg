<div class="wsu-video-frame wsu-video-frame--position-fill">
	<iframe class="wsu-video-frame__video-background" src="https://player.vimeo.com/video/<?php echo esc_attr( $attrs['videoId'] ); ?>?background=1" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen title="<?php echo esc_attr( $attrs['videoTitle'] ); ?>"></iframe>
	<button class="wsu-button-pause-background wsu-video-frame--action-pause-background" aria-label="Pause Animation"></button>
	<div class="wsu-visibility-hidden">
		<?php echo wp_kses_post( $attrs['videoDescription'] ); ?>
	</div>
</div>
