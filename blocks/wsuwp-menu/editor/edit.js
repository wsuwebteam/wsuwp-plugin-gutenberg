import React, { useState, useEffect } from "@wordpress/element";
import apiFetch from "@wordpress/api-fetch";
import { InnerBlocks, InspectorControls, useBlockProps, InspectorAdvancedControls, } from "@wordpress/block-editor";
import {
  TextControl,
  SelectControl,
  BaseControl,
  ToggleControl,
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

        options.push( { label: 'None', value: '' } )

        setMenus(options);
      }
    });
  }, []);

  return (
    <>
      <InspectorControls>
        <PanelBody title="General" initialOpen={true}>
          <SelectControl
            label="Menu Wrapper Tag"
            value={attributes.tag}
            options={
              [
                { label: 'nav', value: 'nav' },
                { label: 'div', value: 'div' },
                { label: 'None', value: '' },
              ]
            }
            onChange={(tag) => setAttributes({ tag })}
          />
          <SelectControl
            label="Menu to Display"
            value={attributes.slug}
            options={menus}
            onChange={(slug) => setAttributes({ slug: slug })}
          />
          <ToggleControl
						label={ 'Enable Custom Blocks' }
						checked={ ( attributes.custom ) }
						onChange={ ( custom ) => setAttributes( {  custom } )  }
						help={ 'Add custom blocks to menu'}
					/>
        </PanelBody>
      </InspectorControls>
      <InspectorAdvancedControls>
        <TextControl
							label="Menu CSS class(es)"
							value={ attributes.menuClassname }
							onChange= { ( menuClassname ) => setAttributes( { menuClassname } ) }
						/>
			</InspectorAdvancedControls>
      <div {...blockProps}>
        <span className="dashicon dashicons dashicons-menu wsu-gutenberg-menu-block__icon"></span>{" "}
        Menu: {attributes.slug}
        <div>
        { attributes.custom && <InnerBlocks
						templateLock={ false }
					/> }
        </div>
      </div>
    </>
  );
};

export default edit;
