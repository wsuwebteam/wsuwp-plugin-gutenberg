const { registerBlockType } = wp.blocks;

import Edit from "./edit";
import save from "./save";

registerBlockType("wsuwp/menu", {
  title: "Menu",
  icon: "menu",
  apiVersion: 2,
  category: "text",
  attributes: {
    slug: {
      type: "string",
      default: "",
    },
    tag: {
      type: "tag",
      default: "nav",
    },
    menuClassname: {
      type: "string",
      default: "",
    },
    custom: {
      type: 'boolean',
      default: false,
  },
  },
  edit: Edit,
  save,
});
