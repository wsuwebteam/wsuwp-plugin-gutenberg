import { SearchControl, TextControl, SelectControl, ToggleControl } from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';


const FeedPostsControl = ( props ) => {

	let { 
		attributes, 
		setAttributes,
		setPostType,
		setTaxonomy,
		setTerms,
		setCount,
		setOffset,
		setUseFeed
	} = props

	return (
		<>
			<ToggleControl
				label="Use Feed"
				checked={ attributes.useFeed ? attributes.useFeed : false }
				onChange={ ( value ) => setUseFeed( value ) }
				/>
			<SelectControl
				label="Post Type"
				value={ attributes.postType ? attributes.postType : '' }
				options={ [
					{ label: 'Post', value: 'page' },
					{ label: 'Page', value: 'page' },
					{ label: 'Any', value: 'any' },
				] }
				onChange={ ( value ) => setPostType( value ) }
			/>
			<SelectControl
				label="Taxonomy"
				value={ attributes.taxonomy ? attributes.taxonomy : '' }
				options={ [
					{ label: 'Category', value: 'category' },
					{ label: 'Tags', value: 'post_tag' },
				] }
				onChange={ ( value ) => setTaxonomy( value ) }
			/>
			<TextControl
				label="Term IDs"
				value={ attributes.terms ? attributes.terms : '' }
				onChange={ ( value ) => setTerms( value ) }
			/>
			<TextControl
				label="Count"
				value={ attributes.count ? attributes.count : '' }
				onChange={ ( value ) => setCount( value ) }
			/>
			<TextControl
				label="Offset"
				value={ attributes.offset ? attributes.offset : '' }
				onChange={ ( value ) => setOffset( value ) }
			/>
		</>
	)

}

export default FeedPostsControl;