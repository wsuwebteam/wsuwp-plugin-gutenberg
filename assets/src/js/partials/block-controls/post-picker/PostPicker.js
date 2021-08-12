import { __ } from '@wordpress/i18n';
import { TextControl, Button, Spinner, TextHighlight } from '@wordpress/components';
import { useDebounce } from '@wordpress/compose';
import { useState, useEffect, useRef } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import { decodeEntities } from '@wordpress/html-entities';

import { isEmpty } from 'lodash';

const CSSNAMESPACE = 'wsu-gutenberg-post-picker';

const PostPicker = ( props ) => {
    const { 
        attributes,
        onChange,
        label = '',
        postTypes = [ 'post', 'page' ],
        placeholder = 'Search posts...'
    } = props;

    const searchInputRef = useRef(null);
    const [searchString, setSearchString] = useState('');
	const [searchResults, setSearchResults] = useState([]);
	const [isLoading, setIsLoading] = useState(false);	
	const [selectedItems, setSelectedItems] = useState([]);
	const [latestPosts, setLatestPosts] = useState([]);
    const debouncedSetSearchString = useDebounce( ( value ) => setSearchString(value), 250);

    const handleItemSelection = (post) => {
        if(attributes.postIn.split(',').includes(post.id.toString())) { return; }

		setSelectedItems([...selectedItems, post]);
        onChange([...attributes.postIn.split(','), post.id.toString()].join(','));

		setSearchResults([]);
		setSearchString('');
		searchInputRef.current.value = '';
	}

    const handleItemRemove = (post) => {
        setSelectedItems(selectedItems.filter( (item) => (item.id !== post.id)));
        onChange(attributes.postIn
            .split(',')
            .filter((id) => (id !== post.id.toString()))
            .join(','));
    }

    const resetSearch = () => {
        setSearchResults([]);
        setIsLoading(false);
    };

    const getSelectedItems = async () => {
        if(attributes.postIn.split(',').length === 0){ return; }

        const params = `ids=${attributes.postIn}`;
        const response = await fetch('/wp-json/wsu-gutenberg/v1/get-posts-by-id?' + params);

        if ( !response.ok ) { return; }
        
        const posts = await response.json();
        setSelectedItems(JSON.parse(posts));
    };

    const getLatestPost = async () => {
        const params = `count=5&post_types=${postTypes}`;
        const response = await fetch('/wp-json/wsu-gutenberg/v1/get-latest-posts-for-post-types?' + params);

        if ( !response.ok ) { return; }
        
        const posts = await response.json();
        setLatestPosts(JSON.parse(posts));

        console.log(JSON.parse(posts));
    };

    useEffect( () => {        
        getSelectedItems();
        getLatestPost();        
    }, []);

    useEffect( () => {
        (async function handleSearch() {
            console.log('Called')
            if( isEmpty(searchString)){
                resetSearch();
                return;
            }

            setIsLoading(true);
            
            const params = `search_term=${searchString}&post_types=${postTypes}`;
            const response = await fetch('/wp-json/wsu-gutenberg/v1/search-posts?' + params);
            
            if ( !response.ok ) { return; }
            
            const posts = await response.json();
            setSearchResults(JSON.parse(posts));
            
            setIsLoading(false);            
        })();        
    }, [ searchString ] );

    return (
        <div className={ CSSNAMESPACE }>
            {selectedItems.length > 0 ? (
                <ul>
                {selectedItems.map( (post) => {
                    return (
                        <li key={ post.id }>
                            <Button 
                                className={ `${CSSNAMESPACE}__remove-btn` } 
                                icon="no-alt"
                                onClick={ () => handleItemRemove(post) }>
                                <span className={ `${CSSNAMESPACE}__remove-btn-text` }>
                                    {post.title}
                                </span>
                            </Button>
                        </li>
                    )
                })}
                </ul>
            ) : null }

            <TextControl
                ref={ searchInputRef }
                placeholder={ placeholder }
                label={ label }                
                onChange= { (value) => debouncedSetSearchString( value ) }
            />
            
            {isLoading && <Spinner />}

            {searchString.length ? (
                <ul
                    className={`${CSSNAMESPACE}__suggestion-list`}>
                    {!isLoading && !searchResults.length && (
                        <li className={`${CSSNAMESPACE}__suggestion-list-item`}>
                            {__('No Items found')}
                        </li>
                    )}
                    {searchResults.map((post, index) => {     
                        console.log(post);                   
                        return (
                            <li key={post.id} className={`${CSSNAMESPACE}__suggestion-list-item`}>
                                 <Suggestion
                                    onClick={() => handleItemSelection(post)}
                                    searchTerm={ searchString }
                                    suggestion={ post }
                                    isSelected={ attributes.postIn.split(',').includes(post.id.toString()) }
                                />
                            </li>
                        );
                    })}
                </ul>
            ) : postTypes.map( (postType) =>                    
                    latestPosts[postType]?.length > 0 && <SuggestionList
                        attributes={ attributes }
                        suggestions={ latestPosts[postType] }
                        searchTerm={ searchString }
                        onItemSelect={ handleItemSelection }
                    />                
            )}
        </div>        
    )

}

function SuggestionList( props ) {
    const {
        attributes,
        suggestions,
        onItemSelect,
        searchTerm = '',
    } = props;    

    return (
        <ul
            className={`${CSSNAMESPACE}__suggestion-list`}>
            {suggestions.map((post, index) => {
                return (
                    <li key={post.id} className={`${CSSNAMESPACE}__suggestion-list-item`}>
                        <Suggestion
                            onClick={ () => onItemSelect(post) }
                            searchTerm={ searchTerm }
                            suggestion={ post }
                            isSelected={ attributes.postIn.split(',').includes(post.id.toString()) }
                        />
                    </li>
                );
            })}
        </ul>        
    );
}


function Suggestion( props ) {
    const {
        suggestion,
        onClick,
        searchTerm = '',
        isSelected = false,
        id = ''
    } = props;

    return (
		<Button
            id={ id }
			onClick={ onClick }                     
            className={`${CSSNAMESPACE}__suggestion ${ isSelected && 'is-selected' }`}        
            title={ decodeEntities( suggestion.title ) }
            disabled={ isSelected }
		>
			<span className={`${CSSNAMESPACE}__suggestion-title`}>				
                <TextHighlight
                    text={ decodeEntities( suggestion.title ) }
                    highlight={ searchTerm }
                />
            </span>
				
            <span className={`${CSSNAMESPACE}__suggestion-meta-container`}>
                <span
                    aria-hidden={ true }
                    className={`${CSSNAMESPACE}__suggestion-meta`}
                >
                    {  
                        suggestion.date
                    }
                </span>

                <span
                    aria-hidden={ true }
                    className={`${CSSNAMESPACE}__suggestion-meta`}
                >
                    {  
                        suggestion.type
                    }
                </span>
            </span>				
		</Button>
	);
}


export default PostPicker;