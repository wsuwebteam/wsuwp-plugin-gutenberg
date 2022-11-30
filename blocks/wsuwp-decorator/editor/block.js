/**
 *
 * WordPress Dependencies
 *
 */
 const { __ } = wp.i18n;
 const { registerBlockType } = wp.blocks;
 const {
     Icon
 } = wp.components;
 
 import edit from "./edit";
 
 registerBlockType(
     "wsuwp/decorator",
     {
         title: "Decorator",
         apiVersion: 2, 
         category: "design",
         icon: <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path fill-rule="evenodd" clip-rule="evenodd" d="M10 17.6827V16.2022L11.0919 15L11.7642 15.7402L10 17.6827ZM10 22.0867V20.6062L15.0919 15L15.7642 15.7402L10 22.0867ZM10 26.4908V25.0103L19.0919 15L19.7642 15.7402L10 26.4908ZM10 30.8949V29.4144L23.0919 15L23.7642 15.7402L10 30.8949ZM10 35.2989V33.8184L27.0919 15L27.7642 15.7402L10 35.2989ZM37 34.9194V36.3999L36.6723 36.7607L36 36.0205L37 34.9194ZM37 30.5154V31.9959L32.6723 36.7607L32 36.0205L37 30.5154ZM37 26.1113V27.5918L28.6723 36.7607L28 36.0205L37 26.1113ZM37 21.7073V23.1878L24.6723 36.7607L24 36.0205L37 21.7073ZM37 17.3032V18.7837L20.6723 36.7607L20 36.0205L37 17.3032ZM31.0919 15L12 36.0205L12.6723 36.7607L31.7642 15.7402L31.0919 15ZM16 36.0205L35.0919 15L35.7642 15.7402L16.6723 36.7607L16 36.0205Z" fill="#1E1E1E"/>
         <rect x="1" y="1" width="25" height="25" rx="1" fill="white" stroke="#333333" stroke-width="2"/>
         </svg>
         ,
         attributes: {
            top: {
                type: "string",
                default: "",
            },
            bottom: {
                type: "string",
                default: "",
            },
            left: {
                type: "string",
                default: "",
            },
            right: {
                type: "string",
                default: "",
            },
            width: {
                type: "string",
                default: "",
            },
            height: {
                type: "string",
                default: "",
            },
         },
         edit
     }
 );