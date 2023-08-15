import { ToggleControl } from '@wordpress/components';
import { hasBlockClassName, setBlockClassBool } from '../block-utilities/blockUtilities';

const ColorSchemeControl = ( props ) => {

    let {
        attributes, 
        setAttributes,
        label="Enable Dark Mode",
        help='',
        classKey = 'className',
    } = props;

    return (
        <ToggleControl
            label={ label }
            help={ help }
            classkey={ classKey }
            checked={ hasBlockClassName( attributes, 'wsu-color-scheme--dark', classKey ) }
			onChange={ ( colorScheme ) => { setBlockClassBool( attributes, setAttributes, 'wsu-color-scheme--', 'dark', colorScheme, classKey ) } }
            />
    )
    
} 

export default ColorSchemeControl;