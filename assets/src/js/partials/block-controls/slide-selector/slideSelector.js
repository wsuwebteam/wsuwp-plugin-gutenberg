const {
	RangeControl,
} = wp.components;

import { 
    setBlockClassName, 
    getBlockClassNameValue 
} from '../../block-utilities/blockUtilities';


const SlideSelector = ( props ) => {

    const defaultSizes = [
        'none',
        'sxxsmall',
        'xxsmall',
        'xsmall',
        'small',
        'medium',
        'xmedium',
        'xxmedium',
        'large',
        'xlarge',
        'xxlarge',
        'sxxlarge',
        'hero',
        'xhero',
        'xxhero',
    ]

    let { 
        attributes, 
        setAttributes,
        label,
        sizes = [],
        classPrefix,
        help = '',
        defaultSize = '',
    } = props;

    const setSlideSelectorValue = ( value ) => {

        let slideValue = ( defaultSize === slideSizes[ value ] ) ? '' : slideSizes[ value ] ;

        setBlockClassName( attributes, setAttributes, classPrefix, slideValue );

    }

    const getSlideSelectorValue = ( value ) => {

        let slideValue = getBlockClassNameValue( attributes, classPrefix, '' );

        return ( slideValue ) ? slideSizes.indexOf( slideValue ) : slideSizes.indexOf( defaultSize );

    }

    const getSelectedLabel = ( slideValue ) => {

        return slideSizes[ slideValue ]

    }

    let slideSizes         = ( sizes.length ) ? sizes : defaultSizes;
    let selectedSlideValue = getSlideSelectorValue();
    let selectedSlideLabel = getSelectedLabel( selectedSlideValue );
    
    return (
        <RangeControl
            label={ label + ': ' + selectedSlideLabel }
            help= { help }
            value={ selectedSlideValue }
            onChange={ ( slideValue ) => setSlideSelectorValue(slideValue)  }
            withInputField={ false }
            renderTooltipContent={ ( value) => selectedSlideLabel }
            min={0}
            max={ ( slideSizes.length - 1 ) }
        />
    )
    
} 

export default SlideSelector;