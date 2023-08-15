import { __ } from '@wordpress/i18n';
import { Button, Spinner, TextHighlight } from '@wordpress/components';
import { useDebounce } from '@wordpress/compose';
import { useState, useEffect, useRef } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import { decodeEntities } from '@wordpress/html-entities';


import TextControl from './text-control';

const CSSNAMESPACE = 'wsu-gutenberg-post-picker';

const PostPicker = ( props ) => {
    const {
		onChange,
        postTypes = [ 'post', 'page' ],
        label = '',
        value = '',
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

    const abortController = typeof AbortController === 'undefined' ? undefined : new AbortController();

    const handleItemSelection = (post) => {
        if(value.split(',').includes(post.id.toString())) { return; }

		setSelectedItems([...selectedItems, post]);
        onChange([...value.split(','), post.id.toString()].join(','));

		setSearchResults([]);
		setSearchString('');
		searchInputRef.current.value = '';
	}

    const handleItemRemove = (post) => {
        setSelectedItems(selectedItems.filter( (item) => (item.id !== post.id)));
        onChange(value
            .split(',')
            .filter((id) => (id !== post.id.toString()))
            .join(','));
    }

    const resetSearch = () => {
        setSearchResults([]);
        setIsLoading(false);
    };

    const getSelectedItems = async () => {
        try{
            if(value.split(',').length === 0){ return; }

            const params = `ids=${value}`;
            const response = await apiFetch({
                path: '/wsu-gutenberg/v1/get-posts-by-id?' + params,
                method: 'GET',
                signal: abortController.signal
            })

            setSelectedItems(JSON.parse(response));
        }
        catch (error) {
            console.log(error);
        }
    };

    const getLatestPosts = async () => {
        try{
            setIsLoading(true);

            const params = `count=8&post_types=${postTypes}`;
            const response = await apiFetch({
                path:'/wsu-gutenberg/v1/get-latest-posts?' + params,
                method: 'GET',
                signal: abortController.signal
            });

            setLatestPosts(JSON.parse(response));

            setIsLoading(false);
        }
        catch (error) {
            console.log(error);
        }
    };

    const getPostTypeData = async () => {
        try{
            const response = await apiFetch({
                path: '/wp/v2/types',
                method: 'GET',
                signal: abortController.signal
            });

            setPostTypeData(response);
        }
        catch (error) {
            console.log(error);
        }
    };

    useEffect( () => {
        if (isMounted.current) {
            (async function handleSearch() {
                if( lodash.isEmpty(searchString) ){
                    resetSearch();
                    return;
                }

                setIsLoading(true);

                const params = `search_term=${searchString}&post_types=${postTypes}`;
                const response = await apiFetch({
                    path: '/wsu-gutenberg/v1/search-posts?' + params,
                    method: 'GET',
                    signal: abortController.signal
                });

                setSearchResults(JSON.parse(response));

                setIsLoading(false);
            })();
        }

        return () => {
            abortController.abort();
        };
    }, [ searchString ] );

    useEffect( () => {
        getPostTypeData();
        getSelectedItems();
        getLatestPosts();
        isMounted.current = true;

        return () => {
            abortController.abort();
        };
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
                        value={ value }
                        title="Search Results"
                        postTypeData={ postTypeData }
                        suggestions={ searchResults }
                        searchTerm={ searchString }
                        onItemSelect={ handleItemSelection }
                    />
                )
            ) : latestPosts.length && (
                    <SuggestionList
                        value={ value }
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
        value,
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
                                isSelected={ value.split(',').includes(post.id.toString()) }
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
