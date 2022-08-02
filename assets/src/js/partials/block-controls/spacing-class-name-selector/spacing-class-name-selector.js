import { Button, PanelBody, CustomSelectControl, Flex, FlexBlock } from '@wordpress/components';
import { find, filter } from 'lodash';

// TODO: 
// - Use desired names for spacing options


/*
 @example 
<SpacingClassNameSelector
    title="Spacing"
    spaceSettings={[
        {
            label: 'Outside Spacing (Margin)',
            properties: [
                {
                    label: 'Top',
                    prefix: 'wsu-spacing-before--',
                    ignoreOptions: ['none', 'xmedium', 'xxmedium'],									
                    default: 'small',
                },
                {
                    label: 'Bottom',
                    prefix: 'wsu-spacing-after--',
                    default: 'none',
                }
            ]
        },
        {
            label: 'Inside Spacing (Padding)',
            properties: [
                {
                    label: 'Top',
                    prefix: 'wsu-spacing-top--',
                    default: 'medium',
                },
                {
                    label: 'Bottom',
                    prefix: 'wsu-spacing-bottom--',
                    default: 'large',
                }
            ]
        }
    ]}
    {...props}>					
</SpacingClassNameSelector>
*/

const CSSNAMESPACE = 'wsu-gutenberg-spacing';
const ALLOPTIONS = [
    { key: 'default', name: 'default' },    
    { key: 'none', name: 'none' },
    { key: 'sxxsmall', name: 'sxxsmall' },
    { key: 'xxsmall', name: 'xxsmall' },
    { key: 'xsmall', name: 'xsmall' },
    { key: 'small', name: 'small' },
    { key: 'medium', name: 'medium' },
    { key: 'xmedium', name: 'xmedium' },
    { key: 'xxmedium', name: 'xxmedium' },
    { key: 'large', name: 'large' },
    { key: 'xlarge', name: 'xlarge' },
    { key: 'xxlarge', name: 'xxlarge' },
    { key: 'hero', name: 'hero' },
    { key: 'xhero', name: 'xhero' },
    { key: 'xxhero', name: 'xxhero' },
];

const SpacingClassNameSelector = (props) => {
	const {
        title = 'Space Settings',
		attributes, 
		setAttributes,
        spaceSettings
	} = props;

    function getOptionByKey(key){
        return find(ALLOPTIONS, (o) => {
            return o.key === key;
        });
    }

    function getOptionObjectByClassName(prefix, className){
        if( !className ) { return; }

        const optionKey = className.replace(prefix, '');        
        return getOptionByKey(optionKey);
    }

    const getSelectedValueByPrefix = (prefix) => {
        if(!attributes.className) { return; }

        const appliedClasses = attributes.className.split(' ');
        const selectedOptionClassName = find(appliedClasses, (c) => c.startsWith(prefix));
        return getOptionObjectByClassName(prefix, selectedOptionClassName);
    }    

    const getValueForProperty = (property) => {
        return getSelectedValueByPrefix(property.prefix) || getOptionByKey(property.default) || '';
    }

    const updateSelectedOptions = ( property, control ) => {
        let optionClass = '';
        
        // only apply className if it is not equal to the current default state
        if ( control &&            
            !( control.selectedItem.key === property.default )) 
        {
            optionClass = property.prefix + control.selectedItem.key;
        }        
        
        const appliedClasses = attributes.className?.split(' ') ?? [];
        const newClasses = filter(appliedClasses, (c) => !c.startsWith(property.prefix)).concat(optionClass);
        const newClassName = newClasses.map(function(c) {					
                return c.trim();
            })
            .filter((c) => c)
            .join(' ');	
        
        setAttributes( { className: newClassName });
    }

    const resetToDefault = (property) => {        
        updateSelectedOptions(property, null);
    }

    return (
        <PanelBody title={ title } initialOpen={false} className={ `${CSSNAMESPACE}` }>
            {spaceSettings.map( (spaceSetting) => {                
                return (
                    <div key={ spaceSetting.label } className={ `${CSSNAMESPACE}__setting` }>
                        <label className={ `${CSSNAMESPACE}__setting-label` }>
                            { spaceSetting.label }
                        </label>
                        <div className={ `${CSSNAMESPACE}__setting-properties` }>
                            {spaceSetting.properties.map( (property) => {
                                const options = ALLOPTIONS.filter( (o) => !property.ignoreOptions?.includes(o.key));

                                return (
                                    <div key={ property.label }>
                                        <CustomSelectControl
                                            label={ property.label }
                                            options={ options }
                                            onChange={ (control) => { updateSelectedOptions(property, control) } }
                                            value={ getValueForProperty(property) }                                            
                                        />
                                        <Button
                                            className={ `${CSSNAMESPACE}__reset-btn` }
                                            isSmall={ true }                                            
                                            onClick={ () => resetToDefault(property) }>
                                            Reset to Default
                                        </Button>
                                    </div>
                                )
                            })}
                        </div>      
                    </div>
                )
            })}
            {props.children}        
        </PanelBody>
    );
}

export default SpacingClassNameSelector;