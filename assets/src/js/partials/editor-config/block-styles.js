wp.domReady(() => {
  wp.blocks.unregisterBlockStyle("core/button", ["fill", "outline"]);

  wp.blocks.unregisterBlockStyle("core/image", ["default", "rounded"]);

  wp.blocks.unregisterBlockStyle("core/quote", ["default", "large", "plain"]);

  wp.blocks.unregisterBlockStyle("core/separator", ["default", "wide", "dots"]);
});
