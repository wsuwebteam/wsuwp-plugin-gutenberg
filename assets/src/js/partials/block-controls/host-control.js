import { useInstanceId } from "@wordpress/compose";
import { useState, useEffect } from "@wordpress/element";
import { BaseControl } from "@wordpress/components";

let abortController = null;

const HostControl = (props) => {
	const {
		label = "Data Source",
		className,
		onChange,
		value = "",
		placeholder = "https://example.wsu.edu",
		help = "URL for the site to use as the data source (i.e. https://example.wsu.edu). Defaults to the currect site if left empty.",
		disabled = false,
	} = props;

	const [currentValue, setCurrentValue] = useState(value);
	const [isValid, setIsValid] = useState(false);
	const instanceId = useInstanceId(HostControl);
	const id = `inspector-text-control-${instanceId}`;

	function isValidUrl(url) {
		try {
			new URL(url);
		} catch (e) {
			return false;
		}
		return true;
	}

	function checkWpApi(url) {
		// cancel existing requests and set up new abort controller
		abortController?.abort();
		abortController =
			typeof AbortController === "undefined"
				? undefined
				: new AbortController();

		return fetch(url + `/wp-json/wp/v2/statuses`, {
			method: "GET",
			signal: abortController?.signal,
		});
	}

	function updateValidity(url) {
		if (isValidUrl(url)) {
			checkWpApi(url)
				.then((response) => {
					if (response.ok) {
						setIsValid(true);
						if (onChange) {
							onChange(url);
						}
					} else {
						setIsValid(false);
					}
				})
				.catch((error) => {
					setIsValid(false);
				});
		} else {
			setIsValid(false);
		}
	}

	async function handleHostChange(url) {
		setCurrentValue(url);

		// reset if empty
		if (url === "") {
			setIsValid(false);
			onChange("");
			return;
		}

		// validate if url is a valid WP site
		updateValidity(url);
	}

	useEffect(() => {
		updateValidity(currentValue);
	}, []);

	return (
		<>
			<BaseControl
				label={label}
				id={id}
				className={className}
				help={help}
			>
				<div className="wsu-gutenberg-input-with-icon">
					{currentValue && (
						<span
							className={`dashicon wsu-gutenberg-input-with-icon__icon ${
								isValid
									? "dashicons dashicons-yes wsu-gutenberg-input-with-icon__icon--success"
									: "dashicons dashicons-no-alt wsu-gutenberg-input-with-icon__icon--error"
							}`}
						></span>
					)}
					<input
						className="components-text-control__input"
						type="text"
						id={id}
						value={currentValue}
						placeholder={placeholder}
						onChange={(e) => handleHostChange(e.target.value)}
						aria-describedby={id + "__help"}
						disabled={disabled}
					/>
				</div>
			</BaseControl>
		</>
	);
};

export default HostControl;
