import { Panel, PanelBody, PanelRow } from '@wordpress/components';

const PanelDisplayOptions= ( props ) => {

    let {
        isOpen=false,
    } = props


    return (
            <PanelBody title="Display Options" initialOpen={isOpen} >
                {props.children}
            </PanelBody>

    )

}

export default PanelDisplayOptions;