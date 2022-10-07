import { SelectControl } from '@wordpress/components';

import { 
    setBlockClassName,
    getBlockClassNameValue,
} from '../block-utilities/blockUtilities';

const MaxWidthControl = ( props ) => {

    let { attributes, setAttributes } = props;

    return (
        <SelectControl
            label="Max Width"
            value={ getBlockClassNameValue( attributes, 'wsu-max-width--' ) }
            options={ [
                { label: 'None', value: '' },
                { label: 'Hero (1200px)', value: 'hero' },
                { label: 'xxLarge (1000px)', value: 'xxlarge' },
                { label: 'xLarge (900px)', value: 'xlarge' },
                { label: 'Large (800px)', value: 'large' },
                { label: 'xxMedium (693px)', value: 'xxmedium' },
                { label: 'xMedium (600px)', value: 'xmedium' },
                { label: 'Medium (506px)', value: 'medium' },
                { label: 'Small (400px)', value: 'small' },
                { label: 'xSmall (318px)', value: 'xsmall' },
                { label: 'xxSmall (225px)', value: 'xxsmall' },
                { label: 'sxxSmall (150px)', value: 'sxxsmall' },
            ] }
            onChange={ ( width ) => setBlockClassName( attributes, setAttributes, 'wsu-max-width--', width )  }
        />
    )
    
} 

export default MaxWidthControl;
