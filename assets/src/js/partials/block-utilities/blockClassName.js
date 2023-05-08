/**
 * Add a class prefix/value to a given string of classnames.
 * 
 * @param { string } classString String of class names
 * @param {string } prefix Previx of class to add or remove
 * @param { string } value Value to append to prefix
 * @param { boolean } remove Remove class names with matching prefixes
 * @returns String of classnames
 */

const addClassName = ( classString, prefix, value, remove=true ) => {

    let classNames = classString ?? '';

    let classArray = classNames.split(' ');

    let newClasses = [];

    if ( Array.isArray( classArray ) ) {

        classArray.forEach( ( itemClass, index ) => {

            if ( ! itemClass.includes( prefix ) ) {

                newClasses.push( itemClass );

            }

        } );

        if ( '' !== value ) {

            newClasses.push( prefix + value );

        }

    }

    return newClasses.join(' ');

}

/**
 * Add class names from block attributes
 * 
 * @param { object } attributes | Block attributes
 * @param { string } prefix | Class prefix to attach value to
 * @param { string } value | Value to append to class prefix 
 * @param { boolean } remove | Remove matching class prefixes 
 * @returns { string } String of class values
 */

const addBlockClassName = ( attributes, prefix, value, remove = true ) => {

    let classNames;

    if ( typeof attributes === 'object' ) {

        classNames = attributes.className ?? '';

    } else {

        classNames = attributes ?? '';
        
    }

    return addClassName( classNames, prefix, value, remove );

}

const hasBlockClassName = ( attributes, value, setKey = 'className' ) => {

    let classNames;

    if ( typeof attributes === 'object' ) {

        classNames = attributes[ setKey ] ?? '';

    } else {

        classNames = attributes ?? '';
        
    }

    return ( classNames.includes( value ) ) ? true : false;

}

const getBlockClassName = ( className, prefix ) => {

    let classArray = className.split(' ');

    let value = '';

    if ( Array.isArray( classArray ) ) {

        classArray.forEach( ( itemClass, index ) => {

            if ( itemClass.includes( prefix ) ) {

                value = itemClass.replace( prefix, '' );

            }

        } );

    }

    return value;

}

const getClassNameValue = ( classesString, prefix, defaultValue ='' ) => {

    let className = classesString ?? '';

    let classArray = className.split(' ');

    let value = defaultValue;

    if ( Array.isArray( classArray ) ) {

        classArray.forEach( ( itemClass, index ) => {

            if ( itemClass.includes( prefix ) ) {

                value = itemClass.replace( prefix, '' );

            }

        } );

    }

    return value;

}


const getBlockClassNameValue = ( attributes, prefix, defaultValue = '', setKey = 'className' ) => {

    let className;

    if ( typeof attributes === 'object' ) {

        className = attributes[ setKey ] ?? '';

    } else {

        className = attributes ?? '';

    }

    return getClassNameValue( className, prefix, defaultValue );

}


const removeBlockClassName = ( className, prefix ) => {

    let classNames = className ?? '';

    let classArray = classNames.split(' ');

    let newClasses = [];

    if ( Array.isArray( classArray ) ) {

        classArray.forEach( ( itemClass, index ) => {

            if ( ! itemClass.includes( prefix ) ) {

                newClasses.push( itemClass );

            }

        } );

    }

    return newClasses.join(' ');

}

/**
 * @param { string } classesString | String of class names 
 * @param { string } prefix | Class Prefix to add 
 * @param { string } value | Value to append to class prefix 
 * @param { function } setAttributes | Block setAttributes method
 * @param { string } setKey | Attribute key to set 
 */
const setClassName = ( classesString, prefix, value, setAttributes, setKey = 'className' ) => {

    classesString = classesString ?? '';

    let classes = addClassName( classesString, prefix, value );

    setAttributes( { [ setKey ]: classes } );

}

/**
 * @param { object } attributes | String of class names
 * @param { function } setAttributes | Block setAttributes method
 * @param { string } prefix | Class Prefix to add 
 * @param { string } value | Value to append to class prefix 
 */
const setBlockClassName = ( attributes, setAttributes, prefix, value, setKey = 'className' ) => {

    let classNames;

    if ( typeof attributes === 'object' ) {

        classNames = attributes[ setKey ] ?? '';

    } else {

        classNames = attributes ?? '';
        
    }

    setClassName( classNames, prefix, value, setAttributes, setKey );

}


const setBlockClassBool = ( attributes, setAttributes, prefix, value, bool, setKey = 'className' ) => {

    value = ( bool ) ? value : '';

    setBlockClassName( attributes, setAttributes, prefix, value, setKey );

}


/**
 * LEGACY: setBlockClassNameBool | USE setBlockClassBool instead
 */
const setBlockClassNameBool = ( attributes, setAttributes, blockClass, value, setKey = 'className' ) => {

    let classNames;
    
    if ( typeof attributes === 'object' ) {

        classNames = attributes[ setKey ] ?? '';

    } else {

        classNames = attributes ?? '';
        
    }

    let classArray = classNames.split(' ');

    let newClasses = [];

    if ( Array.isArray( classArray ) ) {

        classArray.forEach( ( itemClass, index ) => {

            if ( itemClass != blockClass ) {

                newClasses.push( itemClass );

            }

        } );

        if ( value ) {

            newClasses.push( blockClass );

        }

    }

    setAttributes( { className: newClasses.join(' ') } );

}

const setChildBlockClassName = ( clientId, prefix, value, setKey = 'className' ) => {

    let children = wp.data.select('core/editor').getBlocksByClientId(clientId)[0].innerBlocks;

    children.forEach(function ( child, index) {

        let attributes = wp.data.select( 'core/editor' ).getBlockAttributes( child.clientId )

        let classNames = addBlockClassName( attributes, prefix, value );

        wp.data.dispatch( 'core/editor' ).updateBlockAttributes( child.clientId, { className: classNames } );

    });

}



export { addBlockClassName, hasBlockClassName, getBlockClassName, getBlockClassNameValue, removeBlockClassName, setClassName, setBlockClassName, setBlockClassBool, setBlockClassNameBool, setChildBlockClassName } 