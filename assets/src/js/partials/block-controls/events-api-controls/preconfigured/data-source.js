import { HostControl2 as HostControl } from "../../../block-controls/blockControls";

export default function (props) {
	const { attributes, setAttributes } = props;

	return (
		<div className="components-base-control">
			<HostControl
				label="Data Source"
				value={attributes.data_source}
				disabled={false}
				onChange={(data_source) => setAttributes({ data_source })}
			/>
		</div>
	);
}
