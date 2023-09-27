import Edit from "./edit";
import { Attributes } from "../../../assets/src/js/partials/block-controls/events-api-controls";
const { registerBlockType } = wp.blocks;

registerBlockType("wsuwp/event-cards", {
	title: "Event Cards",
	apiVersion: 2,
	icon: "calendar-alt",
	category: "feeds",
	attributes: {
		...Attributes,
		columns: {
			type: "integer",
			default: 3,
		},
	},
	edit: Edit,
});
