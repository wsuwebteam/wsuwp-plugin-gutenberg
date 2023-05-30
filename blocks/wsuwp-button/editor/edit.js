import React, { useState } from "@wordpress/element";
import { PanelStyleOptions, PanelAnimate } from "../../../assets/src/js/partials/block-panels/blockPanels";
import { FontIconPickerControl } from "../../../assets/src/js/partials/block-controls/blockControls";
import {
  setBlockClassName,
  getBlockClassNameValue,
  setClassName,
  hasBlockClassName,
  setBlockClassNameBool,
} from "../../../assets/src/js/partials/block-utilities/blockUtilities";

import { 
	SpacingClassNameSelector,
} from "../../../assets/src/js/partials/block-controls/blockControls";

const {
  URLPopover,
  RichText,
  InspectorControls,
  InspectorAdvancedControls,
  BlockControls,
  useBlockProps,
  AlignmentToolbar,
  __experimentalLinkControl: LinkControl,
} = wp.blockEditor;

const { __experimentalRadio: Radio, __experimentalRadioGroup: RadioGroup } =
  wp.components;

const {
  Popover,
  ToolbarButton,
  ToolbarGroup,
  BaseControl,
  PanelBody,
  PanelRow,
  TextControl,
  ToggleControl,
} = wp.components;

let buttonStyles = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 60">
        <rect
          x="11.14"
          y="7.66"
          width="101.72"
          height="44.67"
          rx="6.18"
          style={{ fill: "#a60f2d" }}
        />
        <path
          d="M46.91,31.43c0,1.68-1.32,2.66-3.84,2.66H38.19v-9.8h4.6c2.35,0,3.61,1,3.61,2.55A2.35,2.35,0,0,1,45.14,29,2.41,2.41,0,0,1,46.91,31.43ZM40,25.72v2.7h2.58c1.26,0,2-.45,2-1.34s-.72-1.36-2-1.36Zm5.06,5.53c0-1-.74-1.41-2.11-1.41H40v2.83h3C44.33,32.67,45.07,32.23,45.07,31.25Z"
          style={{ fill: "#fff" }}
        />
        <path
          d="M55.92,26.61v7.48H54.25v-1a3,3,0,0,1-2.4,1,3,3,0,0,1-3.23-3.3V26.61h1.75v4c0,1.36.65,2,1.75,2a2,2,0,0,0,2.05-2.25V26.61Z"
          style={{ fill: "#fff" }}
        />
        <path
          d="M62.71,33.69a2.72,2.72,0,0,1-1.68.5,2.3,2.3,0,0,1-2.58-2.52v-3.6H57.22v-1.4h1.23V25H60.2v1.71h2v1.4h-2v3.56c0,.73.37,1.12,1,1.12a1.59,1.59,0,0,0,1-.31Z"
          style={{ fill: "#fff" }}
        />
        <path
          d="M68.46,33.69a2.72,2.72,0,0,1-1.68.5,2.29,2.29,0,0,1-2.57-2.52v-3.6H63v-1.4h1.24V25H66v1.71h2v1.4H66v3.56c0,.73.36,1.12,1,1.12a1.55,1.55,0,0,0,1-.31Z"
          style={{ fill: "#fff" }}
        />
        <path
          d="M69,30.35a4,4,0,1,1,4,3.84A3.76,3.76,0,0,1,69,30.35Zm6.2,0a2.22,2.22,0,1,0-4.44,0,2.22,2.22,0,1,0,4.44,0Z"
          style={{ fill: "#fff" }}
        />
        <path
          d="M86.05,29.81v4.28H84.3V30c0-1.33-.66-2-1.78-2a2,2,0,0,0-2.09,2.25v3.78H78.68V26.61h1.67v1a3.26,3.26,0,0,1,2.58-1A2.92,2.92,0,0,1,86.05,29.81Z"
          style={{ fill: "#fff" }}
        />
      </svg>
    ),
    label: "Default",
    value: "",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 60">
        <rect
          x="11.14"
          y="7.66"
          width="101.72"
          height="44.67"
          rx="21.11"
          style={{ fill: "#a60f2d" }}
        />
        <path
          d="M46.91,31.43c0,1.68-1.32,2.66-3.84,2.66H38.19v-9.8h4.6c2.35,0,3.61,1,3.61,2.55A2.35,2.35,0,0,1,45.14,29,2.41,2.41,0,0,1,46.91,31.43ZM40,25.72v2.7h2.58c1.26,0,2-.45,2-1.34s-.72-1.36-2-1.36Zm5.06,5.53c0-1-.74-1.41-2.11-1.41H40v2.83h3C44.33,32.67,45.07,32.23,45.07,31.25Z"
          style={{ fill: "#fff" }}
        />
        <path
          d="M55.92,26.62v7.47H54.25v-1a3,3,0,0,1-2.41,1,3,3,0,0,1-3.22-3.3V26.62h1.75v4c0,1.36.65,2,1.75,2a2,2,0,0,0,2.05-2.25V26.62Z"
          style={{ fill: "#fff" }}
        />
        <path
          d="M62.71,33.69a2.72,2.72,0,0,1-1.68.5,2.3,2.3,0,0,1-2.58-2.52v-3.6H57.22v-1.4h1.23V25H60.2v1.71h2v1.4h-2v3.56c0,.73.37,1.12,1,1.12a1.59,1.59,0,0,0,1-.31Z"
          style={{ fill: "#fff" }}
        />
        <path
          d="M68.46,33.69a2.72,2.72,0,0,1-1.68.5,2.29,2.29,0,0,1-2.57-2.52v-3.6H63v-1.4h1.24V25H66v1.71h2v1.4H66v3.56c0,.73.36,1.12,1,1.12a1.55,1.55,0,0,0,1-.31Z"
          style={{ fill: "#fff" }}
        />
        <path
          d="M69,30.35a4,4,0,1,1,4,3.84A3.76,3.76,0,0,1,69,30.35Zm6.2,0a2.22,2.22,0,1,0-4.44,0,2.22,2.22,0,1,0,4.44,0Z"
          style={{ fill: "#fff" }}
        />
        <path
          d="M86.05,29.81v4.28H84.3V30c0-1.33-.66-2-1.78-2a2,2,0,0,0-2.09,2.25v3.78H78.68V26.62h1.67v1a3.26,3.26,0,0,1,2.58-1A2.92,2.92,0,0,1,86.05,29.81Z"
          style={{ fill: "#fff" }}
        />
      </svg>
    ),
    label: "Round",
    value: "round",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 60">
        <rect
          x="11.14"
          y="7.66"
          width="101.72"
          height="44.67"
          rx="6.18"
          style={{ fill: "none", stroke: "#58595b", strokeMiterlimit: 10 }}
        />
        <path
          d="M46.91,31.43c0,1.68-1.32,2.66-3.84,2.66H38.19v-9.8h4.6c2.35,0,3.61,1,3.61,2.55A2.35,2.35,0,0,1,45.14,29,2.41,2.41,0,0,1,46.91,31.43ZM40,25.72v2.7h2.58c1.26,0,2-.45,2-1.34s-.72-1.36-2-1.36Zm5.06,5.53c0-1-.74-1.41-2.11-1.41H40v2.83h3C44.33,32.67,45.07,32.23,45.07,31.25Z"
          style={{ fill: "#414042" }}
        />
        <path
          d="M55.92,26.61v7.48H54.25v-1a3,3,0,0,1-2.41,1,3,3,0,0,1-3.22-3.3V26.61h1.75v4c0,1.36.65,2,1.75,2a2,2,0,0,0,2.05-2.25V26.61Z"
          style={{ fill: "#414042" }}
        />
        <path
          d="M62.71,33.69a2.72,2.72,0,0,1-1.68.5,2.3,2.3,0,0,1-2.58-2.52v-3.6H57.22v-1.4h1.23V25H60.2v1.71h2v1.4h-2v3.56c0,.73.37,1.12,1,1.12a1.59,1.59,0,0,0,1-.31Z"
          style={{ fill: "#414042" }}
        />
        <path
          d="M68.46,33.69a2.72,2.72,0,0,1-1.68.5,2.29,2.29,0,0,1-2.57-2.52v-3.6H63v-1.4h1.24V25H66v1.71h2v1.4H66v3.56c0,.73.36,1.12,1,1.12a1.55,1.55,0,0,0,1-.31Z"
          style={{ fill: "#414042" }}
        />
        <path
          d="M69,30.35a4,4,0,1,1,4,3.84A3.76,3.76,0,0,1,69,30.35Zm6.2,0a2.22,2.22,0,1,0-4.44,0,2.22,2.22,0,1,0,4.44,0Z"
          style={{ fill: "#414042" }}
        />
        <path
          d="M86.05,29.81v4.28H84.3V30c0-1.33-.66-2-1.78-2a2,2,0,0,0-2.09,2.25v3.78H78.68V26.61h1.67v1a3.26,3.26,0,0,1,2.58-1A2.92,2.92,0,0,1,86.05,29.81Z"
          style={{ fill: "#414042" }}
        />
      </svg>
    ),
    label: "Outline",
    value: "outline",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 60">
        <rect
          x="11.14"
          y="7.66"
          width="101.72"
          height="44.67"
          rx="21.96"
          style={{ fill: "none", stroke: "#58595b", strokeMiterlimit: 10 }}
        />
        <path
          d="M46.91,31.43c0,1.68-1.32,2.66-3.84,2.66H38.19v-9.8h4.6c2.35,0,3.61,1,3.61,2.55A2.35,2.35,0,0,1,45.14,29,2.41,2.41,0,0,1,46.91,31.43ZM40,25.72v2.7h2.58c1.26,0,2-.45,2-1.34s-.72-1.36-2-1.36Zm5.06,5.53c0-1-.74-1.41-2.11-1.41H40v2.83h3C44.33,32.67,45.07,32.23,45.07,31.25Z"
          style={{ fill: "#414042" }}
        />
        <path
          d="M55.92,26.61v7.48H54.25v-1a3,3,0,0,1-2.41,1,3,3,0,0,1-3.22-3.3V26.61h1.75v4c0,1.36.65,2,1.75,2a2,2,0,0,0,2.05-2.25V26.61Z"
          style={{ fill: "#414042" }}
        />
        <path
          d="M62.71,33.69a2.72,2.72,0,0,1-1.68.5,2.3,2.3,0,0,1-2.58-2.52v-3.6H57.22v-1.4h1.23V25H60.2v1.71h2v1.4h-2v3.56c0,.73.37,1.12,1,1.12a1.59,1.59,0,0,0,1-.31Z"
          style={{ fill: "#414042" }}
        />
        <path
          d="M68.46,33.69a2.72,2.72,0,0,1-1.68.5,2.29,2.29,0,0,1-2.57-2.52v-3.6H63v-1.4h1.24V25H66v1.71h2v1.4H66v3.56c0,.73.36,1.12,1,1.12a1.55,1.55,0,0,0,1-.31Z"
          style={{ fill: "#414042" }}
        />
        <path
          d="M69,30.35a4,4,0,1,1,4,3.84A3.76,3.76,0,0,1,69,30.35Zm6.2,0a2.22,2.22,0,1,0-4.44,0,2.22,2.22,0,1,0,4.44,0Z"
          style={{ fill: "#414042" }}
        />
        <path
          d="M86.05,29.81v4.28H84.3V30c0-1.33-.66-2-1.78-2a2,2,0,0,0-2.09,2.25v3.78H78.68V26.61h1.67v1a3.26,3.26,0,0,1,2.58-1A2.92,2.92,0,0,1,86.05,29.81Z"
          style={{ fill: "#414042" }}
        />
      </svg>
    ),
    
    label: "Outline Round",
    value: "outline-round",
  },
  {
    icon: (
      <svg width="118" height="36" viewBox="0 0 118 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="118" height="36" fill="white"/>
        <path d="M47.8009 24V12.8H53.0489C54.3929 12.8 55.4169 13.0667 56.1209 13.6C56.8249 14.1227 57.1769 14.8267 57.1769 15.712C57.1769 16.3093 57.0382 16.8213 56.7609 17.248C56.4835 17.664 56.1102 17.9893 55.6409 18.224C55.1822 18.448 54.6809 18.56 54.1369 18.56L54.4249 17.984C55.0542 17.984 55.6195 18.1013 56.1209 18.336C56.6222 18.56 57.0169 18.8907 57.3049 19.328C57.6035 19.7653 57.7529 20.3093 57.7529 20.96C57.7529 21.92 57.3849 22.6667 56.6489 23.2C55.9129 23.7333 54.8195 24 53.3689 24H47.8009ZM49.8809 22.368H53.2409C54.0195 22.368 54.6169 22.24 55.0329 21.984C55.4489 21.728 55.6569 21.3173 55.6569 20.752C55.6569 20.1973 55.4489 19.792 55.0329 19.536C54.6169 19.2693 54.0195 19.136 53.2409 19.136H49.7209V17.52H52.8249C53.5502 17.52 54.1049 17.392 54.4889 17.136C54.8835 16.88 55.0809 16.496 55.0809 15.984C55.0809 15.4613 54.8835 15.072 54.4889 14.816C54.1049 14.56 53.5502 14.432 52.8249 14.432H49.8809V22.368ZM63.3968 24.112C62.6714 24.112 62.0314 23.9787 61.4768 23.712C60.9221 23.4347 60.4901 23.0187 60.1808 22.464C59.8714 21.8987 59.7168 21.1893 59.7168 20.336V15.456H61.7168V20.064C61.7168 20.832 61.8874 21.408 62.2288 21.792C62.5808 22.1653 63.0768 22.352 63.7168 22.352C64.1861 22.352 64.5914 22.256 64.9328 22.064C65.2848 21.872 65.5568 21.584 65.7488 21.2C65.9514 20.816 66.0528 20.3413 66.0528 19.776V15.456H68.0528V24H66.1488V21.696L66.4848 22.4C66.1968 22.9547 65.7754 23.3813 65.2208 23.68C64.6661 23.968 64.0581 24.112 63.3968 24.112ZM73.8874 24.112C72.9487 24.112 72.2234 23.872 71.7114 23.392C71.1994 22.9013 70.9434 22.1813 70.9434 21.232V13.568H72.9434V21.184C72.9434 21.5893 73.0447 21.904 73.2474 22.128C73.4607 22.352 73.754 22.464 74.1274 22.464C74.5754 22.464 74.9487 22.3467 75.2474 22.112L75.8074 23.536C75.5727 23.728 75.2847 23.872 74.9434 23.968C74.602 24.064 74.25 24.112 73.8874 24.112ZM69.5354 17.12V15.52H75.2314V17.12H69.5354ZM80.4655 24.112C79.5268 24.112 78.8015 23.872 78.2895 23.392C77.7775 22.9013 77.5215 22.1813 77.5215 21.232V13.568H79.5215V21.184C79.5215 21.5893 79.6228 21.904 79.8255 22.128C80.0388 22.352 80.3322 22.464 80.7055 22.464C81.1535 22.464 81.5268 22.3467 81.8255 22.112L82.3855 23.536C82.1508 23.728 81.8628 23.872 81.5215 23.968C81.1802 24.064 80.8282 24.112 80.4655 24.112ZM76.1135 17.12V15.52H81.8095V17.12H76.1135ZM87.5895 24.112C86.7148 24.112 85.9362 23.9253 85.2535 23.552C84.5708 23.168 84.0322 22.6453 83.6375 21.984C83.2428 21.3227 83.0455 20.5707 83.0455 19.728C83.0455 18.8747 83.2428 18.1227 83.6375 17.472C84.0322 16.8107 84.5708 16.2933 85.2535 15.92C85.9362 15.5467 86.7148 15.36 87.5895 15.36C88.4748 15.36 89.2588 15.5467 89.9415 15.92C90.6348 16.2933 91.1735 16.8053 91.5575 17.456C91.9522 18.1067 92.1495 18.864 92.1495 19.728C92.1495 20.5707 91.9522 21.3227 91.5575 21.984C91.1735 22.6453 90.6348 23.168 89.9415 23.552C89.2588 23.9253 88.4748 24.112 87.5895 24.112ZM87.5895 22.4C88.0802 22.4 88.5175 22.2933 88.9015 22.08C89.2855 21.8667 89.5842 21.5573 89.7975 21.152C90.0215 20.7467 90.1335 20.272 90.1335 19.728C90.1335 19.1733 90.0215 18.6987 89.7975 18.304C89.5842 17.8987 89.2855 17.5893 88.9015 17.376C88.5175 17.1627 88.0855 17.056 87.6055 17.056C87.1148 17.056 86.6775 17.1627 86.2935 17.376C85.9202 17.5893 85.6215 17.8987 85.3975 18.304C85.1735 18.6987 85.0615 19.1733 85.0615 19.728C85.0615 20.272 85.1735 20.7467 85.3975 21.152C85.6215 21.5573 85.9202 21.8667 86.2935 22.08C86.6775 22.2933 87.1095 22.4 87.5895 22.4ZM98.91 15.36C99.5927 15.36 100.201 15.4933 100.734 15.76C101.278 16.0267 101.705 16.4373 102.014 16.992C102.323 17.536 102.478 18.24 102.478 19.104V24H100.478V19.36C100.478 18.6027 100.297 18.0373 99.934 17.664C99.582 17.2907 99.086 17.104 98.446 17.104C97.9767 17.104 97.5607 17.2 97.198 17.392C96.8353 17.584 96.5527 17.872 96.35 18.256C96.158 18.6293 96.062 19.104 96.062 19.68V24H94.062V15.456H95.966V17.76L95.63 17.056C95.9287 16.512 96.3607 16.096 96.926 15.808C97.502 15.5093 98.1633 15.36 98.91 15.36Z" fill="#A60F2D"/>
        <ellipse cx="26.5" cy="18.5" rx="11.5" ry="10.5" fill="#A60F2D"/>
        <path d="M31.7489 19.1471C32.0837 18.7892 32.0837 18.2079 31.7489 17.85L27.4629 13.2684C27.1281 12.9105 26.5843 12.9105 26.2495 13.2684C25.9146 13.6264 25.9146 14.2077 26.2495 14.5656L29.0755 17.5837H20.8572C20.3831 17.5837 20 17.9932 20 18.5C20 19.0068 20.3831 19.4163 20.8572 19.4163H29.0728L26.2521 22.4344C25.9173 22.7923 25.9173 23.3736 26.2521 23.7316C26.587 24.0895 27.1308 24.0895 27.4656 23.7316L31.7515 19.15L31.7489 19.1471Z" fill="white"/>
      </svg>
    ),
    label: "Action",
    value: "action",
  },
];

const edit = (props) => {
  const { className, attributes, setAttributes } = props;
  const [showInlineLinkEdit, setShowInlineLinkEdit] = useState(false);
  const [showSidebarLinkEdit, setShowSidebarLinkEdit] = useState(false);

  function unlink() {
    setAttributes({
      buttonUrl: "",
      opensInNewTab: false,
    });
    setShowInlineLinkEdit(false);
  }

  function handleLinkChange(newLink) {
    setAttributes({
      buttonUrl: newLink.url,
      opensInNewTab: newLink.opensInNewTab,
    });
  }

  function toggleInlineLinkEditPopover() {
    setShowInlineLinkEdit((state) => !state);
  }

  function toggleSidebarLinkEditPopover() {
    setShowSidebarLinkEdit((state) => !state);
  }

  function setClassField(classField, prefix, value) {
    let classNames = attributes[classField] ?? "";

    let classArray = classNames.split(" ");

    let newClasses = [];

    if (Array.isArray(classArray)) {
      classArray.forEach((itemClass, index) => {
        if (!itemClass.includes(prefix)) {
          newClasses.push(itemClass);
        }
      });

      if ("" !== value) {
        newClasses.push(prefix + value);
      }
    }

    setAttributes({ [classField]: newClasses.join(" ") });
  }

  function getClassFieldValue(className, prefix) {
    let classArray = className.split(" ");

    let value = "";

    if (Array.isArray(classArray)) {
      classArray.forEach((itemClass, index) => {
        if (itemClass.includes(prefix)) {
          value = itemClass.replace(prefix, "");
        }
      });
    }

    return value;
  }

  const blockProps = useBlockProps({
    className: "wsu-cta",
    style: {},
  });

  return (
    <>
      <BlockControls>
        <ToolbarGroup>
          <ToolbarButton
            icon="admin-links"
            onClick={toggleInlineLinkEditPopover}
          />

          {attributes.buttonUrl && (
            <ToolbarButton
              icon="editor-unlink"
              isPressed={true}
              onClick={unlink}
            />
          )}

          {showInlineLinkEdit && (
            <Popover
              position="bottom right"
              focusOnMount={false}
              onClose={toggleInlineLinkEditPopover}
            >
              <LinkControl
                settings={[]}
                value={{
                  url: attributes.buttonUrl,
                  opensInNewTab: attributes.opensInNewTab,
                }}
                onChange={handleLinkChange}
              />
            </Popover>
          )}
        </ToolbarGroup>
      </BlockControls>

      <InspectorControls>
        <PanelBody title="General" initialOpen={true}>
          <PanelRow>
            <TextControl
              label="Button Text"
              help=""
              placeholder="Button Text"
              value={attributes.buttonText}
              onChange={(val) =>
                setAttributes({ buttonText: val.replace(/<[^>]+>/g, "") })
              }
            />
          </PanelRow>

          <PanelRow>
            <BaseControl className="wsu-settings__base-control" help="">
              <BaseControl.VisualLabel className="wsu-settings__label">
                Clickthrough URL
              </BaseControl.VisualLabel>
              <URLPopover.LinkViewer
                url={attributes.buttonUrl}
                onEditLinkClick={toggleSidebarLinkEditPopover}
              />
              {showSidebarLinkEdit && (
                <Popover onClose={toggleSidebarLinkEditPopover}>
                  <LinkControl
                    settings={[]}
                    value={{
                      url: attributes.buttonUrl,
                      opensInNewTab: attributes.opensInNewTab,
                    }}
                    onChange={handleLinkChange}
                  />
                </Popover>
              )}
            </BaseControl>
          </PanelRow>
        </PanelBody>

        <PanelStyleOptions
          {...props}
          styles={buttonStyles}
          prefix="wsu-button--style-"
          setKey="buttonClassName"
        ></PanelStyleOptions>

        <PanelBody title="Display Options" initialOpen={false}>
          <PanelRow>
            <BaseControl className="wsu-settings__base-control" help="">
              <BaseControl.VisualLabel className="wsu-settings__label">
                Size
              </BaseControl.VisualLabel>
              <RadioGroup
                className="wsu-gutenberg-button__radio-group"
                onChange={(val) =>
                  setClassName(
                    attributes.buttonClassName,
                    "wsu-button--size-",
                    val,
                    setAttributes,
                    "buttonClassName"
                  )
                }
                checked={getBlockClassNameValue(
                  attributes.buttonClassName,
                  "wsu-button--size-"
                )}
                defaultChecked=""
              >
                <Radio value="small">Small</Radio>
                <Radio value="">Default</Radio>
                <Radio value="large">Large</Radio>
              </RadioGroup>
            </BaseControl>
          </PanelRow>
          <PanelRow>
            <BaseControl className="wsu-settings__base-control" help="">
              <BaseControl.VisualLabel className="wsu-settings__label">
                Width
              </BaseControl.VisualLabel>
              <RadioGroup
                className="wsu-gutenberg-button__radio-group"
                onChange={(val) =>
                  setBlockClassName(
                    attributes,
                    setAttributes,
                    "wsu-cta--width-",
                    val
                  )
                }
                checked={getBlockClassNameValue(attributes, "wsu-cta--width-")}
                defaultChecked=""
              >
                <Radio value="inline">Inline</Radio>
                <Radio value="">Default</Radio>
                <Radio value="full">Full</Radio>
              </RadioGroup>
            </BaseControl>
          </PanelRow>
          <PanelRow>
            <FontIconPickerControl
              label="Before Icon"
              help=""
              value={attributes.iconBefore}
              onChange={(val) => setAttributes({ iconBefore: val })}
            ></FontIconPickerControl>
          </PanelRow>

          <PanelRow>
            <FontIconPickerControl
              label="After Icon"
              help=""
              value={attributes.iconAfter}
              onChange={(val) => setAttributes({ iconAfter: val })}
            ></FontIconPickerControl>
          </PanelRow>
        </PanelBody>
        <PanelAnimate { ...props } ></PanelAnimate>
        <SpacingClassNameSelector
					title="Space Settings"
					spaceSettings={[
						{
							label: 'Margin (Outside Spacing)',
							properties: [
								{
									label: 'Top',
									prefix: 'wsu-spacing-before--',                                        
									default: 'none',
								},
								{
									label: 'Bottom',
									prefix: 'wsu-spacing-after--',
									default: 'xmedium',                                        
								},
								{
									label: 'Left',
									prefix: 'wsu-spacing-margin-left--',									
									default: 'default',
								},
								{
									label: 'Right',
									prefix: 'wsu-spacing-margin-right--',									
									default: 'default',
								}
							]
						}
					]}
					{...props}>					
				</SpacingClassNameSelector>
      </InspectorControls>
      <InspectorAdvancedControls>
        <PanelRow>
          <TextControl
            label="Button CSS Class(es)"
            help="Classes will be applied to the block's wrapper. Separate multiple classes with spaces."
            value={attributes.buttonClassName}
            onChange={(buttonClassName) => setAttributes({ buttonClassName })}
          />
        </PanelRow>
        <TextControl
          label="Button aria-label"
          help="By default, an element will use its text content as the accessibility label. If an element has aria-label, the accessible name becomes the text that's used."
          value={attributes.buttonAriaLabel}
          onChange={(buttonAriaLabel) => setAttributes({ buttonAriaLabel })}
        />
        <ToggleControl
          label={"Align Bottom"}
          checked={hasBlockClassName(attributes, "wsu-align-item--flex-bottom")}
          onChange={(value) =>
            setBlockClassNameBool(
              attributes,
              setAttributes,
              "wsu-align-item--flex-bottom",
              value
            )
          }
          help='Parent container must have "Enable Align Bottom" activated (Advanced/Enable Align Bottom)'
        />
      </InspectorAdvancedControls>
      <BlockControls>
        <AlignmentToolbar
          value={getBlockClassNameValue(attributes, "wsu-text-align--")}
          onChange={(val) =>
            setBlockClassName(
              attributes,
              setAttributes,
              "wsu-text-align--",
              val
            )
          }
        />
      </BlockControls>
      <div {...blockProps}>
        <a className={"wsu-button " + attributes.buttonClassName}>
          {attributes.iconBefore && (
            <i className={`wsu-icon wsu-i-${attributes.iconBefore}`}></i>
          )}
          <RichText
            allowedFormats={['core/italic']}
            withoutInteractiveFormatting={true}
            disableLineBreaks={true}
            multiline={false}
            placeholder="Button Text"
            tagName="span"
            onChange={(val) =>
              setAttributes({ buttonText: val.replace(/<[^>]+>/g, "") })
            }
            value={attributes.buttonText}
          />
          {attributes.iconAfter && (
            <i className={`wsu-icon wsu-i-${attributes.iconAfter}`}></i>
          )}
        </a>
      </div>
    </>
  );
};

export default edit;
