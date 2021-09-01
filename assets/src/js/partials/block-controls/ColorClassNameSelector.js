import { PanelColorSettings, getColorObjectByColorValue } from '@wordpress/block-editor';
import { find, filter } from 'lodash';

/*
 @example 
 <ColorClassNameSelector
    title="Color Settings"
    colorSettings={[
        {
            label: 'Background Color',
            prefix: 'wsu-color-background--',
            colors: [
                { name: 'Gray 85', color: '#262626', className: 'gray-85' },
                { name: 'Gray 95', color: '#080808', className: 'gray-95' },
            ],
        },
        {
            label: 'Text Color',
            prefix: 'wsu-color-text--',
            colors: [			
                { name: 'Gray 0', color: '#f7f7f7', className: 'gray-0' },
                { name: 'Gray 5', color: '#f2f2f2', className: 'gray-5' },
            ],
        }
    ]}
    {...props}>
</ColorClassNameSelector>
*/

/**
 * Functions just like the Wordpress color picker (PanelColorSettings), but instead of 
 * saving a color code it adds a class to the component className field.
 * Each color setting requires a prefix e.g. wsu-color-text--
 * Each color requires a className e.g. gray-10
 * The result will be a class of 'wsu-color-text--gray-10' added to the component className
 */
const ColorClassNameSelector = (props) => {
	const {
        title,
		attributes, 
		setAttributes,
        colorSettings
	} = props;

    function getColorSetting(prefix) {
        return find(colorSettings, (cs) => cs.prefix === prefix);
    }

    function getColorObjectByClassName(prefix, className){
        if( !className ) { return; }

        const colorName = className.replace(prefix, '');
        const colors = getColorSetting(prefix).colors;
        return find(colors, (c) => {
            return c.className === colorName;
        });
    }

    const getSelectedColorByPrefix = (prefix) => {
        if(!attributes.className) { return;}

        const appliedClasses = attributes.className.split(' ');
        const selectedColorClassName = find(appliedClasses, (c) => c.startsWith(prefix));
        return getColorObjectByClassName(prefix, selectedColorClassName)?.color;
    }

    const updateSelectedColors = (prefix, color) => {
        const colors = getColorSetting(prefix).colors;
        const colorObject = getColorObjectByColorValue(colors, color);
        const colorClass = colorObject ? prefix + colorObject.className : '';
        
        const appliedClasses = attributes.className?.split(' ') ?? [];
        const newClasses = filter(appliedClasses, (c) => !c.startsWith(prefix)).concat(colorClass);
        const newClassName = newClasses.map(function(c) {					
                return c.trim();
            })
            .filter((c) => c)
            .join(' ');	
        
        setAttributes( { className: newClassName });
    }

    return (
        <PanelColorSettings
            title={ title}
            colorSettings={
                colorSettings.map((cs) => {
                    return {                        
                        colors: cs.colors,
                        value: getSelectedColorByPrefix(cs.prefix),
                        onChange: (color) => { updateSelectedColors(cs.prefix, color) },
                        label: cs.label,
                    }
                })
            }
            disableCustomGradients={ true }
            disableCustomColors={ true }
        >
        </PanelColorSettings>
    );
}

export default ColorClassNameSelector;