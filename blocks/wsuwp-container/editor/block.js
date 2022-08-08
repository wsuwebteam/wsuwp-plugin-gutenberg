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
     "wsuwp/container",
     {
         title: "Generic Container",
         apiVersion: 2, 
         category: "design",
         icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><rect x="5.83" y="4.88" width="36.34" height="38.25" fill="#fff" stroke="#231f20" stroke-miterlimit="10" stroke-width="4"/><path d="M25.29,19.75c0-1-1-1.66-2.29-1.66A3.67,3.67,0,0,0,19.75,20l-3.87-2.08C17.26,15.56,19.78,14,23.6,14c4,0,6.86,1.72,6.86,4.89,0,4.06-4.26,4.65-4.26,7H21.57C21.57,22.56,25.29,21.7,25.29,19.75ZM21,30.1a2.71,2.71,0,0,1,2.94-2.68,2.74,2.74,0,0,1,3,2.68,2.79,2.79,0,0,1-3,2.73A2.76,2.76,0,0,1,21,30.1Z" fill="#231f20"/><rect width="48" height="48" fill="none"/></svg>,
         attributes: {
            tag: {
                type: "string",
                default: "div",
            },
            id: {
                type: 'string',
                default: '',
            },
         },
         edit,
         save
     }
 );