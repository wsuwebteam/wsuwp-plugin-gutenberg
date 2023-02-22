const urlDefenseLinksCheck = (report, doc) => {
	const reportLinks = [];
	const links = Array.from(doc.querySelectorAll("a"));

	function detailsView(links) {
		return (
			<>
				<p>
					These are links copied from email before they are rendered
					in a browser. They still contain ITS's email security
					measures.
				</p>
				<table className="wsu-gutenberg-accessibility-panel__details-table">
					<thead>
						<tr>
							<th>Link Text</th>
							<th>Href</th>
						</tr>
					</thead>
					<tbody>
						{links.map((l, idx) => (
							<tr key={`link-` + idx}>
								<td>
									{l.textContent ||
										"(Not found. Possibly an image link)"}
								</td>
								<td>{l.getAttribute("href")}</td>
							</tr>
						))}
					</tbody>
				</table>
			</>
		);
	}

	links.forEach((l) => {
		const href = l.getAttribute("href");

		if (href !== null && href.trim().includes("urldefense.com")) {
			reportLinks.push(l);
		}
	});

	if (reportLinks.length > 0) {
		const plural = reportLinks.length > 1 ? "s" : "";
		report.warnings.push({
			message: `${reportLinks.length} link${plural} with urldefense.com in the URL`,
			detailsViewLabel: "Links with urldefense.com in the URL",
			detailsView: detailsView.bind(this, reportLinks),
		});
	}

	return report;
};

wp.hooks.addFilter(
	"wsu.Accessibility",
	"wsuwp/accessibility-checker",
	urlDefenseLinksCheck
);
