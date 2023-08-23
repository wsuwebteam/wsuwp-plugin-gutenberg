import { useState, useEffect, useCallback } from "@wordpress/element";

const { ComboboxControl, Spinner } = wp.components;

let abortController = null;

const TermSelectorControl = function (props) {
	const [isLoading, setIsLoading] = useState(false);
	const [availableTerms, setAvailableTerms] = useState(props.value); // keep track of all terms for mapping later
	const [termSuggestions, setTermSuggestions] = useState([]);
	const [error, setError] = useState("");
	const [selectedTerms, setSelectedTerms] = useState(props.value);

	const handleInputChange = useCallback(
		lodash.debounce(updateSuggestions, 250, {
			leading: true,
		}),
		[]
	);

	async function searchTerms(input, taxonomy) {
		const taxonomies = Array.isArray(taxonomy) ? taxonomy : [taxonomy];

		for (let i in taxonomies) {
			// cancel existing requests and set up new abort controller
			abortController?.abort();
			abortController =
				typeof AbortController === "undefined"
					? undefined
					: new AbortController();

			const response = await fetch(
				props.host +
					`/wp-json/wp/v2/search?type=term&subtype=${taxonomies[i]}&search=${input}`,
				{
					method: "GET",
					signal: abortController?.signal,
				}
			);

			if (response.ok) {
				return response;
			}
		}
	}

	async function updateSuggestions(input) {
		setError("");
		setIsLoading(true);

		try {
			// make request to terms api
			const response = await searchTerms(input, props.taxonomy);

			if (response.ok) {
				const results = await response.json();

				// process results
				const suggestions = lodash.differenceBy(
					results,
					selectedTerms,
					"id"
				);

				if (suggestions.length > 0) {
					setTermSuggestions(
						suggestions.map((v) => {
							return {
								label: v.title,
								value: v.id,
							};
						})
					);

					setAvailableTerms([
						...availableTerms,
						...lodash.differenceBy(results, availableTerms, "id"),
					]);
				} else {
					setTermSuggestions([]);
				}
			}
		} catch (err) {
			setTermSuggestions([]);
			setError("Error: options could not be found");
		} finally {
			setIsLoading(false);
		}
	}

	function selectTerm(termId) {
		const term = availableTerms.find((t) => t.id === termId);
		const updatedSelectedTerms = [...selectedTerms, term];

		updateSelectedTerms(updatedSelectedTerms);

		setTermSuggestions([]);
	}

	function removeTerm(term) {
		const updatedSelectedTerms = selectedTerms.filter(
			(t) => t.id !== term.id
		);

		updateSelectedTerms(updatedSelectedTerms);
	}

	function updateSelectedTerms(termsArray) {
		let termsString = "";

		let queryTerms = [];

		if (Array.isArray(termsArray) && termsArray.length > 0) {
			termsString = termsArray
				.map(function (term) {
					return term.id.toString();
				})
				.join(",");

			queryTerms = termsArray.map((term) => {
				return { termID: term.id, taxonomy: term.type };
			});
		}

		setSelectedTerms(termsArray);

		props.onChange({
			termsList: termsString,
			termsSelected: termsArray,
			queryTerms: queryTerms,
		});
	}

	return (
		<div className="wsu-gutenberg-term-selector">
			{isLoading && <Spinner />}

			<ComboboxControl
				className="wsu-gutenberg-term-selector__input"
				label={props.label}
				help={props.help}
				value=""
				onChange={selectTerm}
				options={
					!isLoading && termSuggestions.length > 0
						? termSuggestions
						: []
				}
				onFilterValueChange={handleInputChange}
				allowReset={false}
			/>

			{error && (
				<p className="wsu-gutenberg-term-selector__error">{error}</p>
			)}

			{selectedTerms.length > 0 && (
				<ul className="wsu-gutenberg-term-selector__selected_terms">
					{selectedTerms.map((term, index) => {
						return (
							<li
								key={term.id}
								className="wsu-gutenberg-term-selector__selected_term"
							>
								<button
									type="button"
									className="components-button wsu-gutenberg-term-selector__remove-btn has-text has-icon"
									onClick={() => removeTerm(term)}
								>
									<span className="wsu-gutenberg-term-selector__remove-btn-text">
										{term.title}
										<span className="wsu-gutenberg-term-selector__remove-btn-taxonomy-text">
											{term.type.replace("post_", "")}
										</span>
									</span>
									<span className="dashicon dashicons dashicons-no-alt wsu-gutenberg-term-selector__remove-btn-icon"></span>
								</button>
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
};

export default TermSelectorControl;
