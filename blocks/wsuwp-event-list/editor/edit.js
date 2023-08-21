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

				{data && (
					<ul className={`wsu-events-list ${attributes.className}`}>
						{data.map((event) => {
							const date = new Date(event.start_date);
							const month = date.toLocaleString("en-US", {
								month: "short",
							});
							const day = date.getDate();

							return (
								<li key={event.id}>
									<div className="wsu-events-list__container">
										<div className="wsu-events-list__date">
											<div className="wsu-events-list__date-month">
												{month}
											</div>
											<div className="wsu-events-list__date-day">
												{day}
											</div>
										</div>
										<div className="wsu-events-list__content">
											<a href="#">{event.title}</a>
											<div className="wsu-events-list__meta">
												{event.is_all_day ? (
													<div className="wsu-events-list__meta-time">
														All-Day
													</div>
												) : (
													""
												)}

												{!event.is_all_day &&
												event.start_time ? (
													<div className="wsu-events-list__meta-time">
														{event.start_time}
													</div>
												) : (
													""
												)}

												{event.venue && (
													<div className="wsu-events-list__meta-location">
														{event.venue}
													</div>
												)}
											</div>
											<p>{event.summary}</p>
										</div>
									</div>
								</li>
							);
						})}
					</ul>
				)}
			</div>
		</>
	);
}
