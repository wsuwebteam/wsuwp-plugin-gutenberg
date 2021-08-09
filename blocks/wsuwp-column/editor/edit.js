const { __ } = wp.i18n;

const { InnerBlocks } = wp.blockEditor;

const {
	InspectorControls,
	BlockControls,
	useBlockProps
} = wp.blockEditor;

const {
	PanelBody,
	TextControl,
	SelectControl,
	Button,
	FocalPointPicker,
	BaseControl
} = wp.components;



const Edit = ( {className, isSelected, attributes, setAttributes } ) => {

	const blockProps = useBlockProps( {
        className: 'wsu-column',
        style: {},
    } );

    return (

		<div { ...blockProps }  >
			<InnerBlocks
				templateLock={ false }
			/>
		</div>
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