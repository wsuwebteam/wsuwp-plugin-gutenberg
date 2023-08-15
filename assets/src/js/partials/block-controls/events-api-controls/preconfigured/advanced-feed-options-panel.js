import { default as Offset } from "./offset";
import { default as ExcludeEvents } from "./exclude-events";
import { default as DataSource } from "./data-source";

const { PanelBody } = wp.components;

export default function (props) {
	const { attributes } = props;

	return (
		<PanelBody title="Advanced Feed Options" initialOpen={false}>
			<Offset {...props} />

			{attributes.source_type == "feed" && <ExcludeEvents {...props} />}

			<DataSource {...props} />
		</PanelBody>
	);
}
