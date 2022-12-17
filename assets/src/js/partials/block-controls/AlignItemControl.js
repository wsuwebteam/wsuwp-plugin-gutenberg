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
            svg: <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 19.8h8.9v-1.5H4v1.5zm8.9-15.6H4v1.5h8.9V4.2zm-8.9 7v1.5h16v-1.5H4z"></path></svg>,
        },
        { 
            label:'Align Center',
            value: 'center',
            svg: <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M16.4 4.2H7.6v1.5h8.9V4.2zM4 11.2v1.5h16v-1.5H4zm3.6 8.6h8.9v-1.5H7.6v1.5z"></path></svg>,
        },
        { 
            label:'Align Right',
            value: 'right',
            svg: <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M11.1 19.8H20v-1.5h-8.9v1.5zm0-15.6v1.5H20V4.2h-8.9zM4 12.8h16v-1.5H4v1.5z"></path></svg>,
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