/**
 *
 * WordPress Dependencies
 *
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Icon } = wp.components;

import edit from "./edit";

registerBlockType("wsuwp/hero", {
  title: "Hero Banner",
  apiVersion: 2,
  category: "design",
  icon: (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M41 14a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V14zM28.5 34h-9V14h9v20zm2 0V14H39v20h-8.5zm-13 0H9V14h8.5v20z"
      />
    </svg>
  ),
  attributes: {
    requiredClassName: {
      type: "string",
      default: "",
    },
    eyebrowHeading: {
      type: "string",
      default: "",
    },
    title: {
      type: "string",
      default: "",
    },
    headingTag: {
      type: "string",
      default: "div",
    },
    caption: {
      type: "string",
      default: "",
    },
    buttonText: {
      type: "string",
      default: "",
    },
    photoCredit: {
      type: "string",
      default: "",
    },
    overlay: {
      type: "string",
      default: "dark-left",
    },
    imageId: {
      type: "integer",
      default: 0,
    },
    imageSrc: {
      type: "string",
      default: "",
    },
    link: {
      type: "string",
      default: "",
    },
    imageFocalPoint: {
      type: "object",
      default: {
        x: 0.2,
        y: 0.5,
      },
    },
    imageDimensions: {
      type: "object",
      default: {
        width: 1070,
        height: 500,
      },
    },
    lightOverlay: {
      type: "boolean",
      default: false,
    },
    pattern: {
      type: "string",
      default: "wsu-light-radial-left",
    },
    sliderImages: {
      type: "array",
      default: [],
    },
    sliderEffect: {
      type: "string",
      default: "fade",
    },
    sliderDelay: {
      type: "integer",
      default: 5000,
    },
    backgroundType: {
      type: "string",
      default: "",
    },
    backgroundVideo: {
      type: "boolean",
      default: false,
    },
    videoId: {
      type: "string",
      default: "",
    },
    videoTitle: {
      type: "string",
      default: "",
    },
    videoDescription: {
      type: "string",
      default: "",
    },
  },
  edit,
});
