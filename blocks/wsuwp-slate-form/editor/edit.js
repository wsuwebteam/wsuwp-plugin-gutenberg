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
  PanelDisplayOptions,
  PanelColorOptions,
} from "../../../assets/src/js/partials/block-panels/blockPanels";



const Edit = (props) => {
  let { attributes, setAttributes } = props;

  const blockProps = useBlockProps({
    className: "wsu-slate-form",
    style: {},
  });


  return (
    <>
      <InspectorControls>
        <PanelBody title="General" initialOpen={true}>
          

          <TextControl
            label="Form ID"
            value={attributes.formId ? attributes.formId : ""}
            onChange={(formId) => setAttributes({ formId })}
          />
        </PanelBody>

        <PanelDisplayOptions isOpen={false}>
          


        </PanelDisplayOptions>
      </InspectorControls>

      <div {...blockProps}>
          <TextControl
            className="wsu-slate-form__form-id"
            placeholder="Form ID"
            label="Slate Form ID"
            onChange={(formId) => setAttributes({ formId })}
            value={attributes.formId ? attributes.formId: ""}
          />
      </div>
    </>
  );
};

export default Edit;
