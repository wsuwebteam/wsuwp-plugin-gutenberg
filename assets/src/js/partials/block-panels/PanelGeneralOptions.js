import { Panel, PanelBody, PanelRow } from '@wordpress/components';

const PanelGeneralOptions= ( props ) => {


    return (
            <PanelBody title="General Options" initialOpen={true} >
                {props.children}
            </PanelBody>

    )

}

export default PanelGeneralOptions;