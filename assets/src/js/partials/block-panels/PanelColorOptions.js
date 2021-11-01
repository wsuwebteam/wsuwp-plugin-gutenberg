import { Panel, PanelBody, PanelRow } from '@wordpress/components';

const PanelColorOptions= ( props ) => {

    let {
        isOpen=false,
    } = props


    return (
            <PanelBody title="Color Options" initialOpen={isOpen} >
                {props.children}
            </PanelBody>

    )

}

export default PanelColorOptions;