const { __experimentalNumberControl: NumberControl } = wp.components;

export default function (props) {
	const { attributes, setAttributes } = props;

	return (
		<div className="components-base-control">
			<NumberControl
				label="Offset"
				help="Offset skips a given number of items before starting results"
				value={attributes.offset}
				min={1}
				onChange={(newval) => setAttributes({ offset: newval })}
			/>
		</div>
	);
}
