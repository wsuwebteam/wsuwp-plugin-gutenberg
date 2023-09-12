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
  icon: (<svg width="49" height="20" viewBox="0 0 49 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M33 19H48L43.9615 13.5L48 8H33V19Z" fill="white" stroke="black" stroke-linejoin="round"/>
  <path d="M14 8L1 8L4.5 13.5L1 19L14 19L14 8Z" fill="white" stroke="black" stroke-linejoin="round"/>
  <rect x="10.5" y="0.5" width="28" height="16" rx="0.5" fill="white" stroke="black" stroke-linejoin="round"/>
  </svg>),
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
        x: 0.5,
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
    videoSrc: {
      type: "string",
      default: "",
    },
    videoImage: {
      type: "string",
      default: "",
    },
  },
  edit,
});
