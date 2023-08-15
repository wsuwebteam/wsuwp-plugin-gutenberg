import { TermSelectorControl } from "../../../block-controls/blockControls";

export default function (props) {
	const { host, attributes, setAttributes } = props;

	return (
		<div className="components-base-control">
			<TermSelectorControl
				label="Organizations"
				help="Display events by searching and selecting organizations"
				host={host}
				taxonomy="wsuwp_university_org"
				value={attributes.organizations}
				onChange={(r) =>
					setAttributes({
						organizations: r.termsSelected,
					})
				}
			/>
		</div>
	);
}
