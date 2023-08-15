import { default as ContentSource } from "./content-source";
import { default as SelectEvents } from "./select-events";
import { default as EventTypes } from "./event-types";
import { default as Categories } from "./categories";
import { default as Organizations } from "./organizations";
import { default as Tags } from "./tags";
import { default as Count } from "./count";

const { PanelBody } = wp.components;

export default function (props) {
	const { attributes } = props;

	return (
		<PanelBody title="Feed Options" initialOpen={true}>
			<ContentSource {...props} />

			{attributes.source_type == "select" && <SelectEvents {...props} />}

			{attributes.source_type == "feed" && (
				<>
					<EventTypes {...props} />

					<Categories {...props} />

					<Organizations {...props} />

					<Tags {...props} />

					<Count {...props} />
				</>
			)}
		</PanelBody>
	);
}
