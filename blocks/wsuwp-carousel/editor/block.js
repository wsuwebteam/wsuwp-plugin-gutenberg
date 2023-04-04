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
     "wsuwp/carousel",
     {
         title: "Carousel",
         apiVersion: 2, 
         category: "design",
         icon: <svg width="43" height="29" viewBox="0 0 43 29" fill="none" xmlns="http://www.w3.org/2000/svg">
         <rect x="13" y="1" width="17" height="27" rx="1" fill="#ffffff" stroke="#333333" stroke-width="2"/>
         <path d="M42.4331 13.3453C42.7585 13.7211 42.7585 14.2789 42.4331 14.6547L37.2559 20.6327C36.6498 21.3326 35.5 20.9039 35.5 19.978L35.5 8.02197C35.5 7.09609 36.6498 6.66741 37.2559 7.36732L42.4331 13.3453Z" fill="#333333"/>
         <path d="M0.566945 13.3453C0.241517 13.7211 0.241518 14.2789 0.566946 14.6547L5.74407 20.6327C6.35021 21.3326 7.5 20.9039 7.5 19.978L7.5 8.02197C7.5 7.09609 6.35021 6.66741 5.74407 7.36732L0.566945 13.3453Z" fill="#333333"/>
         </svg>
         
         ,
         attributes: {
            
            id: {
                type: 'string',
                default: '',
            },
            imageRatio: {
                type: "string",
                default: "16-9",
            },
            columns: {
                type: "integer",
                default: 3,
            },
            headingTag: {
                type: 'string',
                default: 'h3',
            },
            postType: {
                type: 'string',
                default: 'post',
            },
            taxonomy: {
                type: 'string',
                default: 'category',
            },
            termsSelected: {
                type: 'array',
                default: [],
            },
            terms: {
                type: 'string',
                default: '',
            },
            count: {
                type: 'string',
                default: '3',
            },
            offset: {
                type: 'string',
                default: '0',
            },
            host: {
                type: 'string',
                default: '',
            },
            useAndLogic: {
                type: 'boolean',
                default: false,
            },
            useFeed: {
                type: 'boolean',
                default: false,
            },
            doRelated: {
                type: 'boolean',
                default: false,
            },
            relatedTaxonomy: {
                type: 'string',
                default: 'category',
            },
            allowCustomCards: {
                type: 'boolean',
                default: false,
            },
            cardClassName: {
                type: 'string',
                default: '',
            },
            showHeading: {
                type: 'boolean',
                default: true,
            },
            showCaption: {
                type: 'boolean',
                default: true,
            },
            showImage: {
                type: 'boolean',
                default: true,
            },
         },
         edit,
         save,
     }
 );