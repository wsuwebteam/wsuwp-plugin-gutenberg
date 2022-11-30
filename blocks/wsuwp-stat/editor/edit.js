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
  SelectControl,
  __experimentalRadio as Radio,
  __experimentalRadioGroup as RadioGroup,
} from "@wordpress/components";
import { PanelStyleOptions, PanelAnimate } from "../../../assets/src/js/partials/block-panels/blockPanels";

import { 
  FontIconPickerControl,
  SlideSelector,
} from "../../../assets/src/js/partials/block-controls/blockControls";

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
    label: "Circle",
    value: "round",
  },
];

const edit = (props) => {
  const { className, attributes, setAttributes } = props;
  const blockProps = useBlockProps({
    className: "wsu-stat",
    role: "statistic",
    style: {},
  });

  let statStyle = getBlockClassNameValue( attributes, 'wsu-stat--style-' );

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
              label="Unit"
              help=""
              placeholder="Million"
              value={attributes.unit}
              onChange={(unit) => setAttributes({ unit})}
            />

          <TextControl
            label="Caption"
            help=""
            placeholder="Study Abroad Programs"
            value={attributes.caption}
            onChange={(val) => setAttributes({ caption: val })}
          />

          <TextControl
            label="Citation"
            help=""
            placeholder="(Somewhere)"
            value={attributes.citation}
            onChange={(citation) => setAttributes( { citation } ) }
          />
            

          {hasBlockClassName(attributes, "wsu-stat--style-circle-") && (
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
          prefix="wsu-stat--style-"
        >
          { ( statStyle != 'round' ) && <BaseControl className="wsu-settings__base-control" help="">
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
          }
          { ( statStyle != 'round' ) && <ToggleControl
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
          /> }
            <SelectControl
						label="Stat Layout"
						value={ getBlockClassNameValue( attributes, 'wsu-stat--layout-' ) }
						options={ [
              {label:'Default', value:''},
              {label:'Caption right', value:'caption-offset-right'},
              {label:'Caption right above value', value:'caption-offset-right-reversed'},
              {label:'Value right', value:'value-offset-right'},
              {label:'Value right below caption', value:'value-offset-right-reversed'},
						] }
						onChange={ ( size ) => { setBlockClassName( attributes, setAttributes, 'wsu-stat--layout-', size ); } }
					/>
            <SelectControl
						label="Secondary Circle Position"
						value={ getBlockClassNameValue( attributes, 'wsu-stat--decorator-layout-circle-' ) }
						options={ [
              {label:'Top Right', value:''},
              {label:'Bottom Right', value:'bottom-right'},
              {label:'Bottom Left', value:'bottom-left'},
              {label:'Top Left', value:'top-left'},
              {label:'None', value:'none'},
						] }
						onChange={ ( size ) => { setBlockClassName( attributes, setAttributes, 'wsu-stat--decorator-layout-circle-', size ); } }
					/>
            
            <SelectControl
						label="Gray Bar Decorator Position"
						value={ getBlockClassNameValue( attributes, 'wsu-stat--decorator-layout-bar-' ) }
						options={ [
                {label:'Left of Caption', value:''},
                {label:'Before Value: Bottom', value:'value-left'},
                {label:'Before Value: Top', value:'value-above-left'},
                {label:'Above Value: Left', value:'value-before-left'},
                {label:'Above Value: right', value:'value-before-right'},
                {label:'Above Value: Center', value:'value-before-center'},
                {label:'After Value: Left', value:'value-after-left'},
                {label:'After Value: right', value:'value-after-right'},
                {label:'After Value: Center', value:'value-after-center'},
                {label:'None', value:'none'},
						] }
						onChange={ ( size ) => { setBlockClassName( attributes, setAttributes, 'wsu-stat--decorator-layout-bar-', size ); } }
					/>
        </PanelStyleOptions>
        <PanelAnimate { ...props } ></PanelAnimate>
      </InspectorControls>

      <div {...blockProps}>
        <span className="wsu-stat__decorator"></span>
        <span className="wsu-stat__value-wrapper">
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
        </span>

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
        <RichText
          className="wsu-stat__citation"
          allowedFormats={[]}
          withoutInteractiveFormatting={true}
          disableLineBreaks={true}
          multiline={false}
          placeholder="(Citation)"
          tagName="span"
          onChange={(citation) => setAttributes({ citation })}
          value={attributes.citation}
        />

        {hasBlockClassName(attributes, "wsu-stat--style-circle-") &&
          attributes.icon && (
            <i className={`wsu-stat__icon wsu-i-${attributes.icon}`}></i>
          )}
      </div>
    </>
  );
};

export default edit;
