import { ToggleControl } from '@wordpress/components';

const DeveloperToolsControl = ( props ) => {

    let { attributes, setAttributes } = props;

    console.log( attributes );

    return (
        <>
            <ToggleControl
                label="Developer Tools"
                checked={ attributes.developerTools ?? '' }
                onChange={ ( developerTools ) => setAttributes( {developerTools} ) }
                help='Show developer tools panel.'
            />
        </>
    )
    
} 

export default DeveloperToolsControl;