import { SelectControl } from '@wordpress/components';

import { 
    addBlockClassName, 
    hasBlockClassName,
    getBlockClassName,
    removeBlockClassName,
    setBlockClassName,
    getBlockClassNameValue,
} from '../block-utilities/blockUtilities';

const BreakPointWidthControl = ( props ) => {

    let {
        label,
        value,
        setAttributes,
        attributes
    } = props


    return (
        <SelectControl
            label={ 'Width at ' + label  }
            value={ getBlockClassNameValue( attributes, 'wsu-break--' + value + '-' ) }
            onChange={ ( size ) => setBlockClassName( attributes, setAttributes, 'wsu-break--' + value + '-'  , size ) }
            options= { [
                {label:'N/A', value:''},
                {label:'Auto', value:'auto'},
                {label:'100%', value:'100'},
                {label:'66.66%', value:'66'},
                {label:'50%', value:'50'},
                {label:'33.33%', value:'33'},
                {label:'25%', value:'25'},
            ] }
        />
    )

}

const BreakPointControl = ( props ) => {

    let { attributes, setAttributes } = props;

    let defaultBreakPoints = [ 
        { label:'xxUltrawide (2400px)', value:'xxultrawide'},
        { label:'xUltrawide (1900px)', value:'xultrawide'},
        { label:'Ultrawide (1600px)', value:'ultrawide'},
        { label:'Desktop (1260px)', value:'desktop'},
        { label:'Tablet Large (992px)', value:'tablet-large'},
        { label:'Tablet Medium (860px)', value:'tablet-medium'},
        { label:'Tablet (768px)', value:'tablet'},
        { label:'Phone (576px)', value:'phone'},
        { label:'Phone Small (450px)', value:'phone-small'},
    ]

    return (
        <>
            { defaultBreakPoints.map( ( breakPoint ) => { return <BreakPointWidthControl {...breakPoint} {...props} /> } ) }
        </>
    )
    
} 

export default BreakPointControl;