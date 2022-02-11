import { ToggleControl } from '@wordpress/components';

const FeedUseAndLogicControl = ( { attributes, setAttributes } ) => {

    return (
        <ToggleControl
            label="Use AND logic for terms"
            checked={ attributes.useAndLogic }
            onChange={ ( useAndLogic ) => { setAttributes( { useAndLogic } ) } }
            help='AND Logic limits results to only those that have ALL terms.'
            />
    )
    
} 

export default FeedUseAndLogicControl;