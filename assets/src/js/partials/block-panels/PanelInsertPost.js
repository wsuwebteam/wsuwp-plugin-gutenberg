import { Panel, PanelBody, PanelRow } from '@wordpress/components';
import { SelectPost } from '../block-controls/blockControls';

const PanelInsertPost = ( { } ) => {


    return (
            <PanelBody title="Select Post/Page">
                <SelectPost />
            </PanelBody>

    )

}

export default PanelInsertPost;