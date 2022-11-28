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
     "wsuwp/overlap-advanced",
     {
         title: "(BETA) Overlap Advanced",
         apiVersion: 2, 
         category: "design",
         icon: <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
         <rect x="12" y="12" width="25" height="25" rx="1" fill="#333333" stroke="#333333" stroke-width="2"/>
         <rect x="1" y="1" width="25" height="25" rx="1" fill="white" stroke="#333333" stroke-width="2"/>
         <line x1="34" y1="1" x2="34" y2="7" stroke="#333333" stroke-width="2"/>
         <line x1="37" y1="4" x2="31" y2="4" stroke="#333333" stroke-width="2"/>
         </svg>
         ,
         attributes: {
            developerTools: {
                type: 'boolean',
                default: false,
            },
         },
         edit,
         save
     }
 );