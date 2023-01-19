import { SvgButtonGroupControl } from './blockControls';

import { 
    setBlockClassName,
    getBlockClassNameValue,
} from '../block-utilities/blockUtilities';


const BorderControl = ( props ) => {

    let { 
        attributes, 
        setAttributes, 
        classKey = 'className',
    } = props;

    let buttonOptions = [
        { 
            label:'Border Left',
            value: 'left',
            svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><rect x="3.41" y="3.18" width="23.18" height="23.63" fill="#fff" stroke="#bcbec0" stroke-miterlimit="10"/><line x1="3.41" y1="2.67" x2="3.41" y2="27.33" fill="none" stroke="#231f20" stroke-miterlimit="10" stroke-width="2"/></svg>,
        },
        { 
            label:'Border Top',
            value: 'top',
            svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><rect x="3.41" y="3.18" width="23.18" height="23.63" fill="#fff" stroke="#bcbec0" stroke-miterlimit="10"/><line x1="2.9" y1="3.52" x2="27.1" y2="3.52" fill="none" stroke="#231f20" stroke-miterlimit="10" stroke-width="2"/></svg>,
        },
        { 
            label:'Border Bottom',
            value: 'bottom',
            svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><rect x="3.41" y="3.27" width="23.18" height="23.63" fill="#fff" stroke="#bcbec0" stroke-miterlimit="10"/><line x1="2.9" y1="26.34" x2="27.1" y2="26.34" fill="none" stroke="#231f20" stroke-miterlimit="10" stroke-width="2"/></svg>,
        },
        { 
            label:'Border Right',
            value: 'right',
            svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><rect x="3.41" y="3.18" width="23.18" height="23.63" fill="#fff" stroke="#bcbec0" stroke-miterlimit="10"/><line x1="26.09" y1="2.67" x2="26.09" y2="27.33" fill="none" stroke="#231f20" stroke-miterlimit="10" stroke-width="2"/></svg>,
        },
    ]


    return (
        <SvgButtonGroupControl 
            {...props}
            onClick={ ( value ) => { setBlockClassName( attributes, setAttributes, 'wsu-border--add-', value, classKey ) } }
            isActive={ ( value ) => { return false } }
            currentValue={ getBlockClassNameValue( attributes, 'wsu-border--add-', '', classKey) }
            label='Add Border'
            buttonOptions={ buttonOptions }
        />
    )
    
} 

export default BorderControl;