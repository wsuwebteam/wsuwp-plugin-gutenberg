import React, { useState, useEffect } from "@wordpress/element";
const {
    TextControl,
    PanelBody,
    PanelRow,
    BaseControl,
    CheckboxControl,
    SelectControl,
    RangeControl,
    ToggleControl,
  } = wp.components;
import apiFetch from "@wordpress/api-fetch";
import { addQueryArgs } from '@wordpress/url';


const doDirectorySearch = ( term, callback ) => {

    let data = { 
        term,
        inherit_children:1,
    }

    apiFetch( {
        url: addQueryArgs( 'https://people.wsu.edu/wp-json/peopleapi/v1/directory/search', data ),
        //path: addQueryArgs( '/peopleapi/v1/directory/search', data ),
    }).then( ( response ) => {

        if ( response ) {

            callback( response );

        }

    });

}

  

const SelectDirectoryControl = (props) => {

    let {
        onSelect,
        directory,
    } = props;

    let directoryTitle = directory && directory.hasOwnProperty('title') ? directory.title : 'None Selected';
    let directoryEdit = directory && directory.hasOwnProperty('editLink') ? directory.editLink : false;



    const [searchResults, setSearchResults] = useState([]);
    const [searchTerm, setSearchTerm]       = useState('');

    useEffect( () => {

        
    }, [searchTerm] );


    const updateSearchTerm = ( newTerm ) => {

        setSearchTerm( newTerm );

        if ( newTerm.length > 2 ) {

            doDirectorySearch( searchTerm, setSearchResults );

        } else {

            if ( searchResults ) {
                setSearchResults([]);
            }

        }

    }

    /*const doSearch = ( term ) => {

        let data = { 
            term,
            inherit_children:1,
        }
    
        apiFetch( {
            url: addQueryArgs( 'https://people.wsu.edu/wp-json/peopleapi/v1/directory/search', data ),
            //path: addQueryArgs( '/peopleapi/v1/directory/search', data ),
        }).then( ( response ) => {

            console.log( response );

            if ( response ) {

                //setSearchResults( response );

            }
    
        });
    
    }*/


    const SelectDirectoryControlResult = ( props ) => {

        let {
            title,
            path,
            id,
            editLink,
        } = props;
    
        let pathArray = [];
    
        path.forEach( ( pathLevel ) => { pathArray.push( pathLevel.title ) } ); 
    
        
        return (
            <li className="wsu-select-directory-control-result">
                <button onClick={() =>{ onSelect( {id, title, editLink } ) } }>
                    <span className="wsu-select-directory-control-result__title">{title}</span>
                    <span className="wsu-select-directory-control-result__path">{pathArray.join('/')}</span>
                </button>
            </li>
        )
    
    }

    console.log( searchResults );

    return (
        <div>
            <div>
                <h3>Selected Directory</h3>
                <span>{directoryTitle}</span>
                {directoryEdit && <a href={directoryEdit}>Edit Directory</a> }
            </div>
            <button onClick={() =>{ onSelect( {} ) } } >X Remove Directory</button>
            <TextControl
                label="Search for Directory"
                help="Select a Directory to display"
                placeholder="Directory Name"
                value={searchTerm}
                onChange={(term) => { updateSearchTerm( term ) } }
              />
              <ul className="wsu-select-directory-control-result__wrapper">
                {searchResults.map( ( result ) => { return ( <SelectDirectoryControlResult { ...result } />) } ) }
              </ul>
        </div>
    )
}

export default SelectDirectoryControl;