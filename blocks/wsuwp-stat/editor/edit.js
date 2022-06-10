import React, { useState } from "@wordpress/element";
import {
  RichText,
  InspectorControls,
  useBlockProps,
  __experimentalLinkControl as LinkControl,
} from "@wordpress/block-editor";
import {
  BaseControl,
  PanelBody,
  TextControl,
  ToggleControl,
  __experimentalRadio as Radio,
  __experimentalRadioGroup as RadioGroup,
} from "@wordpress/components";
import { PanelStyleOptions } from "../../../assets/src/js/partials/block-panels/blockPanels";
import { FontIconPickerControl } from "../../../assets/src/js/partials/block-controls/blockControls";
import {
  setBlockClassName,
  getBlockClassNameValue,
  setClassName,
  hasBlockClassName,
  setBlockClassNameBool,
} from "../../../assets/src/js/partials/block-utilities/blockUtilities";
import { Default, CircleUnit, CircleTop, CircleBottom } from "./style-options";

let statStyles = [
  {
    icon: <Default />,
    label: "Default",
    value: "",
  },
  {
    icon: <CircleUnit />,
    label: "Unit",
    value: "unit",
  },
  {
    icon: <CircleBottom />,
    label: "Bottom",
    value: "bottom",
  },
  {
    icon: <CircleTop />,
    label: "Top",
    value: "top",
  },
];

const edit = (props) => {
  const { className, attributes, setAttributes } = props;
  const blockProps = useBlockProps({
    className: "wsu-stat",
    role: "statistic",
    style: {},
  });

  return (
    <>
      <InspectorControls>
        <PanelBody title="General" initialOpen={true}>
          <TextControl
            label="Value"
            help=""
            placeholder="565"
            value={attributes.stat}
            onChange={(val) => setAttributes({ stat: val })}
          />

          <TextControl
            label="Caption"
            help=""
            placeholder="Study Abroad Programs"
            value={attributes.caption}
            onChange={(val) => setAttributes({ caption: val })}
          />

          {hasBlockClassName(attributes, "wsu-stat--style-circles-unit") && (
            <TextControl
              label="Unit"
              help=""
              placeholder="Million"
              value={attributes.unit}
              onChange={(val) => setAttributes({ unit: val })}
            />
          )}

          {hasBlockClassName(attributes, "wsu-stat--style-circles-") && (
            <FontIconPickerControl
              label="Icon"
              help=""
              value={attributes.icon}
              onChange={(val) => setAttributes({ icon: val })}
            ></FontIconPickerControl>
          )}
        </PanelBody>

        <PanelStyleOptions
          {...props}
          styles={statStyles}
          prefix="wsu-stat--style-circles-"
        >
          <BaseControl className="wsu-settings__base-control" help="">
            <BaseControl.VisualLabel className="wsu-settings__label">
              Size
            </BaseControl.VisualLabel>
            <RadioGroup
              className="wsu-gutenberg-button__radio-group"
              onChange={(val) =>
                setClassName(
                  attributes.className,
                  "wsu-stat--size-",
                  val,
                  setAttributes,
                  "className"
                )
              }
              checked={getBlockClassNameValue(
                attributes.className,
                "wsu-stat--size-"
              )}
              defaultChecked=""
            >
              <Radio value="xsmall">XSmall</Radio>
              <Radio value="small">Small</Radio>
              <Radio value="">Default</Radio>
            </RadioGroup>
          </BaseControl>

          <ToggleControl
            label="Display inline"
            checked={hasBlockClassName(attributes, "wsu-display--inline-block")}
            onChange={(value) =>
              setBlockClassNameBool(
                attributes,
                setAttributes,
                "wsu-display--inline-block",
                value
              )
            }
            help=""
          />
        </PanelStyleOptions>
      </InspectorControls>

      <div {...blockProps}>
        <RichText
          className="wsu-stat__value"
          allowedFormats={[]}
          withoutInteractiveFormatting={true}
          disableLineBreaks={true}
          multiline={false}
          placeholder="Value"
          tagName="span"
          onChange={(val) => setAttributes({ stat: val })}
          value={attributes.stat}
        />

        {hasBlockClassName(attributes, "wsu-stat--style-circles-unit") &&
          attributes.unit && (
            <RichText
              className="wsu-stat__unit"
              allowedFormats={[]}
              withoutInteractiveFormatting={true}
              disableLineBreaks={true}
              multiline={false}
              placeholder="Unit"
              tagName="span"
              onChange={(val) => setAttributes({ unit: val })}
              value={attributes.unit}
            />
          )}

        <RichText
          className="wsu-stat__caption"
          allowedFormats={[]}
          withoutInteractiveFormatting={true}
          disableLineBreaks={true}
          multiline={false}
          placeholder="Caption"
          tagName="span"
          onChange={(val) => setAttributes({ caption: val })}
          value={attributes.caption}
        />

        {hasBlockClassName(attributes, "wsu-stat--style-circles-") &&
          attributes.icon && (
            <i className={`wsu-stat__icon wsu-i-${attributes.icon}`}></i>
          )}
      </div>
    </>
  );
};

export default edit;
