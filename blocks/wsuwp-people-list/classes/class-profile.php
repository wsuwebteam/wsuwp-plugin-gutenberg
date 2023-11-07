<?php namespace WSUWP\Plugin\Gutenberg;

class Profile {

	protected $response   = '';
	protected $name       = '';
	protected $first_name = '';
	protected $last_name  = '';
	protected $titles     = array();
	protected $email      = '';
	protected $phone      = '';
	protected $office     = '';
	protected $address    = '';
	protected $degree     = '';
	protected $website    = '';
	protected $google_scholar_id    = '';
	protected $cv              = '';
	protected $bio             = '';
	protected $photo           = '';


	public function get( $property, $default = '' ) {

		switch ( $property ) {
			case 'response':
				return $this->response;
			case 'name':
				return $this->name;
			case 'first_name':
				return $this->first_name;
			case 'last_name':
				return $this->last_name;
			case 'titles':
				return $this->titles;
			case 'email':
				return $this->email;
			case 'phone':
				return $this->phone;
			case 'office':
				return $this->office;
			case 'address':
				return $this->address;
			case 'degrees':
				return $this->degrees;
			case 'website':
				return $this->website;
			case 'cv':
				return $this->cv;
			case 'google_scholar_id':
				return $this->google_scholar_id;
			case 'bio':
				return $this->bio;
			case 'photo':
				return $this->photo;
			default:
				return $default;
		}
	}


	public function has( $property ) {

		return ! empty( $this->get( $property, false ) );

	}


	public function __construct( $nid = false, $source = false ) {

		if ( $nid ) {

			$this->set_remote_profile( $nid, $source );

		}

	}


	public function set_remote_profile( $nid, $source = false ) {

		if ( ! empty( $source ) ) {

			$source_array = explode( '?', $source );

			$request_url = $source_array[0] . '?nid=' . $nid;

		} else {

			$request_url = 'https://people.wsu.edu/wp-json/peopleapi/v1/people?nid=' . $nid;

		}

		$response = wp_remote_request( $request_url );

		if ( $response ) {

			$body = json_decode( wp_remote_retrieve_body( $response ), true );

			$profile = ( is_array( $body ) && ! empty( $body[0] ) ) ? $body[0] : false;

			$this->response = $profile;

			if ( $profile ) {

				$this->name       = ( ! empty( $profile['name'] ) ) ? $profile['name'] : '';
				$this->first_name = ( ! empty( $profile['first_name'] ) ) ? $profile['first_name'] : '';
				$this->last_name  = ( ! empty( $profile['last_name'] ) ) ? $profile['last_name'] : '';
				$this->titles     = ( ! empty( $profile['title'] ) ) ? $profile['title'] : array();
				$this->email      = ( ! empty( $profile['email'] ) ) ? $profile['email'] : '';
				$this->phone      = ( ! empty( $profile['phone'] ) ) ? $profile['phone'] : '';
				$this->office     = ( ! empty( $profile['office'] ) ) ? $profile['office'] : '';
				$this->address    = ( ! empty( $profile['address'] ) ) ? $profile['address'] : '';
				$this->degrees     = ( ! empty( $profile['degree'] ) ) ? $profile['degree'] : array();
				$this->website    = ( ! empty( $profile['website'] ) ) ? $profile['website'] : '';
				$this->bio        = ( ! empty( $profile['bio'] ) ) ? $profile['bio'] : '';
				$this->photo      = ( ! empty( $profile['photo'] ) ) ? $profile['photo'] : '';
				$this->google_scholar_id = ( ! empty( $profile['google_scholar_id'] ) ) ? $profile['google_scholar_id'] : '';
				$this->cv              = ( ! empty( $profile['cv'] ) ) ? $profile['cv'] : '';

			}
		}
	}

}
