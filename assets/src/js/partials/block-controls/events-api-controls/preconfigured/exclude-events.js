import { default as EventPicker } from "../event-picker";

export default function (props) {
	const { host, attributes, setAttributes } = props;

	return (
		<EventPicker
			label="Exclude Events"
			help="Select events to exclude from display"
			placeholder="Search events..."
			host={host}
			value={attributes.excluded_events}
			onChange={(events) => setAttributes({ excluded_events: events })}
		/>
	);
}
