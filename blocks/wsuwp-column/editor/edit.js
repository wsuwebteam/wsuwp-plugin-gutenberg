import { InnerBlocks, InspectorControls, useBlockProps} from '@wordpress/block-editor';
import { ColorClassNameSelector, SpacingClassNameSelector } from '../../../assets/src/js/partials/block-controls/blockControls';
import { useEffect, useState } from '@wordpress/element';

const DEFAULT_SPACING = {
	spaceBefore: 'none',
	spaceAfter: 'none',
	spaceTop: 'none',
	spaceBottom: 'none',
};

const Edit = ( props ) => {
	const blockProps = useBlockProps( { 
        className: 'wsu-column', 
        style: {}, 
    } );

	const [spacingDefaults, setSpacingDefaults] = useState(DEFAULT_SPACING);

	useEffect( () => {
		
		if(props.attributes.className && props.attributes.className.includes('wsu-color-background--')){
			setSpacingDefaults({
				spaceBefore: 'none',
				spaceAfter: 'xmedium',
				spaceTop: 'xmedium',
				spaceBottom: 'none',
			});
		}else{
			setSpacingDefaults(DEFAULT_SPACING);
		}
		
	}, [props.attributes.className]);

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
								{ name: 'White', color: '#ffffff', className: 'white' },			
								{ name: 'Gray 0', color: '#f7f7f7', className: 'gray-0' },
								{ name: 'Gray 5', color: '#f2f2f2', className: 'gray-5' },
								{ name: 'Gray 10', color: '#e6e6e6', className: 'gray-10' },
								{ name: 'Gray 85', color: '#262626', className: 'gray-85' },
								{ name: 'Gray 95', color: '#080808', className: 'gray-95' },
							],
						}
					]}
					{...props}>
				</ColorClassNameSelector>

				<SpacingClassNameSelector
					title="Space Settings"
					spaceSettings={[
						{
							label: 'Outside Spacing (Margin)',
							properties: [
								{
									label: 'Top',
									prefix: 'wsu-spacing-before--',									
									default: spacingDefaults['spaceBefore'],
								},
								{
									label: 'Bottom',
									prefix: 'wsu-spacing-after--',									
									default: spacingDefaults['spaceAfter'],
								}
							]
						},
						{
							label: 'Inside Spacing (Padding)',
							properties: [
								{
									label: 'Top',
									prefix: 'wsu-spacing-top--',
									default: spacingDefaults['spaceTop'],
								},
								{
									label: 'Bottom',
									prefix: 'wsu-spacing-bottom--',
									default: spacingDefaults['spaceBottom'],									
								}
							]
						}
					]}
					{...props}>					
				</SpacingClassNameSelector>

			</InspectorControls>

			<div { ...blockProps }  >
				<InnerBlocks
					templateLock={ false }
				/>
			</div>
		</>
    )
}

export default Edit;