const addBlockClassName = ( className, prefix, value, remove=true ) => {

    let classNames = className ?? '';

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

const hasBlockClassName = ( classNames, value ) => {

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

const getBlockClassNameValue = ( className, prefix ) => {

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

const setBlockClassName = ( attributes, setAttributes, prefix, value ) => {

    let classNames = attributes.className ?? '';

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

    setAttributes( { className: newClasses.join(' ') } );

}



export { addBlockClassName, hasBlockClassName, getBlockClassName, getBlockClassNameValue, removeBlockClassName, setBlockClassName } 