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
     "wsuwp/callout",
     {
        apiVersion: 2, 
        title: "Aside / Callout",
         category: "design",
         icon: <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M0 2C0 0.89543 0.895431 0 2 0H25C26.1046 0 27 0.895431 27 2V5H0V2Z" fill="#1E1E1E"/>
         <rect x="4" y="9" width="19" height="2" rx="1" fill="#1E1E1E"/>
         <rect x="4" y="13" width="18" height="1" rx="0.5" fill="#1E1E1E"/>
         <rect x="4" y="16" width="18" height="1" rx="0.5" fill="#1E1E1E"/>
         <rect x="4" y="19" width="18" height="1" rx="0.5" fill="#1E1E1E"/>
         <path d="M1 6H26V22C26 22.5523 25.5523 23 25 23H2C1.44772 23 1 22.5523 1 22V6Z" stroke="#1E1E1E" stroke-width="2" fill="none"/>
         </svg>,
         attributes: {
            title: {
                type: 'string',
                default: '',
            },
            id: {
                type: 'string',
                default: '',
            },
            headingTag: {
               type: 'string',
               default: 'h3',
            },
            useAsideTag: {
                type: 'boolean',
                default: false,
             },
         },
         edit,
         save
     }
 );
 