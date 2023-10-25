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


const doDirectorySearch = async ( term, callback ) => {

    let data = { 
        term,
        inherit_children:1,
    }

    let response = await fetch(
        addQueryArgs( 'https://people.wsu.edu/wp-json/peopleapi/v1/directory/search', data )
    )

    const directories = await response.json();

    if ( directories ) {

        callback( directories );

    }

}

  

const SelectDirectoryControl = (props) => {

    let {
        onSelect,
        directory,
    } = props;

    const [searchResults, setSearchResults] = useState([]);
    const [searchTerm, setSearchTerm]       = useState('');

    let hasResults     = searchResults.length ? true : false;
    let hasDirectory   = directory && directory.hasOwnProperty('title') ? true : false;
    let directoryTitle = directory && directory.hasOwnProperty('title') ? directory.title : 'None Selected';
    let directoryEdit  = directory && directory.hasOwnProperty('editLink') ? directory.editLink : false;



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
                <button onClick={() =>{ onSelect( {id, title, editLink } ); setSearchResults([]); setSearchTerm('') } }>
                    <span className="wsu-select-directory-control-result__title">{title}</span>
                    <span className="wsu-select-directory-control-result__path">{pathArray.join(' / ')}</span>
                </button>
            </li>
        )
    
    }

    return (
        <div className="wsu-select-directory-control__select">
            { hasDirectory && <><div className="wsu-select-directory-control__selected-card">
                <h4 className="wsu-select-directory-control__selected-title">{directoryTitle}</h4>
                <a className="wsu-select-directory-control__selected-edit" href={directoryEdit}>Edit Directory</a>
            </div>
            <div className="wsu-select-directory-control__selected-remove-wrapper">
                <button className="wsu-select-directory-control__selected-remove" onClick={() =>{ onSelect( {} ) } } >Remove Directory</button>
            </div></> }
            { ! hasDirectory && <><TextControl
                label="Search for Directory"
                placeholder="Directory Name"
                value={searchTerm}
                onChange={(term) => { updateSearchTerm( term ) } }
            />
            <ul className="wsu-select-directory-control-result__wrapper">
                {searchResults.map( ( result ) => { return ( <SelectDirectoryControlResult { ...result } />) } ) }
            </ul>
            </> }
        </div>
    )
}

export default SelectDirectoryControl;