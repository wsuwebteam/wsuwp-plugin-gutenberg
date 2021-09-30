const {
	useBlockProps,
	RichText
} = wp.blockEditor;

const { select } = wp.data;

const { PostTitle } = wp.editor;

const Edit = ( {className, isSelected, attributes, setAttributes } ) => {

	const title = ( attributes.title ) ? attributes.title : select("core/editor").getEditedPostAttribute( 'title' );

	const blockProps = useBlockProps( {
		className: 'wsu-article-header',
		style: {},
	} );

	return (
		<header { ...blockProps } >
			<h1 className="wsu-article-header__title">
				<RichText
					className="wsu-article-header__title-input"
					tagName="span" // The tag here is the element output and editable in the admin
					value={ attributes.title } // Any existing content, either from the database or an attribute default
					allowedFormats={ [] } // Allow the content to be made bold or italic, but do not allow other formatting options
					onChange={ ( title ) => setAttributes( { title } ) } // Store updated content as a block attribute
					placeholder={ title }// Display this text before any content has been added by the user
				/>
			</h1>
		</header>
	)


}

export default Edit;