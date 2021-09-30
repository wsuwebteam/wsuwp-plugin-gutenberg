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
     "wsuwp/pagetitle",
     {
         title: "Page Title",
         apiVersion: 2, 
         category: "design",
         icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.66955 8.60874C8.46034 8.60874 7.38339 8.98662 6.58984 9.72348V5H3V19.0193H6.58984V14.0691C6.58984 12.3686 7.47786 11.6507 8.63039 11.6507C9.66955 11.6507 10.3119 12.2742 10.3119 13.7479V19.0193H13.9018V13.1622C13.9018 9.988 12.0691 8.60874 9.66955 8.60874Z"/><path d="M14.8028 5.79354V8.68431H17.259V19.0193H21V5.79354H14.8028Z"/></svg>,
         attributes: {
            title: {
                type: 'string',
                default: '',
            },
         },
         edit
     }
 );