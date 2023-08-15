const {
	BaseControl,
	PanelRow,
	__experimentalRadio: Radio,
	__experimentalRadioGroup: RadioGroup,
} = wp.components;

export default function (props) {
	const { attributes, setAttributes } = props;

	return (
		<PanelRow>
			<BaseControl className="wsu-settings__base-control" help="">
				<BaseControl.VisualLabel className="wsu-settings__label">
					Content Source
				</BaseControl.VisualLabel>
				<RadioGroup
					className="wsu-gutenberg-button__radio-group"
					checked={attributes.source_type}
					defaultChecked="feed"
					onChange={(source_type) => setAttributes({ source_type })}
				>
					<Radio value="feed">Feed</Radio>
					<Radio value="select">Select</Radio>
				</RadioGroup>
			</BaseControl>
		</PanelRow>
	);
}
