import { ToggleControl } from '@wordpress/components';
import { hasBlockClassName, setBlockClassNameBool } from '../block-utilities/blockUtilities';

const DropShadowControl = ( props ) => {

    let {
        attributes, 
        setAttributes,
        label="Enable Drop Shadow",
        classKey = 'className',
    } = props;

    return (
        <ToggleControl
            label={ label }
            classkey={classKey}
            checked={ hasBlockClassName( attributes, 'wsu-dropshadow--medium', classKey ) }
			onChange={ ( dropShadow ) => { setBlockClassNameBool( attributes, setAttributes, 'wsu-dropshadow--medium', dropShadow, classKey ) } }
            />
    )
    
} 

export default DropShadowControl;