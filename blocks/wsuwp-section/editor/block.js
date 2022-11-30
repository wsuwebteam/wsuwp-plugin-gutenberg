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
     "wsuwp/section",
     {
         title: "Section",
         apiVersion: 2, 
         category: "design",
         icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
         <rect x="8" y="13" width="32" height="22" rx="2" stroke="black" stroke-width="2" stroke-dasharray="4 4" fill="none"/>
         </svg>,
         attributes: {
            id: {
                type: 'string',
                default: '',
            },
         },
         edit,
         save
     }
 );