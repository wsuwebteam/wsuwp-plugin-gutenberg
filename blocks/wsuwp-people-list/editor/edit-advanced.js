const {
	TextControl,
} = wp.components;

const peopleListAdvancedControls = wp.compose.createHigherOrderComponent((BlockEdit) => {
	return (props) => {
		const { Fragment } = wp.element;
		const { ToggleControl } = wp.components;
		const { InspectorAdvancedControls } = wp.blockEditor;
		const { attributes, setAttributes, isSelected } = props;
		return (
			<Fragment>
				<BlockEdit {...props} />
				{isSelected && ( props.name == 'wsuwp/people-list' ) && 
					<InspectorAdvancedControls>
						<TextControl
                            label="Profile Page Link"
                            value={ attributes.profile_link ? attributes.profile_link : '' }
                            onChange= { ( profile_link ) => setAttributes( { profile_link } ) }
                        />
					</InspectorAdvancedControls>
				}
			</Fragment>
		);
	};
}, 'peopleListAdvancedControls');
 
wp.hooks.addFilter(
	'editor.BlockEdit',
	'wsuwp/people-list-advanced-controls',
	peopleListAdvancedControls
);