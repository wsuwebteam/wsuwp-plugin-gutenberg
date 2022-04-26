/**
 *
 * WordPress Dependencies
 *
 */
import { __ } from "@wordpress/i18n";
const { registerBlockType } = wp.blocks;

import edit from "./edit";
import save from "./save";

registerBlockType("wsuwp/note", {
  apiVersion: 2,
  title: "Note",
  category: "design",
  icon: "admin-post",
  attributes: {
    title: {
      type: "string",
      default: "",
    },
    icon: {
      type: "string",
      default: "",
    },
    titleTag: {
      type: "string",
      default: "div",
    },
    showTitle: {
      type: "boolean",
      default: true,
    },
    useAsideTag: {
      type: "boolean",
      default: false,
    },
  },
  edit,
  save,
});
