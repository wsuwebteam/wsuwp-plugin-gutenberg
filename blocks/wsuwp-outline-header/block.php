<?php namespace WSUWP\Plugin\Gutenberg;

class Block_WSUWP_Outline_Header extends Block {

	protected static $block_name    = 'wsuwp/outline-header';
	protected static $default_attrs = array(
		'className'   => 'wsu-decorator',
		'before'      => '',
		'outline'   => '',
		'after'     => '',
	);

	protected static $chars = array(
		'a' => '<svg width="65" height="82" viewBox="0 0 55 82"><text x="0" y="63" class="wsu-header__ouline-text" alignment-baseline="top">A</text></svg>',
		'b' => '<svg width="62" height="82" viewBox="0 0 62 82"><text x="0" y="63" class="wsu-header__ouline-text" alignment-baseline="top">B</text></svg>',
		'c' => '<svg width="55" height="82" viewBox="0 0 50 82"><text x="0" y="63" class="wsu-header__ouline-text" alignment-baseline="top">C</text></svg>',
		'd' => '<svg width="70" height="82" viewBox="0 0 62 82"><text x="0" y="63" class="wsu-header__ouline-text" alignment-baseline="top">D</text></svg>',
		'e' => '<svg width="50" height="82" viewBox="0 0 50 82"><text x="0" y="63" class="wsu-header__ouline-text" alignment-baseline="top">E</text></svg>',
		'f' => '<svg width="70" height="82" viewBox="0 0 62 82"><text x="0" y="63" class="wsu-header__ouline-text" alignment-baseline="top">F</text></svg>',
		'g' => '<svg width="70" height="82" viewBox="0 0 62 82"><text x="0" y="63" class="wsu-header__ouline-text" alignment-baseline="top">G</text></svg>',
		'h' => '<svg width="70" height="82" viewBox="0 0 62 82"><text x="0" y="63" class="wsu-header__ouline-text" alignment-baseline="top">H</text></svg>',
		'i' => '<svg width="35" height="82" viewBox="0 0 25 82"><text x="0" y="63" class="wsu-header__ouline-text" alignment-baseline="top">I</text></svg>',
		'j' => '<svg width="70" height="82" viewBox="0 0 62 82"><text x="0" y="63" class="wsu-header__ouline-text" alignment-baseline="top">J</text></svg>',
		'k' => '<svg width="70" height="82" viewBox="0 0 62 82"><text x="0" y="63" class="wsu-header__ouline-text" alignment-baseline="top">K</text></svg>',
		'l' => '<svg width="70" height="82" viewBox="0 0 62 82"><text x="0" y="63" class="wsu-header__ouline-text" alignment-baseline="top">L</text></svg>',
		'm' => '<svg width="70" height="82" viewBox="0 0 62 82"><text x="0" y="63" class="wsu-header__ouline-text" alignment-baseline="top">M</text></svg>',
		'n' => '<svg width="70" height="82" viewBox="0 0 62 82"><text x="0" y="63" class="wsu-header__ouline-text" alignment-baseline="top">N</text></svg>',
		'o' => '<svg width="65" height="82" viewBox="0 0 50 82"><text x="0" y="63" class="wsu-header__ouline-text" alignment-baseline="top">O</text></svg>',
		'p' => '<svg width="55" height="82" viewBox="0 0 50 82"><text x="0" y="63" class="wsu-header__ouline-text" alignment-baseline="top">P</text></svg>',
		'q' => '<svg width="70" height="82" viewBox="0 0 62 82"><text x="0" y="63" class="wsu-header__ouline-text" alignment-baseline="top">Q</text></svg>',
		'r' => '<svg width="70" height="82" viewBox="0 0 62 82"><text x="0" y="63" class="wsu-header__ouline-text" alignment-baseline="top">R</text></svg>',
		's' => '<svg width="55" height="82" viewBox="0 0 50 82"><text x="0" y="63" class="wsu-header__ouline-text" alignment-baseline="top">S</text></svg>',
		't' => '<svg width="50" height="82" viewBox="0 0 40 82" style="margin-left:-5px"><text x="0" y="63" class="wsu-header__ouline-text" alignment-baseline="top">T</text></svg>',
		'u' => '<svg width="52" height="82" viewBox="0 0 52 82"><text x="0" y="63" class="wsu-header__ouline-text" alignment-baseline="top">U</text></svg>',
		'v' => '<svg width="60" height="82" viewBox="0 0 60 82"><text x="0" y="63" class="wsu-header__ouline-text" alignment-baseline="top">V</text></svg>',
		'w' => '<svg width="70" height="82" viewBox="0 0 62 82"><text x="0" y="63" class="wsu-header__ouline-text" alignment-baseline="top">W</text></svg>',
		'x' => '<svg width="60" height="82" viewBox="0 0 60 82"><text x="0" y="63" class="wsu-header__ouline-text" alignment-baseline="top">X</text></svg>',
		'y' => '<svg width="60" height="82" viewBox="0 0 60 82"><text x="0" y="63" class="wsu-header__ouline-text" alignment-baseline="top">Y</text></svg>',
		'z' => '<svg width="60" height="82" viewBox="0 0 60 82"><text x="0" y="63" class="wsu-header__ouline-text" alignment-baseline="top">Z</text></svg>',
		'\'' => '<svg width="60" height="82" viewBox="0 0 60 82"><text x="0" y="63" class="wsu-header__ouline-text" alignment-baseline="top">\'</text></svg>',
		'-' => '<svg width="60" height="82" viewBox="0 0 60 82"><text x="0" y="63" class="wsu-header__ouline-text" alignment-baseline="top">-</text></svg>',
	);


	public static function render( $attrs, $content = '' ) {

		$outlines = [];

		$outline_sets = explode( ' ', $attrs['outline'] );
		
		foreach ( $outline_sets as $index => $outline_set ) {

			$outlines[ $index ] = '';

			$outline_chars = str_split( $outline_set );

			foreach ( $outline_chars as $outline_char ) {

				$outline_char = strtolower( $outline_char );

				if ( array_key_exists( $outline_char, self::$chars ) ) {

					$outlines[ $index ] .= self::$chars[ $outline_char ];

				}

			}

		}

		ob_start();

		include __DIR__ . '/template.php';

		return ob_get_clean();

	}

}