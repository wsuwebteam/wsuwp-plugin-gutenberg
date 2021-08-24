const { __ } = wp.i18n;

const { InnerBlocks } = wp.blockEditor;

const {
	InspectorControls,
	BlockControls,
	useBlockProps,
	PanelColorSettings,
	getColorObjectByColorValue
} = wp.blockEditor;

const {
	PanelBody,
	TextControl,
	SelectControl,
	Button,
	FocalPointPicker,
	BaseControl
} = wp.components;

const { 
	find
} = lodash;

const {
	useState
} = React;

const colors = [
	{ name: 'Crimson', color: '#A60F2D', slug: 'wsu-color--crimson' },
	{ name: 'Crimson Light', color: '#CA1237', slug: 'wsu-color--crimson-light' },
	{ name: 'Crimson Accent', color: '#FAE6EA', slug: 'wsu-color--crimson-accent' },	
	{ name: 'Gray 0', color: '#f7f7f7', slug: 'wsu-color--gray-0' },
	{ name: 'Gray 5', color: '#f2f2f2', slug: 'wsu-color--gray-5' },
	{ name: 'Gray 90', color: '#1a1a1a', slug: 'wsu-color--gray-90' },
	{ name: 'Gray 100', color: '#080808', slug: 'wsu-color--gray-100' },	
];	

const Edit = ( {className, isSelected, attributes, setAttributes } ) => {

	const [backgroundColor, setBackgroundColor] = useState(find(colors, { slug: attributes.background_color })?.color);

	const [blockProps, setBlockProps] = useState(useBlockProps( {
        className: 'wsu-column',
        style: {
			backgroundColor: backgroundColor
		},
    }));

	const updateColor = (colorValue) => {
		const colorObject = getColorObjectByColorValue(colors, colorValue);
		setBackgroundColor(colorValue);
		setBlockProps( (prevState) => ({
			...prevState,
			style: {
				...prevState?.style,
				backgroundColor: colorValue
			}
		}));
		setAttributes( { background_color: colorObject?.slug });
	}

    return (
		<>
			<InspectorControls>
				<PanelColorSettings
					title={ 'Color Settings'  }
					colors={ colors }
					colorSettings={ [
						{
							value: backgroundColor,
							onChange: updateColor,
							label: 'Background Color',
						}
					] }
					disableCustomGradients={ true }
					disableCustomColors={ true }
				>
				</PanelColorSettings>
			</InspectorControls>

			<div { ...blockProps }  >
				<InnerBlocks
					templateLock={ false }
				/>
			</div>
		</>
    )

	/*{ 
		if ( ! attributes.layout ) {

			return (
				<div className="wsu-c-columns-editor__wrapper">
					<div className="wsu-c-columns-editor__title">Select Column Layout</div>
					<ul className="wsu-c-columns-editor__options">
					{ columnFormats.map( ( layout ) => LayoutOption( layout, attributes, setAttributes ) ) }
					</ul>
				</div>
			)

		} else {
			return (
				<>
					{
						<InspectorControls>
							<DecoratorControl 
								decorators={attributes.decorators}
								onChange={ ( decoratorArray ) => { setAttributes( { decorators:decoratorArray } ) } }
								/>
							<PanelBody title="Style" initialOpen={false}>
								<SelectControl
									label="Background Color"
									value={attributes.backgroundColor}
									onChange={ (backgroundColor) => setAttributes( { backgroundColor } ) }
									options={[
										{ label: 'Default', value: 'default' },
										{ label: 'White', value: 'white' },
										{ label: 'Gray 5%', value: 'gray-5' },
										{ label: 'Gray 10%', value: 'gray-10' },
									]}
								/>
							</PanelBody>

							<SpacingPanelVertical attributes={attributes} setAttributes={setAttributes} />
						</InspectorControls>
					}
					<div className={'wsu-c-column__wrapper wsu-u-no-js wsu-c-columns--' + attributes.layout }  >
						<InnerBlocks
							template={ getColumnsTemplate( attributes ) }
							templateLock={ "insert" }
							allowedBlocks={ ['wsuwp/column'] }
						/>
					</div>
				</>
			)
		}
	}*/

}

export default Edit;