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
     "wsuwp/card-group",
     {
         title: "Card Group",
         apiVersion: 2, 
         category: "design",
         icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs><clipPath id="b"><rect width="24" height="24"/></clipPath></defs><g id="a" clip-path="url(#b)"><rect width="24" height="24" fill="#fff"/><g transform="translate(2 2)" fill="#fff" stroke="#030000" stroke-width="2"><path d="M3,0H18a2,2,0,0,1,2,2V18a2,2,0,0,1-2,2H2a2,2,0,0,1-2-2V3A3,3,0,0,1,3,0Z" stroke="none"/><path d="M3,1H18a1,1,0,0,1,1,1V18a1,1,0,0,1-1,1H2a1,1,0,0,1-1-1V3A2,2,0,0,1,3,1Z" fill="none"/></g><rect width="14" height="10" rx="2" transform="translate(5 5)" fill="#0a0000"/><line x2="13" transform="translate(5.5 16.5)" fill="none" stroke="#060000" stroke-width="1"/><line x2="13" transform="translate(5.5 18.5)" fill="none" stroke="#070000" stroke-width="1"/></g></svg>,
         attributes: {
            imageId: {
                type: "string",
                default: "",
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
                default: "",
            },
            title: {
                type: "string",
                default: "",
            },
            caption: {
                type: "string",
                default: "",
            },
            columns: {
                type: "integer",
                default: 3,
            },
         },
         edit,
         save,
     }
 );