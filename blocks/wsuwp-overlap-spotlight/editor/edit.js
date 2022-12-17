import { InnerBlocks, InspectorControls, useBlockProps, InspectorAdvancedControls} from '@wordpress/block-editor';
import { ColorClassNameSelector, SpacingClassNameSelector, BreakPointControl, ImageFrameControl } from '../../../assets/src/js/partials/block-controls/blockControls';
import { PanelStyleOptions } from "../../../assets/src/js/partials/block-panels/blockPanels";
import { useEffect, useState } from '@wordpress/element';

const {
    SelectControl,
	TextControl,
	ToggleControl,
	Panel, 
	PanelBody, 
	PanelRow
} = wp.components;

const overlapStyles = [
	{
		icon: <svg width="124" height="60" viewBox="0 0 124 60" fill="none" xmlns="http://www.w3.org/2000/svg">
		<rect width="124" height="60" fill="white"/>
		<rect x="46.157" width="60" height="60" fill="#373737"/>
		<rect x="50.5615" y="4.40442" width="50.9591" height="50.9591" stroke="white" fill="none"/>
		<path d="M66.1659 40H77.8528H80.5481H84.9613C86.176 40 87.157 38.9832 87.157 37.7326C87.157 37.317 87.0456 36.9088 86.8372 36.5525L82.0935 28.5258C81.9461 28.2771 81.6874 28.125 81.407 28.125C81.1267 28.125 80.868 28.2771 80.7206 28.5221L78.9885 31.4537L74.4639 24.0059C74.2267 23.6125 73.8063 23.375 73.357 23.375C72.9078 23.375 72.4909 23.6125 72.2502 24.0059L64.4661 36.8234C64.2649 37.1537 64.157 37.5359 64.157 37.9256C64.157 39.0723 65.0555 40 66.1659 40Z" fill="white"/>
		<rect x="18" y="9.10925" width="50.157" height="26.1297" fill="#F3F3F3"/>
		<rect x="23.1058" y="13.0137" width="39.6451" height="2.40273" rx="1.20137" fill="#5A5A5A"/>
		<rect x="23.7066" y="17.8192" width="36.041" height="1.20137" rx="0.600683" fill="#5A5A5A"/>
		<rect x="23.7066" y="29.2321" width="36.041" height="0.901024" rx="0.450512" fill="#5A5A5A"/>
		<rect x="23.7066" y="20.8226" width="36.041" height="1.20137" rx="0.600683" fill="#5A5A5A"/>
		<rect x="23.7066" y="23.8259" width="36.041" height="0.600683" rx="0.300341" fill="#5A5A5A"/>
		<rect x="23.7066" y="26.8293" width="36.041" height="0.600683" rx="0.300341" fill="#5A5A5A"/>
		</svg>,
		label: 'Content Top Left',
		value: 'left-top',
	},
	{
		icon: <svg width="124" height="60" viewBox="0 0 124 60" fill="none" xmlns="http://www.w3.org/2000/svg">
		<rect width="124" height="60" fill="white"/>
		<rect x="18" width="60" height="60" fill="#373737"/>
		<rect x="22.4044" y="4.40442" width="50.9591" height="50.9591" stroke="white" fill="none"/>
		<path d="M38.0089 40H49.6958H52.3911H56.8042C58.0189 40 59 38.9832 59 37.7326C59 37.317 58.8886 36.9088 58.6802 36.5525L53.9364 28.5258C53.7891 28.2771 53.5303 28.125 53.25 28.125C52.9697 28.125 52.7109 28.2771 52.5636 28.5221L50.8314 31.4537L46.3069 24.0059C46.0697 23.6125 45.6492 23.375 45.2 23.375C44.7508 23.375 44.3339 23.6125 44.0931 24.0059L36.3091 36.8234C36.1078 37.1537 36 37.5359 36 37.9256C36 39.0723 36.8984 40 38.0089 40Z" fill="white"/>
		<rect x="55.843" y="9.10925" width="50.157" height="26.1297" fill="#F3F3F3"/>
		<rect x="60.9488" y="13.0137" width="39.6451" height="2.40273" rx="1.20137" fill="#5A5A5A"/>
		<rect x="61.5495" y="17.8192" width="36.041" height="1.20137" rx="0.600683" fill="#5A5A5A"/>
		<rect x="61.5495" y="29.2321" width="36.041" height="0.901024" rx="0.450512" fill="#5A5A5A"/>
		<rect x="61.5495" y="20.8226" width="36.041" height="1.20137" rx="0.600683" fill="#5A5A5A"/>
		<rect x="61.5495" y="23.8259" width="36.041" height="0.600683" rx="0.300341" fill="#5A5A5A"/>
		<rect x="61.5495" y="26.8293" width="36.041" height="0.600683" rx="0.300341" fill="#5A5A5A"/>
		</svg>,
		label: 'Content Top Right',
		value: 'right-top',
	},
	{
		icon: <svg width="124" height="60" viewBox="0 0 124 60" fill="none" xmlns="http://www.w3.org/2000/svg">
		<rect width="124" height="60" fill="white"/>
		<rect x="46.01" width="60" height="60" fill="#373737"/>
		<path d="M66.0189 39H77.7058H80.4011H84.8142C86.0289 39 87.01 37.9832 87.01 36.7326C87.01 36.317 86.8986 35.9088 86.6902 35.5525L81.9464 27.5258C81.7991 27.2771 81.5403 27.125 81.26 27.125C80.9797 27.125 80.7209 27.2771 80.5736 27.5221L78.8414 30.4537L74.3169 23.0059C74.0797 22.6125 73.6592 22.375 73.21 22.375C72.7608 22.375 72.3439 22.6125 72.1031 23.0059L64.3191 35.8234C64.1178 36.1537 64.01 36.5359 64.01 36.9256C64.01 38.0723 64.9084 39 66.0189 39Z" fill="white"/>
		<rect x="50.4296" y="4.41962" width="51.1608" height="51.1608" stroke="white" fill="none"/>
		<rect x="18" y="18.0905" width="50.3518" height="25.9296" fill="#F3F3F3"/>
		<rect x="23.1256" y="22.3115" width="39.799" height="2.41206" rx="1.20603" fill="#5A5A5A"/>
		<rect x="23.7286" y="26.8342" width="36.1809" height="1.20603" rx="0.603015" fill="#5A5A5A"/>
		<rect x="23.7286" y="38.2914" width="36.1809" height="0.904523" rx="0.452261" fill="#5A5A5A"/>
		<rect x="23.7286" y="29.8492" width="36.1809" height="1.20603" rx="0.603015" fill="#5A5A5A"/>
		<rect x="23.7286" y="32.8643" width="36.1809" height="0.603015" rx="0.301508" fill="#5A5A5A"/>
		<rect x="23.7286" y="35.8794" width="36.1809" height="0.603015" rx="0.301508" fill="#5A5A5A"/>
		</svg>,
		label: 'Content Middle Left',
		value: 'left-middle',
	},
	{
		icon: <svg width="124" height="60" viewBox="0 0 124 60" fill="none" xmlns="http://www.w3.org/2000/svg">
		<rect width="124" height="60" fill="white"/>
		<rect x="18" width="60" height="60" fill="#373737"/>
		<path d="M38.0089 39H49.6958H52.3911H56.8042C58.0189 39 59 37.9832 59 36.7326C59 36.317 58.8886 35.9088 58.6802 35.5525L53.9364 27.5258C53.7891 27.2771 53.5303 27.125 53.25 27.125C52.9697 27.125 52.7109 27.2771 52.5636 27.5221L50.8314 30.4537L46.3069 23.0059C46.0697 22.6125 45.6492 22.375 45.2 22.375C44.7508 22.375 44.3339 22.6125 44.0931 23.0059L36.3091 35.8234C36.1078 36.1537 36 36.5359 36 36.9256C36 38.0723 36.8984 39 38.0089 39Z" fill="white"/>
		<rect x="22.4196" y="4.41962" width="51.1608" height="51.1608" stroke="white" fill="none"/>
		<rect x="55.99" y="18.0905" width="50.3518" height="25.9296" fill="#F3F3F3"/>
		<rect x="61.1156" y="22.3115" width="39.799" height="2.41206" rx="1.20603" fill="#5A5A5A"/>
		<rect x="61.7186" y="26.8342" width="36.1809" height="1.20603" rx="0.603015" fill="#5A5A5A"/>
		<rect x="61.7186" y="38.2914" width="36.1809" height="0.904523" rx="0.452261" fill="#5A5A5A"/>
		<rect x="61.7186" y="29.8492" width="36.1809" height="1.20603" rx="0.603015" fill="#5A5A5A"/>
		<rect x="61.7186" y="32.8643" width="36.1809" height="0.603015" rx="0.301508" fill="#5A5A5A"/>
		<rect x="61.7186" y="35.8794" width="36.1809" height="0.603015" rx="0.301508" fill="#5A5A5A"/>
		</svg>,
		label: 'Content Middle Right',
		value: 'right-middle',
	},
	{
		icon: <svg width="124" height="60" viewBox="0 0 124 60" fill="none" xmlns="http://www.w3.org/2000/svg">
		<rect width="124" height="60" fill="white"/>
		<rect x="23" y="47" width="37" height="1" rx="0.5" fill="#5A5A5A"/>
		<rect x="46" width="60" height="60" fill="#373737"/>
		<rect x="50.4196" y="4.41962" width="51.1608" height="51.1608" stroke="white" fill="none"/>
		<path d="M66.0089 39H77.6958H80.3911H84.8042C86.0189 39 87 37.9832 87 36.7326C87 36.317 86.8886 35.9088 86.6802 35.5525L81.9364 27.5258C81.7891 27.2771 81.5303 27.125 81.25 27.125C80.9697 27.125 80.7109 27.2771 80.5636 27.5221L78.8314 30.4537L74.3069 23.0059C74.0697 22.6125 73.6492 22.375 73.2 22.375C72.7508 22.375 72.3339 22.6125 72.0931 23.0059L64.3091 35.8234C64.1078 36.1537 64 36.5359 64 36.9256C64 38.0723 64.8984 39 66.0089 39Z" fill="white"/>
		<rect x="18" y="27" width="50" height="25" fill="#F3F3F3"/>
		<rect x="23" y="31" width="40" height="2" rx="1" fill="#5A5A5A"/>
		<rect x="23" y="35" width="37" height="1" rx="0.5" fill="#5A5A5A"/>
		<rect x="23" y="38" width="37" height="1" rx="0.5" fill="#5A5A5A"/>
		<rect x="23" y="41" width="37" height="1" rx="0.5" fill="#5A5A5A"/>
		<rect x="23" y="44" width="37" height="1" rx="0.5" fill="#5A5A5A"/>
		</svg>,
		label: 'Content Bottom Left',
		value: 'left-bottom',
	},
	{
		icon: <svg width="124" height="60" viewBox="0 0 124 60" fill="none" xmlns="http://www.w3.org/2000/svg">
		<rect width="124" height="60" fill="white"/>
		<rect x="18" width="60" height="60" fill="#373737"/>
		<rect x="22.4196" y="4.41962" width="51.1608" height="51.1608" stroke="white" fill="none"/>
		<path d="M38.0089 39H49.6958H52.3911H56.8042C58.0189 39 59 37.9832 59 36.7326C59 36.317 58.8886 35.9088 58.6802 35.5525L53.9364 27.5258C53.7891 27.2771 53.5303 27.125 53.25 27.125C52.9697 27.125 52.7109 27.2771 52.5636 27.5221L50.8314 30.4537L46.3069 23.0059C46.0697 22.6125 45.6492 22.375 45.2 22.375C44.7508 22.375 44.3339 22.6125 44.0931 23.0059L36.3091 35.8234C36.1078 36.1537 36 36.5359 36 36.9256C36 38.0723 36.8984 39 38.0089 39Z" fill="white"/>
		<rect x="56" y="27" width="50" height="25" fill="#F3F3F3"/>
		<rect x="61" y="31" width="40" height="2" rx="1" fill="#5A5A5A"/>
		<rect x="61" y="35" width="37" height="1" rx="0.5" fill="#5A5A5A"/>
		<rect x="61" y="47" width="37" height="1" rx="0.5" fill="#5A5A5A"/>
		<rect x="61" y="38" width="37" height="1" rx="0.5" fill="#5A5A5A"/>
		<rect x="61" y="41" width="37" height="1" rx="0.5" fill="#5A5A5A"/>
		<rect x="61" y="44" width="37" height="1" rx="0.5" fill="#5A5A5A"/>
		</svg>,
		label: 'Content Bottom Right',
		value: 'right-bottom',
	},
]

//import { Panel, PanelBody, PanelRow } from '@wordpress/components';

import { 
	PanelAnimate
} from "../../../assets/src/js/partials/block-panels/blockPanels";

const Edit = ( props ) => {
	const blockProps = useBlockProps( { 
        className: 'wsu-overlap wsu-overlap-spotlight', 
        style: {}, 
    } );

	let {
		attributes,
		setAttributes,
	} = props;

    return (
		<>
			<InspectorControls>
				<PanelStyleOptions isOpen={true}
					{...props} 
					styles={overlapStyles}
					prefix="wsu-overlap-spotlight--style-" 
					></PanelStyleOptions>

			</InspectorControls>
			<InspectorAdvancedControls>
				
			</InspectorAdvancedControls>
			<div { ...blockProps }>
				<div className="wsu-overlap__container">
					<div className="wsu-overlap__column">
						<div className="wsu-overlap__column-inner">
							<div className="wsu-overlap-spotlight__image">
								<div className="wsu-image-frame">
									<ImageFrameControl { ...props } />
								</div>
							</div>
						</div>
					</div>
					<div className="wsu-overlap__column wsu-overlap--surface-column">
						<div className="wsu-overlap__column-inner">
							<div className="wsu-overlap-spotlight__caption">
								<InnerBlocks
									templateLock={ false }
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
    )
}

export default Edit;