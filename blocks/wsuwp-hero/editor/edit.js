const {
	useBlockProps,
	RichText,
	MediaUpload,
	MediaUploadCheck,
	InspectorControls,
} = wp.blockEditor;

const {
	Panel,
	PanelBody,
	TextControl,
	SelectControl,
	Button,
	FocalPointPicker,
	BaseControl
} = wp.components;

const Edit = ( {className, isSelected, attributes, setAttributes } ) => {

	const blockProps = useBlockProps( {
		className: 'wsu-hero  wsu-pattern--wsu-light-radial-left',
		style: {},
	} );

	return (
		<>
			<InspectorControls>
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
				<div className="wsu-overlay wsu-overlay--dark-left wsu-pattern-after"></div>
				<div className="wsu-hero__content">
					<div className="wsu-hero__caption">
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
					</div>
				</div>
			</div>
		</>
	)


}

export default Edit;