const { useEffect, useRef, useReducer } = wp.element;

const initialState = {
	data: null,
	isLoading: false,
	error: null,
};

function reducer(state, action) {
	switch (action.type) {
		case "LOADING":
			return { ...initialState, isLoading: true };
		case "SUCCESS":
			return { ...initialState, data: action.data };
		case "ERROR":
			return { ...initialState, error: action.error };
		default:
			return state;
	}
}

const useFetch = function (url, options) {
	const [state, dispatch] = useReducer(reducer, initialState);
	const abortControllerRef = useRef();

	useEffect(() => {
		if (typeof AbortController !== "undefined") {
			abortControllerRef.current = new AbortController();
		}

		(async () => {
			try {
				dispatch({ type: "LOADING" });
				const response = await fetch(url, {
					...options,
					signal: abortControllerRef.current?.signal,
				});

				if (!response.ok) {
					throw new Error(
						`${response.status} - ${response.statusText}`
					);
				}

				const data = await response.json();
				dispatch({ type: "SUCCESS", data: data });
			} catch (ex) {
				if (ex.name !== "AbortError") {
					dispatch({ type: "ERROR", error: ex.message });
				}
			}
		})();

		// cancel current request on cleanup to avoid race conditions & memory leaks
		return () => {
			abortControllerRef.current?.abort();
		};
	}, [url, options]);

	return state;
};

export default useFetch;
