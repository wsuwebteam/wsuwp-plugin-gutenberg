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
	BaseControl,
	TextareaControl,
	RangeControl
} = wp.components;

const { __experimentalRadio: Radio, __experimentalRadioGroup: RadioGroup } =
  wp.components;

import { PanelInsertPost, PanelDisplayOptions, PanelFeedPosts, PanelGeneralOptions, PanelStyleOptions } from "../../../assets/src/js/partials/block-panels/blockPanels";

import {
	getBlockClassName,
	addBlockClassName,
	getBlockClassNameValue,
} from '../../../assets/src/js/partials/block-utilities/blockUtilities';

import {
	RequiredAlertControl,
	MultipleImagePicker
} from '../../../assets/src/js/partials/block-controls/blockControls';


let heroStyles = [
	{
	  icon: (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 60"><rect width="124" height="60" fill="#4a4b4c"/><rect x="11.94" y="18.84" width="50.06" height="6.96" rx="3.19" fill="#fff"/><rect x="11.94" y="30.1" width="60.28" height="3.19" rx="1.08" fill="#fff"/><rect x="11.94" y="35.29" width="60.28" height="3.19" rx="1.08" fill="#fff"/><rect x="11.94" y="40.49" width="37.68" height="3.19" rx="1.08" fill="#fff"/></svg>
	  ),
	  label: "Default",
	  value: "",
	},
	{
	  icon: (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 60"><rect width="124" height="60" fill="#4a4b4c"/><rect x="6.74" y="35.51" width="73.82" height="17.01" fill="#231f20"/><rect x="11.94" y="31.69" width="50.06" height="6.96" rx="3.19" fill="#fff"/><rect x="11.94" y="42.95" width="60.28" height="3.19" rx="1.08" fill="#fff"/></svg>
	  ),
	  label: "Bold Caption",
	  value: "caption",
	},
	{
		icon: (
		  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 60"><rect width="124" height="60" fill="#4a4b4c"/><rect x="6.74" y="35.51" width="73.82" height="17.01" fill="#231f20"/><rect x="11.94" y="31.69" width="50.06" height="6.96" rx="3.19" fill="#fff"/><rect x="11.94" y="42.95" width="60.28" height="3.19" rx="1.08" fill="#fff"/></svg>
		),
		label: "Boxed",
		value: "boxed",
	  }
  ];

const Edit = ( props ) => {

	let {
		className, 
		isSelected, 
		attributes, 
		setAttributes 
	} = props;

	let blockClasses = attributes.className ?? '';

	let heroStyle = getBlockClassNameValue( attributes, 'wsu-hero--style-', false );

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
					<ToggleControl
							label="Set as Page Title"
							checked={ ( attributes.headingTag === 'h1') ? true : false }
							onChange= { ( isPageTitle ) => {
								let tag = ( isPageTitle ) ? 'h1' : 'div';
								setAttributes( { headingTag:tag } ) }
							}
							help="Set Hero Banner Title to H1 and remove auto generated page title"
					/>
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

						<BaseControl className="wsu-settings__base-control" help="">
							<BaseControl.VisualLabel className="wsu-settings__label">
								Background Type
							</BaseControl.VisualLabel>
							<RadioGroup
								className="wsu-gutenberg-button__radio-group"
								onChange={(val) => setAttributes({ backgroundType: val })
								}
								checked={attributes.backgroundVideo && !attributes.backgroundType ? 'video' : attributes.backgroundType }
								defaultChecked="image"
							>
								<Radio value="image">Image</Radio>
								<Radio value="video">Video</Radio>
								<Radio value="slider">Slider</Radio>
							</RadioGroup>
						</BaseControl>

						{ (attributes.backgroundType === 'image' || (!attributes.backgroundType && !attributes.backgroundVideo)) && (
							<>
								{ attributes.imageSrc &&
									<BaseControl
										help="Select where you would like the background to resize around."
									>
										<BaseControl.VisualLabel className="wsu-settings__label">
											Focal Point Picker
										</BaseControl.VisualLabel>
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
										allowedTypes={['image']}
										render={({ open }) => (
											<BaseControl label={`${attributes.imageSrc ? 'Replace' : 'Choose'} Background Image`}>
												<Button isLink onClick={open}>Open Media Library</Button>
											</BaseControl> 
										)}
									/>
								</MediaUploadCheck>
							</>
						)}


						{attributes.backgroundType === 'slider' && (
							<>
								<MultipleImagePicker 
									label="Slider Images"
									help="Choose images to rotate through and select focal points by clicking the desired image."							
									onChange={(images) => setAttributes({ sliderImages: images }) }
									value={attributes.sliderImages}
								/>

								<BaseControl className="wsu-settings__base-control" help="Effect used when transitioning to the next slide.">
									<BaseControl.VisualLabel className="wsu-settings__label">
										Effect
									</BaseControl.VisualLabel>
									<RadioGroup
										className="wsu-gutenberg-button__radio-group"
										onChange={(val) => setAttributes({ sliderEffect: val })
										}
										checked={attributes.sliderEffect }
										defaultChecked="slide"
									>
										<Radio value="fade">Fade</Radio>
										<Radio value="slide">Slide</Radio>
										<Radio value="stacked">Stacked</Radio>
									</RadioGroup>
								</BaseControl>
								
								<RangeControl 
									label="Slider Delay"
									help="Delay in milliseconds between slides."
									value={attributes.sliderDelay}
									onChange={(val) => setAttributes({ sliderDelay: val })}
									min={100}
									max={10000}
									step={50}
								/>
							</>
						)}


						{ (attributes.backgroundType === 'video' || (attributes.backgroundVideo && !attributes.backgroundType) ) && (
							<>
								<TextControl
									label="Background Video ID (Vimeo)"
									value={ attributes.videoId ? attributes.videoId : '' }
									onChange= { ( videoId ) => setAttributes( { videoId } ) }
									help='Video ID only. Example: 76979871 from https://player.vimeo.com/video/76979871'
								/>
								{ attributes.videoId && ( ! attributes.videoTitle || ! attributes.videoDescription )  &&  
									<RequiredAlertControl>
										Video title and text description are required for the video to render.
									</RequiredAlertControl>
								}
								<TextControl
									label="Background Video Title"
									value={ attributes.videoTitle ? attributes.videoTitle : '' }
									onChange= { ( videoTitle ) => setAttributes( { videoTitle } ) }
								/>
								<TextareaControl
									label="Background Video Text Description"
									value={ attributes.videoDescription ? attributes.videoDescription : '' }
									onChange= { ( videoDescription ) => setAttributes( { videoDescription } ) }
								/>
								<TextareaControl
									label="Background Video Source"
									value={ attributes.videoSrc ? attributes.videoSrc : '' }
									onChange= { ( videoSrc ) => setAttributes( { videoSrc } ) }
								/>
								{ attributes.imageSrc &&
									<BaseControl
										help="Select where you would like the background to resize around."
									>
										<BaseControl.VisualLabel className="wsu-settings__label">
											Focal Point Picker
										</BaseControl.VisualLabel>
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
										allowedTypes={['image']}
										render={({ open }) => (
											<BaseControl label={`${attributes.imageSrc ? 'Replace' : 'Choose'} Background Image`}>
												<Button isLink onClick={open}>Open Media Library</Button>
											</BaseControl> 
										)}
									/>
								</MediaUploadCheck>					
							</>
						)}
					</PanelBody>
				</Panel>
				<PanelStyleOptions
					{...props}
					styles={heroStyles}
					prefix="wsu-hero--style-"
					removeClass="wsu-style--boxed"
					></PanelStyleOptions>
			</InspectorControls>
			{ 'boxed' !== heroStyle && <div { ...blockProps } >
				<div className="wsu-image-frame wsu-image-frame--fill">
					{ (attributes.backgroundType === 'image' && attributes.imageSrc && (
						<img src={ attributes.imageSrc } />
					)) || (attributes.backgroundType === 'slider' && attributes.sliderImages[0]?.url && (
						<img src={ attributes.sliderImages[0]?.url} />
					))}					
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
						{ attributes.link && attributes.buttonText && <span className="wsu-button wsu-button--size-small" href="#" aria-labelledby="unique-id-hero-banner-title">{ attributes.buttonText }</span> }
					</div>
				</div>
			</div> 
			}
			{ 'boxed' === heroStyle && <div { ...blockProps } >
				<div className="wsu-hero__background">
					<img className="wsu-image" src={ attributes.imageSrc } />
				</div>
			<div className="wsu-hero__overlay">
			</div>
			<div className="wsu-hero__content-wrapper">
				<div className="wsu-hero__inner-content-wrapper">
					<div className="wsu-hero__title-wrapper">
						<RichText
							className="wsu-hero__title"
							tagName="div" // The tag here is the element output and editable in the admin
							value={ attributes.title } // Any existing content, either from the database or an attribute default
							allowedFormats={ [] } // Allow the content to be made bold or italic, but do not allow other formatting options
							onChange={ ( title ) => setAttributes( { title } ) } // Store updated content as a block attribute
							placeholder="Add Hero Banner Text..." // Display this text before any content has been added by the user
						/>
						<RichText
							className="wsu-hero__caption"
							tagName="div" // The tag here is the element output and editable in the admin
							value={ attributes.caption } // Any existing content, either from the database or an attribute default
							allowedFormats={ [] } // Allow the content to be made bold or italic, but do not allow other formatting options
							onChange={ ( caption ) => setAttributes( { caption } ) } // Store updated content as a block attribute
							placeholder="Add Hero Banner caption text here..." // Display this text before any content has been added by the user
						/>
					</div>
					<div className="wsu-hero__content">
					</div>
				</div>
			</div>
		</div>
		}
		</>
	)


}

export default Edit;