const {
	useBlockProps,
	RichText
} = wp.blockEditor;

const { select } = wp.data;

const { PostTitle } = wp.editor;

const Edit = ( {className, isSelected, attributes, setAttributes } ) => {

	const title = select("core/editor").getEditedPostAttribute( 'title' );

	const blockProps = useBlockProps( {
		className: 'wsu-article-header',
		style: {},
	} );

	return (
		<header { ...blockProps } >
			<h1 className="wsu-article-header__title">{ title }</h1>
		</header>
	)


}

export default Edit;