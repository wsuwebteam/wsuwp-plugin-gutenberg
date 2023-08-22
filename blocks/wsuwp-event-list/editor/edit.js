import {
	FeedOptionsPanel,
	AdvancedFeedOptionsPanel,
	useGetEvents,
} from "../../../assets/src/js/partials/block-controls/events-api-controls";

import { 
	SpacingClassNameSelector,
} from "../../../assets/src/js/partials/block-controls/blockControls";

import ColorSchemeControl from '../../../assets/src/js/partials/block-controls/ColorSchemeControl';
import PanelDisplayOptions from "../../../assets/src/js/partials/block-panels/PanelDisplayOptions";

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
				<PanelDisplayOptions>
					<ColorSchemeControl {...props} label='Enable Dark Mode' help='' />
				</PanelDisplayOptions>
				<AdvancedFeedOptionsPanel host={host} {...props} />
				<SpacingClassNameSelector
					title="Space Settings"
					spaceSettings={[
						{
							label: 'Margin (Outside Spacing)',
							properties: [
								{
									label: 'Top',
									prefix: 'wsu-spacing-before--',                                        
									default: 'none',
								},
								{
									label: 'Bottom',
									prefix: 'wsu-spacing-after--',
									default: 'xmedium',                                        
								},
								{
									label: 'Left',
									prefix: 'wsu-spacing-margin-left--',									
									default: 'default',
								},
								{
									label: 'Right',
									prefix: 'wsu-spacing-margin-right--',									
									default: 'default',
								}
							]
						},
						{
							label: 'Padding (Inside Spacing)',
							properties: [
								{
									label: 'Top',
									prefix: 'wsu-spacing-top--',
									default: 'default',
								},
								{
									label: 'Bottom',
									prefix: 'wsu-spacing-bottom--',
									default: 'default',									
								},
								{
									label: 'Left',
									prefix: 'wsu-spacing-padding-left--',									
									default: 'default',
								},
								{
									label: 'Right',
									prefix: 'wsu-spacing-padding-right--',									
									default: 'default',
								}
							]
						}
					]}
					{...props}>					
				</SpacingClassNameSelector>
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
					<ul
						className={`wsu-events-list ${
							attributes.className ? attributes.className : ""
						}`}
					>
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
