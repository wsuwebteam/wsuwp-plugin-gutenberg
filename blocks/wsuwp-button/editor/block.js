const { registerBlockType } = wp.blocks;

import Edit from "./edit";

registerBlockType("wsuwp/button", {
  title: "Button",
  icon: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 11C5 9.89543 5.89543 9 7 9H17C18.1046 9 19 9.89543 19 11V12C19 13.1046 18.1046 14 17 14H7C5.89543 14 5 13.1046 5 12V11Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7 7H17C19.2091 7 21 8.79086 21 11V12C21 14.2091 19.2091 16 17 16H7C4.79086 16 3 14.2091 3 12V11C3 8.79086 4.79086 7 7 7ZM7 9C5.89543 9 5 9.89543 5 11V12C5 13.1046 5.89543 14 7 14H17C18.1046 14 19 13.1046 19 12V11C19 9.89543 18.1046 9 17 9H7Z"
      />
    </svg>
  ),
  category: "content",
  attributes: {
    buttonText: {
      type: "string",
      default: "",
    },
    buttonUrl: {
      type: "string",
      default: "",
    },
    opensInNewTab: {
      type: "boolean",
      default: false,
    },
    style: {
      type: "string",
      default: "default",
    },
    size: {
      type: "string",
      default: "default",
    },
    iconBefore: {
      type: "string",
      default: "",
    },
    iconAfter: {
      type: "string",
      default: "",
    },
  },
  edit: Edit,
  save: function () {
    return null;
  },
});
