import { ToggleControl } from '@wordpress/components';
import { hasBlockClassName, setBlockClassBool } from '../block-utilities/blockUtilities';

const NotchControl = ( props ) => {

    let {
        attributes, 
        setAttributes,
        label="Enable Notch",
        help='',
        classKey = 'className',
    } = props;

    return (
        <ToggleControl
            label={ label }
            help={ help }
            classkey={ classKey }
            checked={ hasBlockClassName( attributes, 'wsu-notch--medium', classKey ) }
			onChange={ ( dropShadow ) => { setBlockClassBool( attributes, setAttributes, 'wsu-notch--', 'medium', dropShadow, classKey ) } }
            />
    )
    
} 

export default NotchControl;