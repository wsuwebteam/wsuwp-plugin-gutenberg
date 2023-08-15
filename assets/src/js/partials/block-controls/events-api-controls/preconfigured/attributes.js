export default {
	data_source: {
		type: "string",
		default: "",
	},
	source_type: {
		enum: ["feed", "select"],
		default: "feed",
	},
	search: {
		type: "string",
		default: "",
	},
	selected_events: {
		type: "array",
		default: [],
	},
	excluded_events: {
		type: "array",
		default: [],
	},
	types: {
		type: "array",
		default: [],
	},
	categories: {
		type: "array",
		default: [],
	},
	tags: {
		type: "array",
		default: [],
	},
	organizations: {
		type: "array",
		default: [],
	},
	count: {
		type: "integer",
		default: 5,
	},
	offset: {
		type: "integer",
		default: 0,
	},
};
