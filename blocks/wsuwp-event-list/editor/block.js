import Edit from "./edit";
import { Attributes } from "../../../assets/src/js/partials/block-controls/events-api-controls";
const { registerBlockType } = wp.blocks;

registerBlockType("wsuwp/event-list", {
	title: "Event List",
	apiVersion: 2,
	icon: "calendar-alt",
	category: "feeds",
	attributes: Attributes,
	edit: Edit,
});
