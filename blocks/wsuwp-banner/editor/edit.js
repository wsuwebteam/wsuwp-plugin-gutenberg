const { __ } = wp.i18n;

const {
	InnerBlocks,
	InspectorControls,
	useBlockProps,
	MediaUpload,
	MediaUploadCheck,
} = wp.blockEditor;

const {
	SelectControl,
	TextControl,
	ToggleControl,
	FocalPointPicker,
	BaseControl,
	Button,
} = wp.components;

import { 
	ColorClassControl,
	SpacingClassNameSelector,
} from "../../../assets/src/js/partials/block-controls/blockControls";

import { 
    PanelDisplayOptions,
	PanelColorOptions,
	PanelGeneralOptions,
	PanelStyleOptions,
} from "../../../assets/src/js/partials/block-panels/blockPanels";

import {
    hasBlockClassName,
    addBlockClassName,
    setBlockClassNameBool,
	getBlockClassNameValue,
	setBlockClassName,
} from "../../../assets/src/js/partials/block-utilities/blockUtilities";


const Edit = ( props ) => {

	let {
		attributes, 
		setAttributes 
	} = props;

	const blockProps = useBlockProps( {
        className: 'wsu-callout',
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

	const bannerStyles = [
		{
			icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 109.71 52.59"><rect width="109.71" height="52.59" style={{ fill: '#6d6e71'}} /></svg>,
			label: 'Default',
			value: '',
		},
		{
			icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 60"><rect width="124" height="60" style={{ fill: '#6d6e71' }} /><rect x="9.37" y="7.94" width="105.27" height="44.12" style={{ fill:'#6d6e71',stroke:'#fff',strokeMiterlimit:10,strokeWidth:'2px' }} /></svg>,
			label: 'Framed',
			value: 'framed',
		},
	]


    return (
		<>
		<InspectorControls>
			<PanelGeneralOptions>
				<ToggleControl
					label="Full Width Background"
					checked={ hasBlockClassName( attributes, 'wsu-width--full') }
					onChange={ ( fullWidth ) => { setBlockClassNameBool( attributes, setAttributes, 'wsu-width--full', fullWidth ) } }
					/>
				{ attributes.imageSrc &&
					<BaseControl
						label="Focal Point Picker"
						help="Select where you would like the background to resize around."
					>
						<FocalPointPicker
							url={attributes.imageSrc}
							dimensions={attributes.imageDimensions}
							value={attributes.imageFocalPoint}
							onChange={(focalPoint) => setAttributes({ imageFocalPoint: focalPoint })}
						/>
					</BaseControl>
				}

				<MediaUploadCheck>
					<MediaUpload
						onSelect={(media) => setAttributes({ imageId: media.id, imageSrc: media.url }) }
						// allowedTypes={ALLOWED_MEDIA_TYPES}
						// value={mediaId}
						render={({ open }) => (
							<BaseControl label="Replace Background Image">
								<Button isLink onClick={open}>Open Media Library</Button>
							</BaseControl>
						)}
					/>
				</MediaUploadCheck>
			</PanelGeneralOptions>
			<PanelDisplayOptions>
				<SelectControl
					label="Height"
					value={ getBlockClassNameValue( attributes, 'wsu-page-banner--size-' ) }
					options={ [
						{ label: 'xSmall', value: 'xsmall' },
						{ label: 'Small', value: 'small' },
						{ label: 'Medium', value: '' },
						{ label: 'Large', value: 'large' },
						{ label: 'xLarge', value: 'xlarge' },
						{ label: 'xxLarge', value: 'xxlarge' },
						{ label: 'Full', value: 'full' },
					] }
					onChange={ ( size ) => setBlockClassName( attributes, setAttributes, 'wsu-page-banner--size-', size ) }
				/>
			</PanelDisplayOptions>
            <PanelStyleOptions 
				{...props} 
				styles={bannerStyles}
				prefix="wsu-page-banner--style-"  
				></PanelStyleOptions>
			<SpacingClassNameSelector
					title="Space Settings"
					spaceSettings={[
						{
							label: 'Outside Spacing (Margin)',
							properties: [
								{
									label: 'Top',
									prefix: 'wsu-spacing-before--',                                        
									default: 'default',
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
					]}
					{...props}>					
				</SpacingClassNameSelector>
		</InspectorControls>
		<div { ...blockProps }  >
			Page Banner
		</div>
		</>
    )

}

export default Edit;