const { __experimentalNumberControl: NumberControl } = wp.components;

export default function (props) {
	const { attributes, setAttributes } = props;

	return (
		<div className="components-base-control">
			<NumberControl
				label="Count"
				help="Number of results to be displayed."
				value={attributes.count}
				min={1}
				onChange={(newval) => setAttributes({ count: newval })}
			/>
		</div>
	);
}
