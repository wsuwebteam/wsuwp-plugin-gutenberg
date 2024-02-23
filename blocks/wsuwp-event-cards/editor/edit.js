const { RangeControl } = wp.components;
import { PanelDisplayOptions } from "../../../assets/src/js/partials/block-panels/blockPanels";
import {
	FeedOptionsPanel,
	AdvancedFeedOptionsPanel,
	useGetEvents,
} from "../../../assets/src/js/partials/block-controls/events-api-controls";

const { useBlockProps, InspectorControls } = wp.blockEditor;

export default function Edit(props) {
	const { attributes, setAttributes } = props;
	const host = attributes.data_source || WSUWP_DATA.siteUrl || "";

	const { data, isLoading, error } = useGetEvents(host, attributes);

	const blockProps = useBlockProps();

	return (
		<>
			<InspectorControls>
				<FeedOptionsPanel host={host} {...props} />

				<PanelDisplayOptions isOpen={false}>
					<RangeControl
						label="Number of Columns"
						help="Number of columns to display per row."
						value={attributes.columns}
						onChange={(columns) => setAttributes({ columns })}
						min={1}
						max={4}
					/>
				</PanelDisplayOptions>

				<AdvancedFeedOptionsPanel host={host} {...props} />
			</InspectorControls>

			<div {...blockProps}>
				{error && (
					<p>
						<b>Error: </b>
						{error.includes("404")
							? "The current data source does not provide an events feed."
							: error}
					</p>
				)}

				{isLoading && <p>loading...</p>}

				{data && data.length > 0 ? (
					<div
						class={`wsu-card__wrapper wsu-per-row--${attributes.columns}`}
					>
						{data.map((event) => {
							const date = new Date(event.start_date);
							const month = date.toLocaleString("en-US", {
								month: "short",
							});
							const day = date.getDate();

							return (
								<article
									className={`wsu-card wsu-events-card ${
										attributes.className
											? attributes.className
											: ""
									}`}
									key={event.id}
								>
									<div className="wsu-events-card__container">
										<a href="#">{event.title}</a>
										<div className="wsu-events-card__meta">
											<div className="wsu-events-card__meta-date">
												{month} {day}
											</div>
											{event.is_all_day ? (
												<div className="wsu-events-card__meta-time">
													All-Day
												</div>
											) : (
												""
											)}

											{!event.is_all_day &&
											event.start_time ? (
												<div className="wsu-events-card__meta-time">
													{event.start_time}
												</div>
											) : (
												""
											)}
										</div>
										{event.venue && (
											<div className="wsu-events-card__meta-location">
												{event.venue}
											</div>
										)}
										<p>{event.summary}</p>
									</div>
								</article>
							);
						})}
					</div>
				) : (
					<p>No events could be found.</p>
				)}
			</div>
		</>
	);
}
