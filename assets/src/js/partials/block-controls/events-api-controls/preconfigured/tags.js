import { TermSelectorControl } from "../../../block-controls/blockControls";

export default function (props) {
	const { host, attributes, setAttributes } = props;

	return (
		<div className="components-base-control">
			<TermSelectorControl
				label="Tags"
				help="Display events by searching and selecting tags"
				host={host}
				taxonomy="post_tag"
				value={attributes.tags}
				onChange={(r) =>
					setAttributes({
						tags: r.termsSelected,
					})
				}
			/>
		</div>
	);
}
