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
			<PanelColorOptions>
			</PanelColorOptions>
		</InspectorControls>
        <InspectorAdvancedControls>
            <DisplayFieldControl { ...props }
                        fieldOptions={ [
                            {label:'Image', value:'image' },
                            {label:'Title', value:'title' },
                            {label:'Caption', value:'caption' },
                            {label:'Inner Blocks', value:'blocks'}
                        ] }
                        />
        </InspectorAdvancedControls>
		<div { ...blockProps }  >
            { displayFields.includes('image') && <ImageFrameControl { ...props } /> }
            <div className="wsu-card__content">
                { displayFields.includes('title') && <RichText
                    tagName="h2" // The tag here is the element output and editable in the admin
                    value={ attributes.title } // Any existing content, either from the database or an attribute default
                    className="wsu-title"
                    allowedFormats={ [] } // Allow the content to be made bold or italic, but do not allow other formatting options
                    onChange={ ( title ) => setAttributes( { title } ) } // Store updated content as a block attribute
                    placeholder={ 'Add a Card Heading...' } // Display this text before any content has been added by the user
                /> }
                { displayFields.includes('caption') && <RichText
                    tagName="div" // The tag here is the element output and editable in the admin
                    value={ attributes.caption } // Any existing content, either from the database or an attribute default
                    className="wsu-caption"
                    //allowedFormats={ [] } // Allow the content to be made bold or italic, but do not allow other formatting options
                    onChange={ ( caption ) => setAttributes( { caption } ) } // Store updated content as a block attribute
                    placeholder={ 'Add a card caption...' } // Display this text before any content has been added by the user
                /> }
                { displayFields.includes('blocks') && <InnerBlocks
				    templateLock={ false }
			    /> }
            </div>
		</div>
		</>
    )

}

export default Edit;