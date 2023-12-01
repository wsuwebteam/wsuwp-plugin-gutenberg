<?php namespace WSUWP\Plugin\Gutenberg;?>
<div class="wsu-profile">
	<div class="wsu-profile__photo-container">
		<img src="<?php echo esc_url( $profile->get( 'photo' ) ); ?>" />
	</div>
	<div class="wsu-profile__details-container">
		<ol class="wsu-profile__titles">
			<?php foreach ( $profile->get( 'titles', array() ) as $index => $person_title ) : ?>
			<li class="wsu-profile__title">
				<?php echo wp_kses_post( $person_title ); ?> 
			</li>
			<?php endforeach; ?>
		</ol>
		<?php if ( $profile->has( 'email' ) ) : ?><div class="wsu-profile__meta wsu-meta-email wsu-meta--icon-crimson">
			<span class="wsu-screen-reader-only">Email Address</span><a href="mailto:<?php echo esc_attr( $profile->get( 'email' ) ); ?>"><?php echo wp_kses_post( $profile->get( 'email' ) ); ?></a>
		</div><?php endif; ?>

		<?php if ( $profile->has( 'office' ) ) : ?><div class="wsu-profile__meta wsu-meta-location wsu-meta--icon-crimson">
			<span class="wsu-screen-reader-only">Location</span><?php echo wp_kses_post( $profile->get( 'office' ) ); ?>
		</div><?php endif; ?>
		<?php if ( $profile->has( 'phone' ) ) : ?><div class="wsu-profile__meta wsu-meta-phone wsu-meta--icon-crimson">
			<span class="wsu-screen-reader-only">Phone</span><a href="tel:<?php echo esc_attr( $profile->get( 'phone' ) ); ?>"><?php echo sanitize_text_field( $profile->get( 'phone' ) ); ?></a>
		</div><?php endif; ?>

		<?php if ( $profile->has( 'website' ) ) : ?><div class="wsu-profile__meta wsu-meta-website wsu-meta--icon-crimson">
			<a href="<?php echo esc_url( $profile->get( 'website' ) ); ?>">Website</a>
		</div><?php endif; ?>
		<?php if ( $profile->has( 'lab_website' ) ) : ?>
		<span class="wsu-profile__meta wsu-meta-lav wsu-meta--icon-crimson"><a href="<?php echo esc_url( $profile->get( 'lab_website' ) ); ?>"><?php echo wp_kses_post( $profile->get( 'lab_name' ) ); ?></a></span>
		<?php endif ?>
		<?php if ( $profile->has( 'cv' ) ) : ?>
		<span class="wsu-profile__meta wsu-meta-cv wsu-meta--icon-crimson"><a href="<?php echo esc_url( $profile->get( 'cv' ) ); ?>">View CV</a></span>
		<?php endif ?>
		<?php if ( $profile->has( 'google_scholar_id' ) ) : ?>
		<span class="wsu-profile__meta wsu-meta-google-scholars wsu-meta--icon-crimson"><a href="<?php echo esc_url( $profile->get( 'google_scholar_id' ) ); ?>">View Google Scholars Profile</a></span>
		<?php endif ?>
	</div>
	<?php if ( $profile->has( 'degrees' ) ) : ?><div class="wsu-profile__degrees">
		<h2 class="wsu-heading--style-marked" id="">
			Education
		</h2>
		<?php if ( is_array( $profile->get( 'degrees', array() ) ) ) : ?>
			<ul>
			<?php foreach ( $profile->get( 'degrees', array() ) as $degree ) : ?>
			<li><?php echo wp_kses_post( $degree ); ?></li>
			<?php endforeach; ?>
		</ul>
		<?php else : ?>
			<?php echo wp_kses_post( $profile->get( 'degrees', '' ) ); ?>
		<?php endif; ?>
	</div><?php endif; ?>
	<?php if ( $profile->has( 'bio' ) ) : ?><div class="wsu-profile__bio">
		<h2 class="wsu-heading--style-marked" id="">
			Biography
		</h2>
		<?php echo wp_kses_post( htmlspecialchars_decode( $profile->get( 'bio', '' ) ) ); ?>
	</div><?php endif; ?>
</div>