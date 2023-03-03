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
 import save from './save';
 
 registerBlockType(
     "wsuwp/overlap-spotlight",
     {
        apiVersion: 2, 
        title: "Overlap Spotlight",
         category: "design",
         icon: <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
         <rect x="12" y="12" width="25" height="25" rx="1" stroke="#333333" stroke-width="2" fill="#333333"/>
         <rect x="1" y="1" width="25" height="25" rx="1" stroke="#333333" stroke-width="2" fill="white"/>
         </svg>
         ,
         attributes: {
            className: {
                type: 'string'
            },
            overlap: {
                type: 'string',
                defalut: 'xxmedium'
            },
            captionClasses: {
                type: 'string'
            },
            imageClasses: {
                type: 'string'
            },
            imageId: {
                type: "integer",
                default: 0,
            },
            imageSrc: {
                type: "string",
                default: "",
            },
            imageAlt: {
                type: "string",
                default: "", 
            },
            imageRatio: {
                type: "string",
                default: "auto",
            },
            customImageAlt: {
                type: 'boolean',
                default: false,
            },
            imageFocalPoint: {
                type: "object",
                default: {
                  x: 0.5,
                  y: 0.5,
                },
            },
         },
         edit, 
         save
     }
 );
 