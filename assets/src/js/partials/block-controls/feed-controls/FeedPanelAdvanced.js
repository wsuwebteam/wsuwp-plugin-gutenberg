import { PanelBody } from '@wordpress/components';

const FeedPanelAdvanced = ( props ) => {

    let {
        isOpen=false,
    } = props


    return (
            <PanelBody title="Advanced Feed Options" initialOpen={isOpen} >
                {props.children}
            </PanelBody>

    )

}

export default FeedPanelAdvanced;