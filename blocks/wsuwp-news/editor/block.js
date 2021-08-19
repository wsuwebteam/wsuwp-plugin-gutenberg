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
     "wsuwp/news",
     {
         title: "News",
         apiVersion: 2, 
         category: "design",
         icon: <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M41 14a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V14zM28.5 34h-9V14h9v20zm2 0V14H39v20h-8.5zm-13 0H9V14h8.5v20z" /></svg>,
         attributes: {
            layout: {
                type: 'string',
                default: '',
            },
            type: {
                type: 'string',
                default: '',
            },
            useSelect: {
                type: 'boolean',
                default: false,
            },
            postIn: {
                 type: 'string',
                 default: '',
            },
            hideDate: {
                type: 'boolean',
                default: true,
            },
            hideCaption: {
                type: 'boolean',
                default: false,
            },
            hideImage: {
                type: 'boolean',
                default: false,
            },
            postType: {
                type: 'string',
                default: 'post',
            },
            taxonomy: {
                type: 'string',
                default: 'category',
            },
            terms: {
                type: 'string',
                default: '',
            },
            count: {
                type: 'string',
                default: '5',
            },
            offset: {
                type: 'string',
                default: '0',
            },
            useFeed: {
                type: 'boolean',
                default: false,
            },
            hideShownPosts: {
                type: 'boolean',
                default: false,
            },
            requireFirstImage: {
                type: 'boolean',
                default: false,
            },
            requireImage: {
                type: 'boolean',
                default: false,
            },
            buttonText: {
                type: 'string',
                default: '',
            },
            buttonLink: {
                type: 'string',
                default: '',
            },
            headerText: {
                type: 'string',
                default: '',
            },
            headerTag: {
                type: 'string',
                default: '',
            },
            headerLink: {
                type: 'string',
                default: '',
            },
            perRow: {
                type: 'string',
                default: '3',
            },
         },
         edit, 
         save
     }
 );

 import './variationCard';
 import './variationList';
