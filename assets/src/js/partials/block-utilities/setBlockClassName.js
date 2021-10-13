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

export default setBlockClassName;