const { registerBlockType } = wp.blocks;

import Edit from "./edit";

registerBlockType("wsuwp/people-list", {
  title: "People List",
  icon: "groups",
  category: "common",
  attributes: {
    count: {
      type: "string",
      default: "10",
    },
    page: {
      type: "string",
      default: "1",
    },
    nid: {
      type: "string",
      default: "",
    },
    classification: {
      type: "array",
      default: [],
    },
    university_category: {
      type: "array",
      default: [],
    },
    university_location: {
      type: "array",
      default: [],
    },
    university_organization: {
      type: "array",
      default: [],
    },
    profile_order: {
      type: "string",
      default: "",
    },
    display_fields: {
      type: "array",
      default: ["photo", "name", "title", "office", "email"],
    },
    website_link_text: {
      type: "string",
      default: "Website",
    },
    columns: {
      type: "integer",
      default: 3,
    },
    headingTag: {
      type: "string",
      default: "h2",
    },
    photo_size: {
      type: "string",
      default: "medium",
    },
    filters: {
      type: "array",
      default: [],
    },
    exclude_term_values: {
      type: "array",
      default: [],
    },
    category_filter_label: {
      type: "string",
      default: "Filter by Category",
    },
    classification_filter_label: {
      type: "string",
      default: "Filter by Classification",
    },
    location_filter_label: {
      type: "string",
      default: "Filter by Location",
    },
    organization_filter_label: {
      type: "string",
      default: "Filter by Organization",
    },
    tag_filter_label: {
      type: "string",
      default: "Filter by Tag",
    },
    search_filter_label: {
      type: "string",
      default: "Type to search",
    },
  },
  edit: Edit,
  save: function () {
    return null;
  },
});
