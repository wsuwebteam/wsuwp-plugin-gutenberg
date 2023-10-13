const { registerBlockType } = wp.blocks;

import Edit from "./edit";

registerBlockType("wsuwp/people-list", {
  title: "People List",
  icon: "groups",
  category: "common",
  attributes: {
    directory: {
      type: "object",
      default: {},
    },
    showProfile: {
      type: "boolean",
      default: false,
    },
    indexProfiles: {
      type: "boolean",
      default: false,
    },
    includeChildDirectories: {
      type: "boolean",
      default: true,
    },
    directory: {
      type: "object",
      default: {},
    },
    count: {
      type: "string",
      default: "10",
    },
    page: {
      type: "string",
      default: "1",
    },
    data_source: {
      type: "string",
      default: "global",
    },
    custom_data_source: {
      type: "string",
      default: "",
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
    tag: {
      type: "array",
      default: [],
    },
    query_logic: {
      type: "string",
      default: "IN",
    },
    profile_order: {
      type: "string",
      default: "",
    },
    display_fields: {
      type: "array",
      default: ["photo", "name", "title", "office", "email"],
    },
    focus_area_label: {
      type: "string",
      default: "Focus Area",
    },
    website_link_text: {
      type: "string",
      default: "Website",
    },
    profile_link: {
      type: "string",
      default: "",
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
    only_show_selected_term_values: {
      type: "boolean",
      default: false,
    },
    include_term_values: {
      type: "array",
      default: [],
    },
    exclude_term_values: {
      type: "array",
      default: [],
    },
    category_filter_label: {
      type: "string",
      default: "",
    },
    category_filter_terms: {
      type: "array",
      default: [],
    },
    classification_filter_label: {
      type: "string",
      default: "",
    },
    classification_filter_terms: {
      type: "array",
      default: [],
    },
    location_filter_label: {
      type: "string",
      default: "",
    },
    location_filter_terms: {
      type: "array",
      default: [],
    },
    organization_filter_label: {
      type: "string",
      default: "",
    },
    organization_filter_terms: {
      type: "array",
      default: [],
    },
    tag_filter_label: {
      type: "string",
      default: "",
    },
    tag_filter_terms: {
      type: "array",
      default: [],
    },
    search_filter_label: {
      type: "string",
      default: "",
    },
  },
  edit: Edit,
  save: function () {
    return null;
  },
});
