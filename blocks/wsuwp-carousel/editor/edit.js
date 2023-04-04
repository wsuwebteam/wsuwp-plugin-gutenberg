const { __ } = wp.i18n;

const {
	select,
} = wp.editor;

const {
	useEffect
} = wp.element;

const {
	InnerBlocks,
	InspectorControls,
	InspectorAdvancedControls,
	useBlockProps,
    RichText,
} = wp.blockEditor;

const {
	TextControl,
	ToggleControl,
    RangeControl,
	PanelBody,
	SelectControl,
} = wp.components;

import { 
	ColorClassControl,
	SpacingClassNameSelector,
    ImageFrameControl,
	HeadingTagControl,
	RelatedFeedControl,
} from "../../../assets/src/js/partials/block-controls/blockControls";

import { 
    PanelDisplayOptions,
	PanelColorOptions,
} from "../../../assets/src/js/partials/block-panels/blockPanels";

import {
    hasBlockClassName,
    addBlockClassName,
    setBlockClassName,
	getBlockClassNameValue,
	setChildBlockClassName,
	setBlockClassNameBool,
} from "../../../assets/src/js/partials/block-utilities/blockUtilities";

import {
	FeedPostTypeControl,
	FeedTaxonomyControl,
	FeedCountControl,
	FeedTermControl,
	FeedOffsetControl,
	FeedUseAndLogicControl,
	FeedHostControl,
	FeedPanel,
	FeedPanelAdvanced,
  } from "../../../assets/src/js/partials/block-controls/feed-controls/feed-controls";

  import { ApiRenderBlock } from "../../../assets/src/js/partials/block-components/blockComponents";

const { MediaPlaceholder, MediaUpload } = wp.editor;


const Edit = ( props ) => {

	let {
		attributes, 
		setAttributes,
		clientId,
	} = props;

	let blockClasses = [
		'wsu-carousel',
	]

	if ( attributes.useFeed && ! attributes.allowCustomCards ) {

		blockClasses.push('wsu-is-feed');
	}

	const blockProps = useBlockProps( {
        className: blockClasses.join(' '),
        style: {},
    } );

	let blockTemplate = ( attributes.useFeed ) ? [] : [
		['wsuwp/card', {}, []],
		['wsuwp/card', {}, []],
		['wsuwp/card', {}, []],
	];

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

	const updateChildBlockClasses = ( prefix, value ) => {

		;

	}

    return (
		<>
		<InspectorControls>
            <PanelDisplayOptions isOpen={true} >
            <RangeControl
                label="Number of Columns"
                help="Number of columns to display per row."
                value={ attributes.columns }
                onChange={ ( columns ) => setAttributes( { columns } ) }
                min={1}
                max={5}
                />
				<ToggleControl
					label="Feed Content"
					checked={attributes.useFeed}
					onChange={ ( useFeed ) => setAttributes( { useFeed } ) }
					help="Feed in post, pages, or other content automatically into card group."
				/>
				{ attributes.useFeed && (
					<>
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
					</>
					
				)}
            </PanelDisplayOptions>
			{ attributes.useFeed && (
				<>
					<FeedPanel>
						<FeedPostTypeControl
						label="Post type"
						help="Select post type to display"
						host={attributes.host || window.wsu.ROOT_URL}
						value={attributes.postType}
						onChange={(postType) => setAttributes({ postType })}
						/>
						<FeedTaxonomyControl
						label="Taxonomy"
						help="Select taxonomy to filter posts by"
						host={attributes.host || window.wsu.ROOT_URL}
						postType={attributes.postType}
						value={attributes.taxonomy}
						onChange={(taxonomy) => setAttributes({ taxonomy })}
						/>
						{attributes.taxonomy && (
						<FeedTermControl
							label="Terms"
							help="Filter posts by searching and selecting terms in the selected taxonomy"
							host={attributes.host || window.wsu.ROOT_URL}
							taxonomy={attributes.taxonomy}
							value={attributes.termsSelected}
							onChange={ (terms) => setAttributes({ terms: terms.termsList, termsSelected: terms.termsSelected } ) }
						/>
						)}
						<FeedCountControl {...props} />
					</FeedPanel>
					<FeedPanelAdvanced>
						<FeedUseAndLogicControl {...props} />
						<FeedOffsetControl {...props} />
						<FeedHostControl {...props} />
						<RelatedFeedControl {...props} />
					</FeedPanelAdvanced>
				</>
			)}
			<PanelColorOptions>
				<ColorClassControl
					{ ...props }
					colors={backgroundColors}
					label='Background Color'
					value={ getBlockClassNameValue( attributes,'wsu-color-background--', '', 'cardClassName' ) }
					onSetColor={ ( color ) => {
						setChildBlockClassName( clientId, 'wsu-color-background--', color );
						setBlockClassName( attributes, setAttributes, 'wsu-color-background--', color, 'cardClassName' );
					} }
					/>
				<ColorClassControl
					{ ...props }
					colors={borderColors}
					label='Border Color'
					value={ getBlockClassNameValue( attributes,'wsu-border-top--color-', '', 'cardClassName' ) }
					onSetColor={ ( color ) => {
						setChildBlockClassName( clientId, 'wsu-border-top--color-', color );
						setBlockClassName( attributes, setAttributes, 'wsu-border-top--color-', color, 'cardClassName' );
					}}
					/>
			</PanelColorOptions>
			<SpacingClassNameSelector
					title="Space Settings"
					spaceSettings={[
						{
							label: 'Outside Spacing (Margin)',
							properties: [
								{
									label: 'Top',
									prefix: 'wsu-spacing-before--',									
									default: 'none',
								},
								{
									label: 'Bottom',
									prefix: 'wsu-spacing-after--',									
									default: 'none',
								}
							]
						}
					]}
					{...props}>			
				</SpacingClassNameSelector>
		</InspectorControls>
		<InspectorAdvancedControls>
            <ToggleControl
                label="Allow Custom Cards With Feed"
                checked={ attributes.allowCustomCards }
                onChange={ ( allowCustomCards ) => setAttributes( { allowCustomCards } ) }
                />
        </InspectorAdvancedControls>
		<div { ...blockProps }  >
			<InnerBlocks
				template={ blockTemplate }
				templateLock={ false }
                allowedBlocks={ [ 'wsuwp/card' ] }
			/>
			{ attributes.useFeed && <ApiRenderBlock
				attributes={attributes}
				blockName="wsuwp/card-group"
				>
				No News Items Found
				</ApiRenderBlock>
			}
		</div>
		</>
    )

}

export default Edit;