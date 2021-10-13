import { Button } from '@wordpress/components';
import { setBlockClassName } from '../../block-utilities/blockUtilities';

const ResetControl = ( props ) => {

    let { 
        attributes, 
        setAttributes, 
        prefix, 
        label='Reset',
    } = props;

    return (
        <Button
            className="wsu-block-control-reset"
            onClick={ () => setBlockClassName( attributes, setAttributes, prefix, '' ) }
        >{ label }</Button>
    )
    
} 

export default ResetControl;