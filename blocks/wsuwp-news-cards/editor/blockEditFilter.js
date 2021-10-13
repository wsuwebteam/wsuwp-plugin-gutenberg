const { addFilter } = wp.hooks;
const { Fragment }	= wp.element;
const { InspectorAdvancedControls }	= wp.editor;
const { createHigherOrderComponent } = wp.compose;
const {
    ToggleControl
} = wp.components;

import { 
    ButtonControl,
	HeadingControl,
} from "../../../assets/src/js/partials/block-controls/blockControls";

const newsCardAdvancedControls = wp.compose.createHigherOrderComponent( (BlockEdit) => {
	return (props) => {
		const { Fragment } = wp.element;
		const { ToggleControl } = wp.components;
		const { InspectorAdvancedControls } = wp.blockEditor;
		const { attributes, setAttributes, isSelected } = props;
		return (
			<Fragment>
				<BlockEdit {...props} />
				{isSelected && (props.name == 'wsuwp/news-cards') && 
					<InspectorAdvancedControls>
						<ToggleControl
							label="Show Feed Button"
							checked={ attributes.showButton }
							onChange={ ( showButton ) => { setAttributes( { showButton } ) } }
							/>
						{ attributes.showButton && <ButtonControl {...props} /> }
						<ToggleControl
							label="Show Feed Heading"
							checked={ attributes.showHeading }
							onChange={ ( showHeading ) => { setAttributes( { showHeading } ) } }
							/>
							{ attributes.showHeading &&
								<> 
									<HeadingControl {...props} />
									<ToggleControl 
										label="Link Heading"
										checked={ attributes.linkHeading }
										onChange={ ( linkHeading ) => { setAttributes( { linkHeading } ) } }
										/>
								</>
							}
					</InspectorAdvancedControls>
				}
			</Fragment>
		);
	};
}, 'newsCardAdvancedControls');


wp.hooks.addFilter(
	'editor.BlockEdit',
	'wsu/news-card-advanced-controls',
	newsCardAdvancedControls
);