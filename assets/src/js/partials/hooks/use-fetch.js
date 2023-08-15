const { useState, useEffect, useRef } = wp.element;

const useFetch = function (url, options = {}) {
	const [output, setOutput] = useState({
		data: null,
		isLoading: false,
		error: null,
	});
	const abortControllerRef = useRef(null);

	useEffect(() => {
		setOutput({
			data: null,
			isLoading: true,
			error: null,
		});

		// abortControllerRef.current?.abort(); // don't think this is needed since we have it in the cleanup function

		if (typeof AbortController !== "undefined") {
			abortControllerRef.current = new AbortController();
		}

		options = { ...options, signal: abortControllerRef.current?.signal };

		(async () => {
			try {
				// console.log("Calling: " + url);
				const response = await fetch(url, options);
				const responseJson = await response.json();

				if (response.ok) {
					setOutput({
						data: responseJson,
						isLoading: false,
						error: null,
					});
				} else {
					setOutput({
						data: null,
						isLoading: false,
						error: `${responseJson.code} | ${responseJson.message} ${response.status} (${response.statusText})`,
					});
				}
			} catch (ex) {
				if (ex.name !== "AbortError") {
					setOutput({
						data: null,
						isLoading: false,
						error: ex.message,
					});
				}
			}
		})();

		return () => {
			abortControllerRef.current?.abort();
		};
	}, [url]);

	return output;
};

export default useFetch;
