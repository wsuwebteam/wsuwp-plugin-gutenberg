import {
	FeedOptionsPanel,
	AdvancedFeedOptionsPanel,
	useGetEvents,
} from "../../../assets/src/js/partials/block-controls/events-api-controls";

const { useBlockProps, InspectorControls } = wp.blockEditor;

export default function Edit(props) {
	const { attributes } = props;
	const host = attributes.data_source || WSUWP_DATA.siteUrl || "";

	const { data, isLoading, error } = useGetEvents(host, attributes);

	const blockProps = useBlockProps();

	return (
		<>
			<InspectorControls>
				<FeedOptionsPanel host={host} {...props} />

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

				{data &&
					data.map((event) => {
						const date = new Date(event.start_date);
						const month = date.toLocaleString("en-US", {
							month: "short",
						});
						const day = date.getDate();

						return (
							<article
								class={`wsu-card wsu-events-card ${
									attributes.className
										? attributes.className
										: ""
								}`}
								key={event.id}
							>
								<div class="wsu-events-card__container">
									<a href="http://wsuwp562.local/event/wsu-college-of-nursing-spokane-open-house/">
										WSU College of Nursing Spokane Open
										House
									</a>
									<div class="wsu-events-card__meta">
										<div class="wsu-events-card__meta-date">
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
		</>
	);
}
