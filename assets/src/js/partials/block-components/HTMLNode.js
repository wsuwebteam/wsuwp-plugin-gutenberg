const { useRef, useEffect } = wp.element;

const HTMLNode = React.memo(({ value }) => {
	const ref = useRef();

	useEffect(() => {
		ref.current.outerHTML = value;
	}, []);

	return <div ref={ref}></div>;
});

export default HTMLNode;
