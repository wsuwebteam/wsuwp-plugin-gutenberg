const { registerBlockType } = wp.blocks;

import Edit from "./edit";

registerBlockType("wsuwp/button", {
  title: "Button",
  icon: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M19 6.5H5c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7c0-1.1-.9-2-2-2zm.5 9c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5v-7c0-.3.2-.5.5-.5h14c.3 0 .5.2.5.5v7zM8 13h8v-1.5H8V13z"></path>
    </svg>
  ),
  apiVersion: 2, 
  category: "text",
  attributes: {
    id: {
      type: 'string',
      default: '',
    },
    buttonText: {
      type: "string",
      default: "",
    },
    buttonUrl: {
      type: "string", 
      default: "",
    },
    iconBefore: {
      type: "string",
      default: "",
    },
    iconAfter: {
      type: "string",
      default: "",
    },
    buttonClassName: {
      type: "string",
      default: "",
    },
    buttonAriaLabel: {
      type: "string",
      default: "",
    },
  },
  edit: Edit,
  save: function () {
    return null;
  },
});
