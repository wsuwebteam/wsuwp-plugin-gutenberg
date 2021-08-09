const { __ } = wp.i18n;

const { InnerBlocks } = wp.blockEditor;

const {
	InspectorControls,
	useBlockProps
} = wp.blockEditor;

const {
	PanelBody,
	TextControl,
	SelectControl,
	Button,
	FocalPointPicker,
	BaseControl
} = wp.components;

import { FormatSelector } from "../../../assets/src/js/partials/block-controls/blockControls";

//import EditOptions from './edit-options';
//import { SpacingSelector, DecoratorControl,
	//SpacingPanelVertical } from '../../../block-controls';

const layoutOptions = [

	{
		label: 'Single',
		slug: 'single',
		icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M41 14C41 12.8954 40.1046 12 39 12H9C7.89543 12 7 12.8954 7 14V34C7 35.1046 7.89543 36 9 36H39C40.1046 36 41 35.1046 41 34V14ZM39 34V14H9V34H39Z" fill="black"/></svg>
	},
	{
		label: 'Halves',
		slug: 'halves',
		icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H25V34H39ZM23 34H9V14H23V34Z" fill="black"/></svg>
	},
	{
		label: 'Thirds',
		slug: 'thirds',
		icon: <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M41 14a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V14zM28.5 34h-9V14h9v20zm2 0V14H39v20h-8.5zm-13 0H9V14h8.5v20z" /></svg>
	},
	{
		label: 'Quarters',
		slug: 'quarters',
		icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M41 14C41 13.4696 40.7893 12.9609 40.4142 12.5858C40.0391 12.2107 39.5304 12 39 12H9C8.46957 12 7.96086 12.2107 7.58579 12.5858C7.21071 12.9609 7 13.4696 7 14V34C7 34.5304 7.21071 35.0391 7.58579 35.4142C7.96086 35.7893 8.46957 36 9 36H39C39.5304 36 40.0391 35.7893 40.4142 35.4142C40.7893 35.0391 41 34.5304 41 34V14ZM31 34H25V14H31V34ZM33 34V14H39V34H33ZM23 34H17V14H23V34ZM15 34H9V14H15V34Z" fill="black"/></svg>
	},
	{
		label: 'Sidebar Right',
		slug: 'sidebar-right',
		icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H30V34H39ZM28 34H9V14H28V34Z" fill="black"/></svg>
	},
	{
		label: 'Sidebar Left',
		slug: 'sidebar-left',
		icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H20V34H39ZM18 34H9V14H18V34Z" fill="black"/></svg>
	},
    {
		label: 'Sidebars',
		slug: 'sidebars',
		icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H20V34H39ZM18 34H9V14H18V34Z" fill="black"/></svg>
	}
];


const layoutTemplates = {
    'single': [
        ['wsuwp/column', {}, [[ 'core/paragraph', {  },[] ]]],
    ],
    'halves': [
        ['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
        ['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
    ],
    'thirds': [
        ['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
        ['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
        ['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
    ],
    'quarters': [
        ['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
        ['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
        ['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
        ['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
    ],
    'sidebar-right':[
        ['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
        ['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
    ],
    'sidebar-left':[
        ['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
        ['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
    ],
    'sidebars':[
        ['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
        ['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
		['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
    ],
}

const getColumnsTemplate = ( template ) => {

    return  template in layoutTemplates ? layoutTemplates[ template ] : [];

}

const Edit = ( { className, attributes, setAttributes } ) => {

	const blockProps = useBlockProps( {
        className: attributes.layout ? 'wsu-row wsu-row--' + attributes.layout : 'wsu-gutenberg-format-selector',
        style: {},
    } );

    if ( ! attributes.layout ) {

        return (
			<div { ...blockProps } >
            <FormatSelector 
                options={ layoutOptions }
                onSelect={ ( layout ) => { setAttributes( { layout } ) } }
                title='Select Layout' 
                />
			</div>
        )

    } else {

        return (

            <div { ...blockProps }  >
                <InnerBlocks
                    template={ attributes.layout in layoutTemplates ? layoutTemplates[ attributes.layout ] : [] }
                    templateLock={ "insert" }
                    allowedBlocks={ ['wsuwp/column'] }
                />
            </div>
        )
    }


    

	/*{ 
		if ( ! attributes.layout ) {

			return (
				<div className="wsu-c-columns-editor__wrapper">
					<div className="wsu-c-columns-editor__title">Select Column Layout</div>
					<ul className="wsu-c-columns-editor__options">
					{ columnFormats.map( ( layout ) => LayoutOption( layout, attributes, setAttributes ) ) }
					</ul>
				</div>
			)

		} else {
			return (
				<>
					{
						<InspectorControls>
							<DecoratorControl 
								decorators={attributes.decorators}
								onChange={ ( decoratorArray ) => { setAttributes( { decorators:decoratorArray } ) } }
								/>
							<PanelBody title="Style" initialOpen={false}>
								<SelectControl
									label="Background Color"
									value={attributes.backgroundColor}
									onChange={ (backgroundColor) => setAttributes( { backgroundColor } ) }
									options={[
										{ label: 'Default', value: 'default' },
										{ label: 'White', value: 'white' },
										{ label: 'Gray 5%', value: 'gray-5' },
										{ label: 'Gray 10%', value: 'gray-10' },
									]}
								/>
							</PanelBody>

							<SpacingPanelVertical attributes={attributes} setAttributes={setAttributes} />
						</InspectorControls>
					}
					<div className={'wsu-c-column__wrapper wsu-u-no-js wsu-c-columns--' + attributes.layout }  >
						<InnerBlocks
							template={ getColumnsTemplate( attributes ) }
							templateLock={ "insert" }
							allowedBlocks={ ['wsuwp/column'] }
						/>
					</div>
				</>
			)
		}
	}*/

}

export default Edit;
