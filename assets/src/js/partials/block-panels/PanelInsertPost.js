import { Panel, PanelBody, PanelRow } from '@wordpress/components';
import { SelectPost } from '../block-controls/blockControls';

const PanelInsertPost = ( props ) => {


    return (
            <PanelBody title="Select Post/Page">
                <SelectPost { ...props } />
            </PanelBody>

    )

}

export default PanelInsertPost;