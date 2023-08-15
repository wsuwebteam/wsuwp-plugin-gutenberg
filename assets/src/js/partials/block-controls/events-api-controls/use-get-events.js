import { useFetch } from "../../hooks";

export default function (host, attributes) {
	let url = `${host}/wp-json/wsu-events/v1/get-events?`;

	if (attributes.source_type === "select") {
		const postIds = attributes.selected_events.map((e) => e.id).join(",");
		url += `type=select&post-ids=${postIds}&offset=${attributes.offset}`;
	} else if (attributes.source_type === "feed") {
		const types = attributes.types.map((e) => e.id).join(",");
		const categories = attributes.categories.map((e) => e.id).join(",");
		const organizations = attributes.organizations
			.map((e) => e.id)
			.join(",");
		const tags = attributes.tags.map((e) => e.id).join(",");
		const exclude = attributes.excluded_events.map((e) => e.id).join(",");
		url += `type=feed
			&count=${attributes.count}
			&offset=${attributes.offset}
			&types=${types}
			&categories=${categories}
			&tags=${tags}
			&exclude=${exclude}
			&organizations=${organizations}`;
	}

	return useFetch(`${url}`);
}
