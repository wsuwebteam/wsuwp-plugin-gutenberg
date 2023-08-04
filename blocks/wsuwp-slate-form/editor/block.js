/**
 *
 * WordPress Dependencies
 *
 */
import { __ } from "@wordpress/i18n";
const { registerBlockType } = wp.blocks;

import edit from "./edit";

registerBlockType("wsuwp/slate-form", {
  apiVersion: 2,
  title: "Slate Form",
  category: "text",
  icon: <svg width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M2 27C0.895431 27 -3.91405e-08 26.1046 -8.74228e-08 25L-1.09278e-06 2C-1.14107e-06 0.895431 0.895429 -3.91405e-08 2 -8.74228e-08L6 -2.62268e-07L6 27L2 27Z" fill="#1E1E1E"/>
  <rect x="8" y="4" width="13" height="3" rx="1" fill="#1E1E1E"/>
  <rect x="8" y="9" width="13" height="1" rx="0.5" fill="#1E1E1E"/>
  <rect x="8" y="12" width="13" height="1" rx="0.5" fill="#1E1E1E"/>
  <rect x="8" y="15" width="13" height="1" rx="0.5" fill="#1E1E1E"/>
  <rect x="8" y="18" width="13" height="1" rx="0.5" fill="#1E1E1E"/>
  <rect x="8" y="21" width="13" height="1" rx="0.5" fill="#1E1E1E"/>
  <path d="M4 26L4 1L23 1C23.5523 1 24 1.44772 24 2L24 25C24 25.5523 23.5523 26 23 26L4 26Z" stroke="#1E1E1E" stroke-width="2" fill="none"/>
  </svg>,
  attributes: {
    formId: {
      type: "string",
      default: "",
    },
  },
  edit
});
