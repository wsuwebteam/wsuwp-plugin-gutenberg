

import { InnerBlocks, InspectorControls, useBlockProps} from '@wordpress/block-editor';
import { ColorClassNameSelector } from '../../../assets/src/js/partials/block-controls/blockControls'

const Edit = ( props ) => {
	const blockProps = useBlockProps( { 
        className: 'wsu-column', 
        style: {}, 
    } );

    return (
		<>
			<InspectorControls>
				<ColorClassNameSelector
					title="Color Settings"
					colorSettings={[
						{
							label: 'Background Color',
							prefix: 'wsu-color-background--',
							colors: [			
								{ name: 'Gray 0', color: '#f7f7f7', className: 'gray-0' },
								{ name: 'Gray 5', color: '#f2f2f2', className: 'gray-5' },
								{ name: 'Gray 10', color: '#e6e6e6', className: 'gray-10' },
								{ name: 'Gray 75', color: '#404040', className: 'gray-75' },
								{ name: 'Gray 85', color: '#262626', className: 'gray-85' },
								{ name: 'Gray 95', color: '#080808', className: 'gray-95' },
							],
						}
					]}
					{...props}>
				</ColorClassNameSelector>				
			</InspectorControls>

			<div { ...blockProps }  >
				<InnerBlocks
					templateLock={ false }
				/>
			</div>
		</>
    )




























// 	const { __ } = wp.i18n;

// const { InnerBlocks } = wp.blockEditor;

// const {
// 	InspectorControls,
// 	BlockControls,
// 	useBlockProps,
// 	PanelColorSettings,
// 	getColorObjectByColorValue
// } = wp.blockEditor;

// const {
// 	PanelBody,
// 	TextControl,
// 	SelectControl,
// 	Button,
// 	FocalPointPicker,
// 	BaseControl
// } = wp.components;

// const { 
// 	find,
// 	filter,
// 	reduce,
// 	uniq,
// 	difference,
// 	every,
// 	includes
// } = lodash;

// const {
// 	useState,
// 	useEffect
// } = React;

// const Edit = ( props ) => {
// 	const {
// 		className, 
// 		isSelected, 
// 		attributes, 
// 		setAttributes,
// 		colors = [			
// 			{ name: 'Gray 0', color: '#f7f7f7', className: 't-light wsu-color-background--gray-0' },
// 			{ name: 'Gray 5', color: '#f2f2f2', className: 'wsu-color-background--gray-5' },
// 			{ name: 'Gray 10', color: '#e6e6e6', className: 'wsu-color-background--gray-10' },
// 			{ name: 'Gray 75', color: '#404040', className: 't-dark wsu-color-background--gray-75' },
// 			{ name: 'Gray 85', color: '#262626', className: 't-dark wsu-color-background--gray-85' },
// 			{ name: 'Gray 95', color: '#080808', className: 't-dark wsu-color-background--gray-95' },
// 		],
// 		colors2 = [			
// 			{ name: 'Gray 0', color: '#f7f7f7', className: 't-light wsu-color-text--gray-0' },
// 			{ name: 'Gray 5', color: '#f2f2f2', className: 'wsu-color-text--gray-5' },
// 			{ name: 'Gray 10', color: '#e6e6e6', className: 'wsu-color-text--gray-10' },
// 		]
// 	} = props;	

// 	const [backgroundColor, setBackgroundColor] = useState();

// 	const blockProps = useBlockProps( { 
//         className: 'wsu-column', 
//         style: {}, 
//     } );

// 	const colorClassNames = uniq(reduce(colors, (acc, cur) => {
// 		return acc.concat(cur.className.split(' '));
// 	}, []));	

// 	function getColorObjectByClassName(colors, className){
// 		if( !className ) { return; }

// 		const appliedClasses = className.split(' ');

// 		return find(colors, (color) => {
// 			const colorClasses = color.className.split(' ');
// 			return every(colorClasses, (c) => includes(appliedClasses, c));
// 		});
// 	}

// 	const updateColor = (colorValue) => {
// 		const colorObject = getColorObjectByColorValue(colors, colorValue);
// 		let className = colorObject?.className ?? '';

// 		if( attributes.className )
// 		{
// 			const appliedClasses = attributes.className.split(' ');
// 			const newClasess = difference(appliedClasses, colorClassNames).concat(className);			
// 			className = newClasess.map(function(c) {					
// 					return c.trim();
// 				})
// 				.filter((c) => c)
// 				.join(' ');			
// 		}
		
// 		setAttributes( { className: className });
// 	}

// 	useEffect( () => {
// 		setBackgroundColor(getColorObjectByClassName(colors, attributes.className)?.color);
// 	}, [attributes.className])

//     return (
// 		<>
// 			<InspectorControls>
// 				<PanelColorSettings
// 					title={ 'Color Settings'  }
// 					colorSettings={ [
// 						{
// 							colors: colors,
// 							value: backgroundColor,
// 							onChange: updateColor,
// 							label: 'Background Color',
// 						},
// 						{
// 							colors: colors2,
// 							value: backgroundColor,
// 							onChange: updateColor,
// 							label: 'Background Color',
// 						}
// 					] }
// 					disableCustomGradients={ true }
// 					disableCustomColors={ true }
// 				>
// 				</PanelColorSettings>
// 			</InspectorControls>

// 			<div { ...blockProps }  >
// 				<InnerBlocks
// 					templateLock={ false }
// 				/>
// 			</div>
// 		</>
//     )










































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