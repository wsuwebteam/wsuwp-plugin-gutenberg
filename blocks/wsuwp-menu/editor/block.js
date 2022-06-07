const { registerBlockType } = wp.blocks;

import Edit from "./edit";

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
  },
  edit: Edit,
  save: function () {
    return null;
  },
});
