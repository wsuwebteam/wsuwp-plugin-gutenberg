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
    DisplayFieldControl,
} from "../../../assets/src/js/partials/block-controls/blockControls";

import { 
    PanelDisplayOptions,
	PanelColorOptions,
} from "../../../assets/src/js/partials/block-panels/blockPanels";

import {
    hasBlockClassName,
    addBlockClassName,
    setBlockClassNameBool,
} from "../../../assets/src/js/partials/block-utilities/blockUtilities";

const { MediaPlaceholder, MediaUpload } = wp.editor;


const Edit = ( props ) => {

	let {
		attributes, 
		setAttributes 
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
                    
            </PanelDisplayOptions>
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
		</InspectorControls>
		<div { ...blockProps }  >
            { attributes.showImage && <ImageFrameControl { ...props } /> }
            <div className="wsu-card__content">
                { attributes.showHeading && <RichText
                    tagName="h2" // The tag here is the element output and editable in the admin
                    value={ attributes.title } // Any existing content, either from the database or an attribute default
                    className="wsu-title"
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

export default Edit;