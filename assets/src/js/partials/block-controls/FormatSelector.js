const OptionItem = ( option, onSelect ) => {

    console.log( option );

    return (
		<li 
			className="wsu-gutenberg-format-selector__option"
			onClick={ ( event ) => { onSelect( option.slug ) } }
			>
			{option.icon}
			<span className="wsu-gutenberg-format-selector__option__label">{option.label}</span>
		</li>
	);

}


const FormatSelector = ( { options, onSelect, title } ) => {

    if ( options ) {

        console.log( options ); 

		return (
			<div className="wsu-gutenberg-format-selector">
				<div className="wsu-gutenberg-format-selector__title">{title}</div>
				<ul className="wsu-gutenberg-format-selector__options">
				{ options.map( ( option ) => OptionItem( option, onSelect ) ) }
				</ul>
			</div>
		)

	} else {

		return '';

	}

}

export default FormatSelector;
