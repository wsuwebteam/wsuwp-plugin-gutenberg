function removeBlockPanels(settings, name) {
  settings.supports = _.assign(settings.supports, {
    typography: false,
  });

  return settings;
}

wp.hooks.addFilter(
  "blocks.registerBlockType",
  "wsuwp-plugin-gutenberg/remove-block-panels",
  removeBlockPanels
);
