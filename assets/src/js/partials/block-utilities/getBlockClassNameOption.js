const getBlockClassNameOption = ( className, prefix ) => {

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

export default getBlockClassNameOption;