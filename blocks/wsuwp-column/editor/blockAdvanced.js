const coverAdvancedControls = wp.compose.createHigherOrderComponent((BlockEdit) => {
	return (props) => {
		const { Fragment } = wp.element;
		const { ToggleControl } = wp.components;
		const { InspectorAdvancedControls } = wp.blockEditor;
		const { attributes, setAttributes, isSelected } = props;
		return (
			<Fragment>
				<BlockEdit {...props} />
				{isSelected && (props.name == 'core/cover') && 
					<InspectorAdvancedControls>
						<ToggleControl
							label={wp.i18n.__('Hide on mobile', 'awp')}
							checked={!!attributes.hideOnMobile}
							onChange={(newval) => setBlockClassNameBool( attributes, setAttributes, 'wsu-width--full', fullWidth ) }
						/>
					</InspectorAdvancedControls>
				}
			</Fragment>
		);
	};
}, 'coverAdvancedControls');
 
wp.hooks.addFilter(
	'editor.BlockEdit',
	'wsuwp/cover-advanced-control',
	coverAdvancedControls
);