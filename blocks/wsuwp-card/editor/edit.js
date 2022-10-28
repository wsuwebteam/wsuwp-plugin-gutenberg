const { __ } = wp.i18n;

const {
	InnerBlocks,
	InspectorControls,
    InspectorAdvancedControls,
	useBlockProps,
    RichText,
    URLInputButton,
} = wp.blockEditor;

const {
    SelectControl,
	TextControl,
	ToggleControl,
    PanelBody,
} = wp.components;

import { 
	ColorClassControl,
	SpacingClassNameSelector,
    ImageFrameControl,
    HeadingTagControl,
	FontSizeControl,
    DisplayFieldControl,
	DeveloperToolsControl,
} from "../../../assets/src/js/partials/block-controls/blockControls";

import { 
    PanelDisplayOptions,
	PanelColorOptions,
	PanelAnimate,
	PanelStyleOptions,
	PanelDeveloperTools,
} from "../../../assets/src/js/partials/block-panels/blockPanels";

import {
    hasBlockClassName,
    addBlockClassName,
    setBlockClassNameBool,
	getBlockClassNameValue,
} from "../../../assets/src/js/partials/block-utilities/blockUtilities";

const { MediaPlaceholder, MediaUpload } = wp.editor;

const cardStyles = [
	{
		icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 60"><rect x="32.2" y="2.34" width="59.6" height="31.32" fill="#373737"/><rect x="32.2" y="37.66" width="59.6" height="6.58" rx="1.96"/><rect x="32.2" y="47.01" width="59.6" height="3.91" rx="1.96"/><rect x="32.2" y="53.7" width="59.6" height="3.91" rx="1.96"/></svg>,
		label: 'Default',
		value: '',
	},
	{
		icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 60"><rect x="4.34" y="2.52" width="56.06" height="53.06" fill="#373737"/><rect x="66.07" y="11.16" width="53.59" height="6.58" rx="1.96"/><rect x="66.07" y="23.68" width="48.5" height="3.91" rx="1.96"/><rect x="66.07" y="29.93" width="48.5" height="3.91" rx="1.96"/><rect x="66.07" y="36.19" width="48.5" height="3.91" rx="1.96"/><rect x="66.07" y="42.26" width="48.5" height="3.91" rx="1.96"/></svg>,
		label: 'Horizontal 50%',
		value: 'horizontal-50',
	},
	{
		icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 60"><rect x="4.34" y="3.86" width="41.73" height="53.06" fill="#373737"/><rect x="52.68" y="11.16" width="66.98" height="6.58" rx="1.96"/><rect x="52.68" y="23.68" width="61.9" height="3.91" rx="1.96"/><rect x="52.68" y="29.93" width="61.9" height="3.91" rx="1.96"/><rect x="52.68" y="36.19" width="61.9" height="3.91" rx="1.96"/><rect x="52.68" y="42.26" width="61.9" height="3.91" rx="1.96"/></svg>,
		label: 'Horizontal 33%',
		value: 'horizontal-33',
	},
	{
		icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 60"><rect x="4.34" y="12.66" width="38.65" height="31.32" fill="#373737"/><rect x="50.26" y="14.71" width="69.4" height="6.58" rx="1.96"/><rect x="50.26" y="26.48" width="64.32" height="3.91" rx="1.96"/><rect x="50.26" y="32.74" width="64.32" height="3.91" rx="1.96"/><rect x="50.26" y="39" width="64.32" height="3.91" rx="1.96"/><rect x="50.26" y="45.06" width="64.32" height="3.91" rx="1.96"/></svg>,
		label: 'Horizontal 25%',
		value: 'horizontal-25',
	},
]




const Edit = ( props ) => {

	let {
		attributes, 
		setAttributes,
		clientId
	} = props;

	const blockProps = useBlockProps( {
        className: 'wsu-card',
        style: {},
    } );

    const backgroundColors = [
        { name: 'gray-5', color: '#f2f2f2' },
        { name: 'white', color: '#ffffff' },
        { name: 'gray-85', color: '#262626' },
    ];

	const borderColors = [
		{ name: 'default', color: '#e6e6e6' },
		{ name: 'white', color: '#ffffff' },
		{ name: 'crimson', color: '#A60F2D' },
		{ name: 'crimson-light', color: '#CA1237' },
		{ name: 'autumn', color: '#FF6727' },
		{ name: 'goldfinch', color: '#F3E700' },
		{ name: 'vineyard', color: '#AADC24' },
		{ name: 'pacificsky', color: '#5BC3F5' },
		{ name: 'midnight', color: '#002D61' },
    ];

    let displayFields = attributes.displayFields;

	if ( '2' === attributes.version ) {

		return (
			<>
				<InspectorControls>
					<PanelStyleOptions 
						{...props} 
						styles={cardStyles}
						prefix="wsu-card--style-"  
						></PanelStyleOptions> 
					<PanelColorOptions>
						<ColorClassControl
							{ ...props }
							colors={backgroundColors}
							label='Background Color'
							value='#f2f2f2'
							/>
						<ColorClassControl
							{ ...props }
							colors={borderColors}
							label='Border Color'
							value='#e6e6e6'
							prefix='wsu-border-top--color-'
							/>
					</PanelColorOptions>
					<PanelAnimate { ...props } ></PanelAnimate>
					<SpacingClassNameSelector                        
						spaceSettings={[
							{
								label: 'Margin (Outside Spacing)',
								properties: [
									{
										label: 'Top',
										prefix: 'wsu-spacing-before--',                                        
										default: 'none',
									},
									{
										label: 'Bottom',
										prefix: 'wsu-spacing-after--',
										default: 'xmedium',                                        
									},
									{
										label: 'Left',
										prefix: 'wsu-spacing-margin-left--',									
										default: 'default',
									},
									{
										label: 'Right',
										prefix: 'wsu-spacing-margin-right--',									
										default: 'default',
									}
								]
							},
							{
								label: 'Padding (Inside Spacing)',
								properties: [
									{
										label: 'Top',
										prefix: 'wsu-spacing-top--',
										default: 'default',
									},
									{
										label: 'Bottom',
										prefix: 'wsu-spacing-bottom--',
										default: 'default',									
									},
									{
										label: 'Left',
										prefix: 'wsu-spacing-padding-left--',									
										default: 'default',
									},
									{
										label: 'Right',
										prefix: 'wsu-spacing-padding-right--',									
										default: 'default',
									}
								]
							}
						]}
						{...props}>					
					</SpacingClassNameSelector>
				</InspectorControls>
				<InspectorAdvancedControls>
					<ToggleControl
						label={ 'Use Version 2' }
						checked={ ( '2' === attributes.version ) }
						onChange={ ( checked) => { 
							let cardVersion = ( checked ) ? '2' : '1';
							setAttributes( {  version: cardVersion } ) } 
						}
						help={ 'Use Version 2 of the Card.'}
					/>
				</InspectorAdvancedControls>
				<div { ...blockProps }  >
					<InnerBlocks
					template={[ [ 'wsuwp/image',{} ],[ 'core/heading',{className:'wsu-title'} ],[ 'core/paragraph',{} ] ] }
							templateLock={ false }
						/>
				</div>
			</>
		)

	} else {

		return (
			<>
			<InspectorControls>
				<PanelDisplayOptions isOpen={true} >
					<TextControl
							label="Link URL"
							value={ attributes.link }
							onChange= { ( link ) => setAttributes( { link } ) }
						/>
					<SelectControl
							label="Image Ratio (width x height)"
							value={ attributes.imageRatio }
							options={ [
								{ label: '2-5', value: '2-5' },
								{ label: '16-9', value: '16-9' },
								{ label: '6-4', value: '6-4' },
								{ label: '4-3', value: '4-3' },
								{ label: '1-1', value: '1-1' },
								{ label: '3-4', value: '3-4' },
							] } 
							onChange={ ( imageRatio ) => { setAttributes( { imageRatio } ) } }
						/>
						<HeadingTagControl { ...props } allowedTags={ ['h2','h3','h4','h5','h6','div'] } />
						<FontSizeControl 
							{...props}
							sizes={
								[
									{ label: 'Default', value: '' },
									{ label: 'Medium', value: 'medium' },
									{ label: 'xMedium', value: 'xmedium' },
									{ label: 'xxMedium', value: 'xxmedium' },
									{ label: 'Large', value: 'large' },
									{ label: 'xLarge', value: 'xlarge' },
									{ label: 'xxLarge', value: 'xxlarge' },
								]
							}
							elementClass="headingClass"
							/>
				</PanelDisplayOptions>
				<PanelStyleOptions 
					{...props} 
					styles={cardStyles}
					prefix="wsu-card--style-"  
						>
						{ getBlockClassNameValue( attributes, 'wsu-card--style-horizontal-', false ) && <ToggleControl
						label="Reverse Layout"
						checked={ getBlockClassNameValue( attributes, 'wsu-card--layout-', false ) ? true : false }
						onChange={ ( isReversed ) => setBlockClassNameBool( attributes, setAttributes, 'wsu-card--layout-reversed', isReversed ) }
						/> }
						</PanelStyleOptions> 
				<PanelBody title="Card Settings" initialOpen={false} >
					<ToggleControl
						label="Show Image"
						checked={attributes.showImage}
						onChange={ ( showImage ) => setAttributes( { showImage } ) }
						/>
					<ToggleControl
						label="Show Title"
						checked={attributes.showHeading}
						onChange={ ( showHeading ) => setAttributes( { showHeading } ) }
						/>
					<ToggleControl
						label="Show Caption"
						checked={attributes.showCaption}
						onChange={ ( showCaption ) => setAttributes( { showCaption } ) }
						/>
					<ToggleControl
						label="Custom Content"
						checked={attributes.showContent}
						onChange={ ( showContent ) => setAttributes( { showContent } ) }
						/>
				</PanelBody>
				<PanelColorOptions>
					<ColorClassControl
						{ ...props }
						colors={backgroundColors}
						label='Background Color'
						value='#f2f2f2'
						/>
					<ColorClassControl
						{ ...props }
						colors={borderColors}
						label='Border Color'
						value='#e6e6e6'
						prefix='wsu-border-top--color-'
						/>
				</PanelColorOptions>
				<SpacingClassNameSelector                        
					spaceSettings={[
						{
							label: 'Margin (Outside Spacing)',
							properties: [
								{
									label: 'Top',
									prefix: 'wsu-spacing-before--',                                        
									default: 'none',
								},
								{
									label: 'Bottom',
									prefix: 'wsu-spacing-after--',
									default: 'xmedium',                                        
								},
								{
									label: 'Left',
									prefix: 'wsu-spacing-margin-left--',									
									default: 'default',
								},
								{
									label: 'Right',
									prefix: 'wsu-spacing-margin-right--',									
									default: 'default',
								}
							]
						},
						{
							label: 'Padding (Inside Spacing)',
							properties: [
								{
									label: 'Top',
									prefix: 'wsu-spacing-top--',
									default: 'default',
								},
								{
									label: 'Bottom',
									prefix: 'wsu-spacing-bottom--',
									default: 'default',									
								},
								{
									label: 'Left',
									prefix: 'wsu-spacing-padding-left--',									
									default: 'default',
								},
								{
									label: 'Right',
									prefix: 'wsu-spacing-padding-right--',									
									default: 'default',
								}
							]
						}
					]}
					{...props}>					
				</SpacingClassNameSelector>
				{attributes.developerTools && <PanelDeveloperTools 
					{ ...props}
					maxWidth={ true }
					alignItem={ true }
					positionElement={ true } 
					>
						<ToggleControl
						label={ 'Use Version 2' }
						checked={ ( '2' === attributes.version ) }
						onChange={ ( checked) => { 
							let cardVersion = ( checked ) ? '2' : '1';
							setAttributes( {  version: cardVersion } ) } 
						}
						help={ 'Use Version 2 of the Card.'}
					/></PanelDeveloperTools>}
			</InspectorControls>
			<InspectorAdvancedControls>
					<DeveloperToolsControl { ...props } />
				</InspectorAdvancedControls>
			<div { ...blockProps }  >
				{ attributes.showImage && <ImageFrameControl { ...props } /> }
				<div className="wsu-card__content">
					{ attributes.showHeading && <RichText
						tagName="h2" // The tag here is the element output and editable in the admin
						value={ attributes.title } // Any existing content, either from the database or an attribute default
						className={`wsu-title ${attributes.headingClass}`}
						allowedFormats={ [] } // Allow the content to be made bold or italic, but do not allow other formatting options
						onChange={ ( title ) => setAttributes( { title } ) } // Store updated content as a block attribute
						placeholder={ 'Add a Card Heading...' } // Display this text before any content has been added by the user
					/> }
					{ attributes.showCaption && <RichText
						tagName="div" // The tag here is the element output and editable in the admin
						value={ attributes.caption } // Any existing content, either from the database or an attribute default
						className="wsu-caption"
						//allowedFormats={ [] } // Allow the content to be made bold or italic, but do not allow other formatting options
						onChange={ ( caption ) => setAttributes( { caption } ) } // Store updated content as a block attribute
						placeholder={ 'Add a card caption...' } // Display this text before any content has been added by the user
					/> }
					{ attributes.showContent && <InnerBlocks
						templateLock={ false }
					/> }
				</div>
			</div>
			</> 
		)
	}

}

export default Edit;