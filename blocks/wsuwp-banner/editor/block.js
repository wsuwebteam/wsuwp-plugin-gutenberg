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
     "wsuwp/banner",
     {
         title: "Page Banner (Beta)",
         apiVersion: 2, 
         category: "design",
         icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><rect width="48" height="48" fill="none"/><rect y="8.79" width="48" height="30.42" fill="#231f20"/><polygon points="19.09 14.21 6.08 32.95 19.33 32.95 26.44 24.04 19.09 14.21" fill="#fff"/><polyline points="21.91 32.95 32.54 20.46 41.51 32.95" fill="#fff"/></svg>,
         attributes: {
            imageId: {
                type: 'integer',
                default: 0,
            },
            imageSrc: {
                type: 'string',
                default: '',
            },
            id: {
                type: 'string',
                default: '',
            },
         },
         edit,
 
     }
 );