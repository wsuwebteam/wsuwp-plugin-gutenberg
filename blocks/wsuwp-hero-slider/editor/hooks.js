const el = wp.element.createElement;

// super hacky function to hide the toolbar on the hero slider blocks
function hideToolbar(OriginalComponent) {
  return function (props) {
    if (props.name === "wsuwp/hero" && props.isSelected) {
      requestAnimationFrame(() => {
        const el = jQuery(".wp-block-wsuwp-hero.wsu-hero.is-selected");
        const isInSlider = jQuery(el).closest(
          ".wsu-gutenberg-hero-slider__slides"
        ).length;

        if (isInSlider) {
          jQuery(".components-popover__content").hide();
        }
      });
    }

    return el(OriginalComponent, props);
  };
}

wp.hooks.addFilter("editor.BlockEdit", "wsuwp/block-hero-slider", hideToolbar);
