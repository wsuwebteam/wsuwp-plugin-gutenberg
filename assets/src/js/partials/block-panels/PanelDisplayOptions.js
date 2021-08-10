import { Panel, PanelBody, PanelRow } from '@wordpress/components';

const PanelDisplayOptions= ( props ) => {


    return (
            <PanelBody title="Display Options" initialOpen={false} >
                {props.children}
            </PanelBody>

    )

}

export default PanelDisplayOptions;