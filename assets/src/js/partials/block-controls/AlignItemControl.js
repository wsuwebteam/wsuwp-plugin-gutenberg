import { SelectControl } from '@wordpress/components';
import { SvgButtonGroupControl } from './blockControls';

import { 
    addBlockClassName, 
    hasBlockClassName,
    getBlockClassName,
    removeBlockClassName,
    setBlockClassName,
    getBlockClassNameValue,
} from '../block-utilities/blockUtilities';


const AlignItemControl = ( props ) => {

    let { attributes, setAttributes } = props;

    let buttonOptions = [
        { 
            label:'Align Left',
            value: 'left',
            svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><rect x="8.22" y="11.43" width="15.95" height="7.14" fill="#231f20"/><polygon points="2.98 15 7.01 18.57 7.01 11.43 2.98 15" fill="#231f20"/></svg>,
        },
        { 
            label:'Align Center',
            value: 'center',
            svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><rect x="7.82" y="11.43" width="14.53" height="7.14" fill="#231f20"/><polygon points="23.13 15 27.16 18.57 27.16 11.43 23.13 15" fill="#231f20"/><polygon points="6.93 15 2.89 11.43 2.89 18.57 6.93 15" fill="#231f20"/></svg>,
        },
        { 
            label:'Align Right',
            value: 'right',
            svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><rect x="5.34" y="11.43" width="16.37" height="7.14" fill="#231f20"/><polygon points="27.18 15 23.15 11.43 23.15 18.57 27.18 15" fill="#231f20"/></svg>,
        },
    ]


    return (
        <SvgButtonGroupControl 
            {...props}
            onClick={ ( value ) => { setBlockClassName( attributes, setAttributes, 'wsu-align-item--', value ) } }
            isActive={ ( value ) => { return false } }
            currentValue={ getBlockClassNameValue( attributes, 'wsu-align-item--') }
            label='Align Element'
            buttonOptions={ buttonOptions }
        />
    )
    
} 

export default AlignItemControl;