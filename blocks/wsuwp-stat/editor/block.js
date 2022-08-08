const { registerBlockType } = wp.blocks;

import Edit from "./edit";

registerBlockType("wsuwp/stat", {
  title: "Stat",
  icon: "money-alt",
  apiVersion: 2,
  category: "text",
  attributes: {
    id: {
        type: 'string',
        default: '',
    },
    stat: {
      type: "string",
      default: "",
    },
    caption: {
      type: "string",
      default: "",
    },
    icon: {
      type: "string",
      default: "",
    },
    unit: {
      type: "string",
      default: "",
    },
  },
  edit: Edit,
  save: function () {
    return null;
  },
});
