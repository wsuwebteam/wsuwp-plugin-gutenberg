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
     "wsuwp/accordion",
     {
         title: "Accordion",
         apiVersion: 2, 
         category: "design",
         icon: <svg width="46" height="34" viewBox="0 0 46 34" fill="none" xmlns="http://www.w3.org/2000/svg">
         <line x1="39.64" y1="10.4" x2="39.64" y2="3.68002" stroke="#1E1E1E" stroke-width="2" fill="none"/>
         <line x1="36.44" y1="6.88" x2="43.16" y2="6.88001" stroke="#1E1E1E" stroke-width="2" fill="none"/>
         <rect x="1.84" y="1.84003" width="43.16" height="30.56" rx="2" stroke="#1E1E1E" stroke-width="2" fill="none"/>
         <line x1="44" y1="12.24" x2="2" y2="12.24" stroke="#1E1E1E" stroke-width="2" fill="none"/>
         <line x1="44" y1="22.32" x2="2" y2="22.32" stroke="#1E1E1E" stroke-width="2" fill="none"/>
         <line x1="34.92" y1="2" x2="34.92" y2="31.4" stroke="#1E1E1E" stroke-width="2" fill="none"/>
         </svg>,
         attributes: {
             title: {
                 type: 'string',
                 default: '',
             },
             headingTag: {
                type: 'string',
                default: 'h3',
            },
         },
         edit,
         save
     }
 );