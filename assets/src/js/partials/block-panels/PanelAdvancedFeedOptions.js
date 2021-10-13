import { PanelBody } from '@wordpress/components';

const PanelAdvancedFeedOptions = ( props ) => {


    return (
            <PanelBody title="Advanced Feed Options" initialOpen={false} >
                {props.children}
            </PanelBody>

    )

}

export default PanelAdvancedFeedOptions;