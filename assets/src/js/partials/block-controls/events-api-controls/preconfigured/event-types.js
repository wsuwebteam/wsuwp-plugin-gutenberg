import { TermSelectorControl } from "../../../block-controls/blockControls";

export default function (props) {
	const { host, attributes, setAttributes } = props;

	return (
		<div className="components-base-control">
			<TermSelectorControl
				label="Event Types"
				help="Display events by searching and selecting event types"
				host={host}
				taxonomy="event-type"
				value={attributes.types}
				onChange={(r) =>
					setAttributes({
						types: r.termsSelected,
					})
				}
			/>
		</div>
	);
}
