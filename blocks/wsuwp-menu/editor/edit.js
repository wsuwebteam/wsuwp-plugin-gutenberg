import React, { useState, useEffect } from "@wordpress/element";
import apiFetch from "@wordpress/api-fetch";
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import {
  TextControl,
  SelectControl,
  BaseControl,
  PanelBody,
} from "@wordpress/components";

const edit = (props) => {
  const { className, attributes, setAttributes } = props;
  const blockProps = useBlockProps({
    className: "wsu-gutenberg-menu-block",
    style: {},
  });
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    apiFetch({ path: "/wsu-gutenberg/v1/get-wp-menus" }).then((response) => {
      const menus = JSON.parse(response);

      if (menus) {
        const options = menus.map((menu) => {
          return { label: menu.name, value: menu.slug };
        });

        setMenus(options);
      }
    });
  }, []);

  return (
    <>
      <InspectorControls>
        <PanelBody title="General" initialOpen={true}>
          <SelectControl
            label="Menu to Display"
            value={attributes.slug}
            options={menus}
            onChange={(slug) => setAttributes({ slug: slug })}
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <span className="dashicon dashicons dashicons-menu wsu-gutenberg-menu-block__icon"></span>{" "}
        Menu: {attributes.slug}
      </div>
    </>
  );
};

export default edit;
