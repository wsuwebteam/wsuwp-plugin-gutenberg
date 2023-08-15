import { TermSelectorControl } from "../../../block-controls/blockControls";

export default function (props) {
	const { host, attributes, setAttributes } = props;

	return (
		<div className="components-base-control">
			<TermSelectorControl
				label="Categories"
				help="Display events by searching and selecting categories"
				host={host}
				taxonomy={["tribe_events_cat", "wsuwp_university_category"]}
				value={attributes.categories}
				onChange={(r) =>
					setAttributes({
						categories: r.termsSelected,
					})
				}
			/>
		</div>
	);
}
