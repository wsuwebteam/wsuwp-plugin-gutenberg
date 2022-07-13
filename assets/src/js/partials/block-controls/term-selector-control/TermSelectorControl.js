import { useState, useEffect } from "@wordpress/element";
import { useDebounce } from "@wordpress/compose";
import { differenceBy } from "lodash";

const { ComboboxControl, Spinner } = wp.components;

let abortController = null;

const TermSelectorControl = function (props) {
  const [isLoading, setIsLoading] = useState(false);
  const [availableTerms, setAvailableTerms] = useState(props.value); // keep track of all terms for mapping later
  const [termSuggestions, setTermSuggestions] = useState([]);
  const [selectedTerms, setSelectedTerms] = useState(props.value);

  const handleInputChange = useDebounce(updateSuggestions, 250);

  async function updateSuggestions(input) {
    if (input.length < 2) {
      return;
    }

    setIsLoading(true);

    // cancel existing requests and set up new abort controller
    abortController?.abort();
    abortController =
      typeof AbortController === "undefined"
        ? undefined
        : new AbortController();

    // make request to terms api
    const response = await fetch(
      props.host +
        `/wp-json/wp/v2/search?type=term&subtype=${props.taxonomy}&search=${input}`,
      {
        method: "GET",
        signal: abortController?.signal,
      }
    );

    if (response.ok) {
      const results = await response.json();

      // process results
      const suggestions = differenceBy(results, selectedTerms, "id");

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
          ...differenceBy(results, availableTerms, "id"),
        ]);
      } else {
        setTermSuggestions([]);
      }
    }

    setIsLoading(false);
  }

  function selectTerm(termId) {
    const term = availableTerms.find((t) => t.id === termId);
    const updatedSelectedTerms = [...selectedTerms, term];

    updateSelectedTerms(updatedSelectedTerms);

    setTermSuggestions([]);
  }

  function removeTerm(term) {
    const updatedSelectedTerms = selectedTerms.filter((t) => t.id !== term.id);

    updateSelectedTerms(updatedSelectedTerms);
  }

  function updateSelectedTerms(termsArray) {

    let termsString = '';

    let queryTerms = [];

    if (Array.isArray( termsArray ) && termsArray.length > 0 ) {
      termsString = termsArray
        .map(function (term) {
          return term.id.toString();
        })
        .join(",");

      queryTerms = termsArray.map( (term) => {
        return { termID: term.id, taxonomy: term.type } ;
      });
    }

    setSelectedTerms( termsArray );

    props.onChange( { termsList: termsString, termsSelected: termsArray, queryTerms: queryTerms } );
  }

  return (
    <div className="wsu-gutenberg-term-selector">
      {isLoading && <Spinner />}

      <ComboboxControl
        label={props.label}
        help={props.help}
        value=""
        onChange={selectTerm}
        options={termSuggestions}
        onFilterValueChange={handleInputChange}
        allowReset={false}
      />

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
                  class="components-button wsu-gutenberg-term-selector__remove-btn has-text has-icon"
                  onClick={() => removeTerm(term)}
                >
                    <span class="wsu-gutenberg-term-selector__remove-btn-text">{term.title}<span class="wsu-gutenberg-term-selector__remove-btn-taxonomy-text">{term.type.replace( 'post_', '' )}</span></span>
                  <span class="dashicon dashicons dashicons-no-alt wsu-gutenberg-term-selector__remove-btn-icon"></span>
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
