import { PanelBody } from '@wordpress/components';

const FeedPanel = ( props ) => {

    let {
        isOpen=false,
    } = props


    return (
            <PanelBody title="Feed Options" initialOpen={isOpen} >
                {props.children}
            </PanelBody>

    )

}

export default FeedPanel;