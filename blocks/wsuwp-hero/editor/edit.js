const {
	useBlockProps,
	RichText,
	MediaUpload,
	MediaUploadCheck,
	InspectorControls,
	URLInput,
} = wp.blockEditor;

const {
	Panel,
	PanelBody,
	TextControl,
	SelectControl,
	ToggleControl,
	Button,
	FocalPointPicker,
	BaseControl
} = wp.components;

import { PanelInsertPost, PanelDisplayOptions, PanelFeedPosts, PanelGeneralOptions } from "../../../assets/src/js/partials/block-panels/blockPanels";

import {
	getBlockClassName,
	addBlockClassName,
	getBlockClassNameValue,
} from '../../../assets/src/js/partials/block-utilities/blockUtilities';

const Edit = ( {className, isSelected, attributes, setAttributes } ) => {

	let blockClasses = attributes.className ?? '';

	const getOverlayClasses = () => {

		let classArray = ['wsu-overlay','wsu-pattern-after'];

		classArray.push( 'wsu-overlay--' + attributes.overlay );

		classArray.push( 'wsu-pattern--' + attributes.pattern );

		return classArray.join( ' ' );

	}

	const blockProps = useBlockProps( {
		className: 'wsu-hero  wsu-pattern--wsu-light-radial-left',
		style: {},
	} );

	return (
		<>
			<InspectorControls>
				<PanelGeneralOptions>
					<TextControl
						label="Hero Banner Link"
						value={ attributes.link ? attributes.link : '' }
						onChange= { ( link ) => setAttributes( { link } ) }
					/>
					<TextControl
						label="Button Text"
						value={ attributes.buttonText ? attributes.buttonText : '' }
						onChange= { ( buttonText ) => setAttributes( { buttonText } ) }
					/>
					<TextControl
						label="Photo Credits"
						value={ attributes.photoCredit ? attributes.photoCredit : '' }
						onChange= { ( photoCredit ) => setAttributes( { photoCredit } ) }
					/>
				</PanelGeneralOptions>
				<PanelDisplayOptions>
					<SelectControl
						label="Height"
						value={ getBlockClassNameValue( blockClasses, 'wsu-hero--size-' ) }
						options={ [
							{ label: 'Default', value: '' },
							{ label: 'xSmall', value: 'xsmall' },
							{ label: 'Small', value: 'small' },
							{ label: 'Medium', value: 'medium' },
							{ label: 'Large', value: 'large' },
							{ label: 'Full', value: 'full' },
						] }
						onChange={ ( size ) => { setAttributes( { className: addBlockClassName( blockClasses, 'wsu-hero--size-', size ) } ) } }
					/>
					<SelectControl
						label="Overlay"
						value={ attributes.overlay }
						options={ [
							{ label: 'Default', value: 'dark-left' },
							{ label: 'Lighter', value: 'light' },
							{ label: 'None', value: 'none' },
						] }
						onChange={ ( overlay ) => { setAttributes( { overlay } ) } }
					/>
					<SelectControl
						label="Pattern"
						value={ attributes.pattern }
						options={ [
							{ label: 'WSU', value: 'wsu-light-radial-left' },
							{ label: 'None', value: 'none' },
						] }
						onChange={ ( pattern ) => { setAttributes( { pattern } ) } }
					/>
				</PanelDisplayOptions>
				<Panel>
					<PanelBody title="Background" initialOpen={false}>
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
					</PanelBody>
				</Panel>
			</InspectorControls>
			<div { ...blockProps } >
				<div className="wsu-image-frame wsu-image-frame--fill">
					<img src={ attributes.imageSrc } />
				</div>
				<div className={getOverlayClasses()}></div>
				<div className="wsu-hero__content">
					<div className="wsu-hero__caption">
						<RichText
							className="wsu-eyebrow-heading"
							tagName="div" // The tag here is the element output and editable in the admin
							value={ attributes.eyebrowHeading } // Any existing content, either from the database or an attribute default
							allowedFormats={ [] } // Allow the content to be made bold or italic, but do not allow other formatting options
							onChange={ ( eyebrowHeading ) => setAttributes( { eyebrowHeading } ) } // Store updated content as a block attribute
							placeholder="Intro Text..." // Display this text before any content has been added by the user
						/>
						<RichText
							className="wsu-title"
							tagName="div" // The tag here is the element output and editable in the admin
							value={ attributes.title } // Any existing content, either from the database or an attribute default
							allowedFormats={ [] } // Allow the content to be made bold or italic, but do not allow other formatting options
							onChange={ ( title ) => setAttributes( { title } ) } // Store updated content as a block attribute
							placeholder="Add Hero Banner Text..." // Display this text before any content has been added by the user
						/>
						<RichText
							className="wsu-caption"
							tagName="div" // The tag here is the element output and editable in the admin
							value={ attributes.caption } // Any existing content, either from the database or an attribute default
							allowedFormats={ [] } // Allow the content to be made bold or italic, but do not allow other formatting options
							onChange={ ( caption ) => setAttributes( { caption } ) } // Store updated content as a block attribute
							placeholder="Add Hero Banner caption text here..." // Display this text before any content has been added by the user
						/>
						{ attributes.link && attributes.buttonText && <span class="wsu-button wsu-button--size-small" href="#" aria-labelledby="unique-id-hero-banner-title">{ attributes.buttonText }</span> }
					</div>
				</div>
			</div>
		</>
	)


}

export default Edit;