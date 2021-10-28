
import { ColorClassNameSelector, SpacingClassNameSelector } from '../../../assets/src/js/partials/block-controls/blockControls';
import { addBlockClassName, hasBlockClassName, removeBlockClassName } from '../../../assets/src/js/partials/block-utilities/blockUtilities';
import { useEffect, useState } from '@wordpress/element';
import { 
    PanelInsertPost, 
    PanelDisplayOptions, 
    PanelFeedPosts, 
    PanelGeneralOptions 
} from "../../../assets/src/js/partials/block-panels/blockPanels";

import { 
    PostTypeSelectControl,
    TaxonomyTypeSelectControl,
    TaxonomyTermSelectControl,
    CountControl,
    OffsetControl,
    HostControl,
    RequireImageControl,
    RequireFirstImageControl,
    HeadingTagControl,
} from "../../../assets/src/js/partials/block-controls/blockControls";

const {
	useBlockProps,
	RichText,
	MediaUpload,
	MediaUploadCheck,
	InspectorControls,
	URLInput,
    InnerBlocks,
} = wp.blockEditor;

import { SearchControl, TextControl, SelectControl, ToggleControl } from '@wordpress/components';

const DEFAULT_SPACING = {
	spaceBefore: 'none',
	spaceAfter: 'none',
	spaceTop: 'none',
	spaceBottom: 'none',
};

const Edit = ( props ) => {
	const blockProps = useBlockProps( { 
        className: 'wsu-accordion', 
        style: {}, 
    } );

    let {
        attributes,
        setAttributes,
    } = props;


    const addSizeClassName = ( value ) => {

        let blockClasses = attributes.className ?? '';

        if ( value ) {
            
            setAttributes( { className: addBlockClassName( blockClasses, 'wsu-accordion--size-', 'small' ) } );

        } else {

            setAttributes( { className: removeBlockClassName( blockClasses, 'wsu-accordion--size' ) } );

        }

    }


    return (
		<>
			<InspectorControls>
                <PanelDisplayOptions isOpen={true} >
                    <HeadingTagControl { ...props } />
                    <ToggleControl
                        label="Reduce Size"
                        checked={ hasBlockClassName( ( attributes.className ?? '' ), 'wsu-accordion--size-small'  ) }
                        onChange={ (value) => addSizeClassName( value ) }
                        />
                </PanelDisplayOptions>
			</InspectorControls>
            <div  { ...blockProps }>
                <h2 className="wsu-accordion__title">
                    <RichText
                        className="wsu-accordion__title-button wsu-accordion--toggle"
                        tagName="div" // The tag here is the element output and editable in the admin
                        value={ attributes.title } // Any existing content, either from the database or an attribute default
                        allowedFormats={ [] } // Allow the content to be made bold or italic, but do not allow other formatting options
                        onChange={ ( title ) => setAttributes( { title } ) } // Store updated content as a block attribute
                        placeholder="Add Accordion Title Text..." // Display this text before any content has been added by the user
                    />
                </h2>
                <div className="wsu-accordion__content">
                    <div className="wsu-accordion__content-inner">
                        <InnerBlocks
                            templateLock={ false }
                        />
                    </div>
                </div>
            </div>
		</>
    )
}

export default Edit;