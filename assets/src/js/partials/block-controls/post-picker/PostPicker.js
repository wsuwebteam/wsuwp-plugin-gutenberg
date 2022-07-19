import { __ } from '@wordpress/i18n';
import { Button, Spinner, TextHighlight } from '@wordpress/components';
import { useDebounce } from '@wordpress/compose';
import { useState, useEffect, useRef } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import { decodeEntities } from '@wordpress/html-entities';

import { isEmpty } from 'lodash';

import TextControl from './text-control';

const CSSNAMESPACE = 'wsu-gutenberg-post-picker';

const PostPicker = ( props ) => {
    const { 
        attributes,
        onChange,
        label = '',
        postTypes = [ 'post', 'page' ],
        placeholder = 'Search Content...'
    } = props;

    const searchInputRef = useRef(null);    
    const isMounted = useRef(false);
    const [searchString, setSearchString] = useState('');
	const [searchResults, setSearchResults] = useState([]);
	const [isLoading, setIsLoading] = useState(false);	
	const [selectedItems, setSelectedItems] = useState([]);
	const [latestPosts, setLatestPosts] = useState([]);
	const [postTypeData, setPostTypeData] = useState({});
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
        const response = await apiFetch({
            path: '/wsu-gutenberg/v1/get-posts-by-id?' + params,
            method: 'GET',
        })

        setSelectedItems(JSON.parse(response));
    };

    const getLatestPosts = async () => {        
        setIsLoading(true);
        
        const params = `count=8&post_types=${postTypes}`;
        const response = await apiFetch({ 
            path:'/wsu-gutenberg/v1/get-latest-posts?' + params,
            method: 'GET'
        });        

        setLatestPosts(JSON.parse(response));

        setIsLoading(false);
    };

    const getPostTypeData = async () => {
        const response = await apiFetch({
            path: '/wp/v2/types',
            method: 'GET',
        });

        setPostTypeData(response);
    };    

    useEffect( () => {
        if (isMounted.current) {            
            (async function handleSearch() {
                if( isEmpty(searchString) ){
                    resetSearch();
                    return;
                }

                setIsLoading(true);
                
                const params = `search_term=${searchString}&post_types=${postTypes}`;
                const response = await apiFetch({
                    path: '/wsu-gutenberg/v1/search-posts?' + params,
                    method: 'GET',
                });
                
                setSearchResults(JSON.parse(response));
                
                setIsLoading(false);            
            })();        
        }
    }, [ searchString ] );

    useEffect( () => {        
        getPostTypeData();
        getSelectedItems();
        getLatestPosts();
        isMounted.current = true;
    }, []);

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
                !isLoading && !searchResults.length ? (
                    <p>{__('No Items found')}</p>
                ) : !isLoading && (
                    <SuggestionList                                
                        attributes={ attributes }     
                        title="Search Results"
                        postTypeData={ postTypeData }                    
                        suggestions={ searchResults }
                        searchTerm={ searchString }
                        onItemSelect={ handleItemSelection }
                    />
                )
            ) : latestPosts.length && (                    
                    <SuggestionList
                        attributes={ attributes }         
                        title="Recent Content"
                        postTypeData={ postTypeData }
                        suggestions={ latestPosts }
                        searchTerm={ searchString }
                        onItemSelect={ handleItemSelection }
                    />
                ) || ''
            }
        </div>        
    )

}

function SuggestionList( props ) {
    const {
        attributes,
        title, 
        postTypeData,
        suggestions,
        onItemSelect,
        searchTerm = '',
    } = props;    

    return (
        <div className={`${CSSNAMESPACE}__suggestion-list-container`}>
            <h3 className={`${CSSNAMESPACE}__suggestion-list-title`}>
                {title}
            </h3>

            <ul
                className={`${CSSNAMESPACE}__suggestion-list`}>
                {suggestions.map((post, index) => {
                    return (
                        <li key={post.id} className={`${CSSNAMESPACE}__suggestion-list-item`}>
                            <Suggestion
                                onClick={ () => onItemSelect(post) }
                                searchTerm={ searchTerm }
                                suggestion={ post }
                                postTypeLabel={postTypeData[post.type]?.name}
                                isSelected={ attributes.postIn.split(',').includes(post.id.toString()) }
                            />
                        </li>
                    );
                })}
            </ul>        
        </div>
    );
}


function Suggestion( props ) {
    const {
        suggestion,
        onClick,
        searchTerm = '',
        isSelected = false,
        id = '',
        postTypeLabel=''
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
                        postTypeLabel || suggestion.type
                    }
                </span>
            </span>				
		</Button>
	);
}


export default PostPicker;