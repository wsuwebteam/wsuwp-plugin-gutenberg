import { default as EventPicker } from "../event-picker";

export default function (props) {
	const { host, attributes, setAttributes } = props;

	return (
		<EventPicker
			help="Select events to display"
			placeholder="Search events..."
			host={host}
			value={attributes.selected_events}
			onChange={(events) => setAttributes({ selected_events: events })}
		/>
	);
}
