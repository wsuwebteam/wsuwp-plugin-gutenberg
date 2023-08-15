import { useFetch } from "../../hooks";

const { TextControl, Spinner, Button } = wp.components;

const { useDebounce } = wp.compose;
const { useState, useRef } = wp.element;

function EventPicker(props) {
	const {
		label = "",
		help = "",
		host = "",
		placeholder = "",
		value = [],
		onChange,
	} = props;
	const searchInputRef = useRef(null);
	const [search, setSearch] = useState("");
	const apiPath = `/wp-json/wsu-events/v1/get-events?count=20&search=${search}`;
	const handleInputChange = useDebounce(updateSearchInput, 250);

	const { data, isLoading, error } = useFetch(`${host}${apiPath}`);
	const suggestions = data ? lodash.differenceBy(data, value, "id") : [];

	function insertItem(item) {
		const selectedEvents = [...value, item];
		onChange(selectedEvents);

		if (search !== "") {
			searchInputRef.current.querySelector(
				".components-text-control__input"
			).value = "";
			updateSearchInput("");
		}
	}

	function removeItem(item) {
		const selectedEvents = value.filter((e) => e.id !== item.id);
		onChange(selectedEvents);
	}

	function updateSearchInput(input) {
		setSearch(input);
	}

	return (
		<>
			<div
				className={`wsu-gutenberg-event-list__event-picker ${
					label !== "" ? "has-label" : ""
				}`}
			>
				<div
					ref={searchInputRef}
					className="wsu-gutenberg-event-list__event-picker-input-container"
				>
					{isLoading && <Spinner />}
					<TextControl
						className="wsu-gutenberg-event-list__event-picker-input"
						label={label}
						help={help}
						onChange={handleInputChange}
						placeholder={placeholder}
					/>
				</div>

				{error && (
					<p className="wsu-gutenberg-event-list__event-picker-error">
						<b>Error: </b>
						{error}
					</p>
				)}

				{search === "" && value && value.length > 0 && (
					<>
						<h3 className="wsu-gutenberg-event-list__event-picker-list-title">
							Selected Events
						</h3>
						<ul className="wsu-gutenberg-event-list__event-picker-selected-items">
							{value.map((e) => {
								return (
									<li
										key={e.id}
										className="wsu-gutenberg-event-list__event-picker-selected-item"
									>
										<Button
											className="wsu-gutenberg-event-list__event-picker-selected-item-button"
											onClick={() => {
												removeItem(e);
											}}
										>
											<span className="wsu-gutenberg-event-list__event-picker-selected-item-text">
												{e.title}
												<span className="wsu-gutenberg-event-list__event-picker-selected-item-subtext">
													{e.start_date}
												</span>
											</span>
											<span className="dashicon dashicons dashicons-no-alt wsu-gutenberg-event-list__event-picker__remove-btn-icon"></span>
										</Button>
									</li>
								);
							})}
						</ul>
					</>
				)}

				{suggestions && (
					<h3 className="wsu-gutenberg-event-list__event-picker-list-title">
						{search.length > 0
							? "Search Results"
							: "Upcoming Events"}
					</h3>
				)}

				<ul className="wsu-gutenberg-event-list__event-picker-search-results">
					{suggestions &&
						suggestions.map((e) => {
							return (
								<li
									key={e.id}
									className="wsu-gutenberg-event-list__event-picker-search-results-item"
								>
									<Button
										className="wsu-gutenberg-event-list__event-picker-search-results-item-button"
										onClick={() => {
											insertItem(e);
										}}
									>
										<span className="wsu-gutenberg-event-list__event-picker-search-results-text">
											{e.title}
											<span className="wsu-gutenberg-event-list__event-picker-search-results-subtext">
												{e.start_date}
											</span>
										</span>
									</Button>
								</li>
							);
						})}
				</ul>
			</div>
		</>
	);
}

export default EventPicker;
