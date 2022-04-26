const { InnerBlocks, InspectorControls, useBlockProps, RichText } =
  wp.blockEditor;

const {
  TextControl,
  ToggleControl,
  SelectControl,
  BaseControl,
  PanelBody,
  __experimentalRadio: Radio,
  __experimentalRadioGroup: RadioGroup,
} = wp.components;

import {
  ColorClassControl,
  FontIconPickerControl,
} from "../../../assets/src/js/partials/block-controls/blockControls";

import {
  PanelDisplayOptions,
  PanelColorOptions,
} from "../../../assets/src/js/partials/block-panels/blockPanels";

import {
  setBlockClassName,
  getBlockClassNameValue,
} from "../../../assets/src/js/partials/block-utilities/blockUtilities";

const Edit = (props) => {
  let { attributes, setAttributes } = props;

  const blockProps = useBlockProps({
    className: "wsu-note",
    style: {},
  });

  const borderColors = [
    { name: "crimson", color: "#A60F2D" },
    { name: "crimson-light", color: "#CA1237" },
    { name: "autumn", color: "#FF6727" },
    { name: "goldfinch", color: "#F3E700" },
    { name: "vineyard", color: "#AADC24" },
    { name: "pacificsky", color: "#5BC3F5" },
    { name: "midnight", color: "#002D61" },
  ];

  return (
    <>
      <InspectorControls>
        <PanelBody title="General" initialOpen={true}>
          <FontIconPickerControl
            label="Icon"
            help=""
            value={attributes.icon}
            onChange={(val) => setAttributes({ icon: val })}
          />

          <TextControl
            label="Note Title"
            value={attributes.title ? attributes.title : ""}
            onChange={(title) => setAttributes({ title })}
          />

          <SelectControl
            label="Title Tag"
            value={attributes.titleTag ? attributes.titleTag : "div"}
            options={[
              { label: "Div", value: "div" },
              { label: "H2", value: "h2" },
              { label: "H3", value: "h3" },
              { label: "H4", value: "h4" },
              { label: "H5", value: "h5" },
              { label: "H6", value: "h6" },
            ]}
            onChange={(tag) => setAttributes({ titleTag: tag })}
          />

          <ToggleControl
            label="Use HTML <aside> tag"
            help="Wraps the note in an aside tag instead of a div."
            checked={attributes.useAsideTag}
            onChange={(useAsideTag) => {
              setAttributes({ useAsideTag });
            }}
          />
        </PanelBody>

        <PanelDisplayOptions isOpen={false}>
          <ToggleControl
            label="Show Title"
            checked={attributes.showTitle}
            onChange={(showTitle) => {
              setAttributes({ showTitle });
            }}
          />

          <BaseControl className="wsu-settings__base-control" help="">
            <BaseControl.VisualLabel className="wsu-settings__label">
              Font Size
            </BaseControl.VisualLabel>
            <RadioGroup
              className="wsu-gutenberg-button__radio-group"
              defaultChecked="default"
              onChange={(val) =>
                setBlockClassName(
                  attributes,
                  setAttributes,
                  "wsu-note--size-",
                  val
                )
              }
              checked={getBlockClassNameValue(attributes, "wsu-note--size-")}
            >
              <Radio value="default">Default</Radio>
              <Radio value="small">Small</Radio>
            </RadioGroup>
          </BaseControl>

          <ColorClassControl
            {...props}
            colors={borderColors}
            label="Border Color"
            value="#A60F2D"
            prefix="wsu-note--border-"
          />
        </PanelDisplayOptions>
      </InspectorControls>

      <div {...blockProps}>
        {attributes.icon && (
          <i className={`wsu-note__icon wsu-icon wsu-i-${attributes.icon}`}></i>
        )}

        {attributes.showTitle && (
          <RichText
            className="wsu-note__title"
            placeholder="Note Title"
            multiline={false}
            allowedFormats={[]}
            onChange={(title) => setAttributes({ title: title })}
            value={attributes.title ? attributes.title : ""}
          />
        )}
        <InnerBlocks templateLock={false} />
      </div>
    </>
  );
};

export default Edit;
