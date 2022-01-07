import { useState, useEffect } from "@wordpress/element";
import { useDebounce } from "@wordpress/compose";
import apiFetch from "@wordpress/api-fetch";
import { differenceBy } from "lodash";

const { ComboboxControl, Spinner } = wp.components;

const apiEndpoint = window.location.hostname.includes(".local")
  ? "http://wsuwp.local/wp-json/peopleapi/v1/terms?"
  : "https://people.wsu.edu/wp-json/peopleapi/v1/terms?"; // FIXME: Find a way to set via environment config

let abortController = null;

const TermSelector = function (props) {
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
    const params = `taxonomy=${props.taxonomy}&s=${input}`;
    const response = await apiFetch({
      url: apiEndpoint + params,
      method: "GET",
      signal: abortController?.signal,
    });

    // process results
    const results = JSON.parse(response);
    const suggestions = differenceBy(results, selectedTerms, "term_id");

    if (suggestions.length > 0) {
      setTermSuggestions(
        suggestions.map((v) => {
          return {
            label: v.name,
            value: v.term_id,
          };
        })
      );

      setAvailableTerms([
        ...availableTerms,
        ...differenceBy(results, availableTerms, "term_id"),
      ]);
    } else {
      setTermSuggestions([]);
    }

    setIsLoading(false);
  }

  function selectTerm(termId) {
    const term = availableTerms.find((t) => t.term_id === termId);
    const updatedSelectedTerms = [...selectedTerms, term];

    updateSelectedTerms(updatedSelectedTerms);

    setTermSuggestions([]);
  }

  function removeTerm(term) {
    const updatedSelectedTerms = selectedTerms.filter(
      (t) => t.term_id !== term.term_id
    );

    updateSelectedTerms(updatedSelectedTerms);
  }

  function updateSelectedTerms(terms) {
    setSelectedTerms(terms);
    props.onChange(terms);
  }

  return (
    <div className="wsu-gutenberg-people-list-term-selector">
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
        <ul className="wsu-gutenberg-people-list-term-selector__selected_terms">
          {selectedTerms.map((term, index) => {
            return (
              <li
                key={term.term_id}
                className="wsu-gutenberg-people-list-term-selector__selected_term"
              >
                <button
                  type="button"
                  class="components-button wsu-gutenberg-people-list-term-selector__remove-btn has-text has-icon"
                  onClick={() => removeTerm(term)}
                >
                  <span class="wsu-gutenberg-people-list-term-selector__remove-btn-text">
                    {term.name}
                  </span>
                  <span class="dashicon dashicons dashicons-no-alt wsu-gutenberg-people-list-term-selector__remove-btn-icon"></span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default TermSelector;
