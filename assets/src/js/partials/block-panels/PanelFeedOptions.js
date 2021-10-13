import { PanelBody } from '@wordpress/components';

const PanelFeedOptions = ( props ) => {


    return (
            <PanelBody title="Feed Options" initialOpen={false} >
                {props.children}
            </PanelBody>

    )

}

export default PanelFeedOptions;