/**
 *
 * WordPress Dependencies
 *
 */
import { __ } from "@wordpress/i18n";
const { registerBlockType } = wp.blocks;

import edit from "./edit";
import save from "./save";

registerBlockType("wsuwp/hero-slider", {
  apiVersion: 2,
  title: "Hero Slider",
  category: "design",
  icon: "slides",
  attributes: {},
  innerBlocks: [
    {
      name: "wsuwp/hero",
    },
  ],
  edit,
  save,
});
