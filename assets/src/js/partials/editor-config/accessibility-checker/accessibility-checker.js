const { useState, useEffect, useRef } = wp.element;
const { useSelect } = wp.data;
const { ExternalLink, Popover, Button } = wp.components;
import { useOutputMarkup } from "./hooks";

const ReportTable = (props) => {
  return (
    <>
      {props.logs.length > 0 ? (
        <>
          <table className="wsu-gutenberg-accessibility-panel__report-table">
            <tbody>
              {props.logs.map((l, idx) => (
                <tr key={`rr-${idx}`}>
                  <td>{l.message}</td>
                  <td>
                    <l.detailsView />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <p className="wsu-gutenberg-accessibility-panel__report-empty-message">
          {props.emptyMessage}
        </p>
      )}
    </>
  );
};

const DetailsView = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [skipNext, setSkipNext] = useState(false);
  const toggleButton = useRef(null);

  // hack to prevent reopening popover when clicking the button to close
  useEffect(() => {
    document.addEventListener("click", resetSkipNext);

    return () => {
      document.removeEventListener("click", resetSkipNext);
    };
  }, []);

  function resetSkipNext(e) {
    setSkipNext(false);
  }

  function toggle(e) {
    if (!skipNext) {
      setIsOpen((state) => !state);
    }

    setSkipNext(e === undefined);
  }

  function getAnchorProp() {
    return WSUWP_DATA.wpVersion.includes("6.1")
      ? { anchor: toggleButton.current }
      : {
          getAnchorRect: () => {
            const rect = toggleButton.current?.getBoundingClientRect() || null;

            if (rect) {
              rect.x = rect.x - rect.width - 20;
              rect.y = rect.y - rect.height - 10;

              return rect;
            }

            return null;
          },
        };
  }

  return (
    <>
      <Button ref={toggleButton} isLink={true} onClick={toggle}>
        Details
      </Button>
      {isOpen && (
        <Popover
          className="wsu-gutenberg-accessibility-panel__details-view"
          headerTitle={props.label}
          onClose={toggle}
          position="bottom left"
          {...getAnchorProp()}
        >
          <h4 className="wsu-gutenberg-accessibility-panel__details-heading">
            {props.label}
          </h4>
          <div className="wsu-gutenberg-accessibility-panel__details-content">
            {props.children}
          </div>
        </Popover>
      )}
    </>
  );
};

const InvalidHrefsDetails = (props) => {
  return (
    <>
      <table className={props.className}>
        <thead>
          <tr>
            <th>Link Text</th>
            <th>Href</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((l, idx) => (
            <tr key={`link-` + idx}>
              <td>{l.textContent}</td>
              <td>{l.getAttribute("href")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

const MissingAltDetails = (props) => {
  function extractId(str) {
    let result = str.match(/\d+/g);
    return result.find(function (element) {
      return str.indexOf("wp-image-" + element) !== -1;
    });
  }

  return (
    <>
      <table className={props.className}>
        <thead>
          <tr>
            <th>Media ID</th>
            <th>Filename</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((i, idx) => {
            const id = extractId(i.className);
            const filename = i.getAttribute("src").split("/").pop();
            return (
              <tr key={`image-` + idx}>
                <td>{id}</td>
                <td>{filename}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

const HeadingOrderDetails = (props) => {
  return (
    <>
      <table className={props.className}>
        <thead>
          <tr>
            <th>Valid</th>
            <th>Level</th>
            <th>Content</th>
          </tr>
        </thead>
        <tbody>
          {props.data.headings.map((h, idx) => (
            <tr key={`heading-` + idx}>
              <td>
                <span
                  className={`dashicon dashicons dashicons-${h.icon}`}
                ></span>
              </td>
              <td>{h.tag}</td>
              <td>{h.content}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

const BoldedParagraphsDetails = (props) => {
  return (
    <>
      <table className={props.className}>
        <thead>
          <tr>
            <th>Paragraph Text</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((p, idx) => (
            <tr key={`para-` + idx}>
              <td>{p}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

const AccessibilityChecker = () => {
  const { postId, editedPostContent, permalink } = useSelect((select) => {
    const editor = select("core/editor");
    return {
      postId: editor.getCurrentPostId(),
      editedPostContent: editor.getEditedPostContent(),
      permalink: editor.getPermalink(),
    };
  });

  const { html, isLoading, error } = useOutputMarkup(postId, editedPostContent);

  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const report = {
    errors: [],
    alerts: [],
    warnings: [],
    data: {},
  };

  function getLinksMissingHrefs(doc) {
    const missingHrefs = [];
    const links = Array.from(doc.querySelectorAll("a"));

    links.forEach((l) => {
      const href = l.getAttribute("href");

      if (
        href === null ||
        href.trim() === "" ||
        href.trim() === "#" ||
        href.trim() === "http://" ||
        href.trim() === "https://"
      ) {
        missingHrefs.push(l);
      }
    });

    return missingHrefs;
  }

  function getImagesMissingAlts(doc) {
    const missingAlts = [];
    const images = Array.from(doc.querySelectorAll("img"));

    images.forEach((i) => {
      if (!i.alt.trim()) {
        missingAlts.push(i);
      }
    });

    return missingAlts;
  }

  function getHeadingOrder(doc) {
    let previousHeadingLevel = doc.querySelector("h1") === null ? 1 : 0;
    const headings = Array.from(doc.querySelectorAll("h1, h2, h3, h4, h5, h6"));

    function getHeadingLevel(heading) {
      return parseInt(heading.tagName[1]);
    }

    let hasFailed = false;
    const headingData = headings.map((h) => {
      const headingLevel = getHeadingLevel(h);
      const isValid = !(headingLevel > previousHeadingLevel + 1);
      const icon = hasFailed ? "minus" : isValid ? "yes-alt" : "dismiss";
      previousHeadingLevel = headingLevel;

      hasFailed = hasFailed === true ? true : !isValid;

      return {
        icon: icon,
        tag: h.tagName,
        content: h.textContent,
      };
    });

    return {
      hasFailed: hasFailed,
      headings: headingData,
    };
  }

  function getBoldedParagraphs(doc) {
    const boldedParagraphs = [];
    const paragraphs = Array.from(doc.querySelectorAll("p"));

    paragraphs.forEach((p) => {
      const text = p.textContent;
      const boldElements = Array.from(p.querySelectorAll("strong, b"));

      boldElements.forEach((e) => {
        if (p.contains(e)) {
          p.removeChild(e);
        }
      });

      if (p.textContent.trim() === "") {
        boldedParagraphs.push(text.substring(0, 75).trim() + "…");
      }
    });

    return boldedParagraphs;
  }

  function generateReport(doc, report) {
    report.data.linksMissingHrefs = getLinksMissingHrefs(doc);
    report.data.imagesMissingAlts = getImagesMissingAlts(doc);
    report.data.boldedParagraphs = getBoldedParagraphs(doc);
    report.data.headingOrder = getHeadingOrder(doc);

    if (report.data.linksMissingHrefs.length > 0) {
      const plural = report.data.linksMissingHrefs.length > 1 ? "s" : "";
      report.errors.push({
        message: `${report.data.linksMissingHrefs.length} link${plural} with missing or invalid href${plural}`,
        detailsView: function () {
          return (
            <DetailsView label="Links with missing or invalid hrefs">
              <InvalidHrefsDetails
                className="wsu-gutenberg-accessibility-panel__details-table"
                data={report.data.linksMissingHrefs}
              />
            </DetailsView>
          );
        },
      });
    }

    if (report.data.imagesMissingAlts.length > 0) {
      const plural = report.data.imagesMissingAlts.length > 1 ? "s" : "";
      report.errors.push({
        message: `${report.data.imagesMissingAlts.length} image${plural} missing alt text`,
        detailsView: function () {
          return (
            <DetailsView label="Images missing alt text">
              <MissingAltDetails
                className="wsu-gutenberg-accessibility-panel__details-table"
                data={report.data.imagesMissingAlts}
              />
            </DetailsView>
          );
        },
      });
    }

    if (report.data.headingOrder.hasFailed === true) {
      report.alerts.push({
        message: `Incorrect heading order.`,
        detailsView: function () {
          return (
            <DetailsView label="Incorrect heading order">
              <HeadingOrderDetails
                className="wsu-gutenberg-accessibility-panel__details-table"
                data={report.data.headingOrder}
              />
            </DetailsView>
          );
        },
      });
    }

    if (report.data.boldedParagraphs.length > 0) {
      const plural = report.data.boldedParagraphs.length > 1 ? "s" : "";
      report.warnings.push({
        message: `${report.data.boldedParagraphs.length} paragraph${plural} contain only bold text`,
        detailsView: function () {
          return (
            <DetailsView label="Paragraphs with only bolded text">
              <BoldedParagraphsDetails
                className="wsu-gutenberg-accessibility-panel__details-table"
                data={report.data.boldedParagraphs}
              />
            </DetailsView>
          );
        },
      });
    }
  }

  generateReport(doc, report);

  return (
    <>
      {!isLoading && !error ? (
        <>
          <div className="wsu-gutenberg-accessibility-panel__section">
            <h3 className="wsu-gutenberg-accessibility-panel__section-heading">
              <span className={`dashicon dashicons dashicons-dismiss`}></span>{" "}
              Errors
            </h3>
            <ReportTable
              logs={report.errors}
              emptyMessage="0 errors to display."
            />
          </div>
          <div className="wsu-gutenberg-accessibility-panel__section">
            <h3 className="wsu-gutenberg-accessibility-panel__section-heading">
              <span className={`dashicon dashicons dashicons-warning`}></span>{" "}
              Alerts
            </h3>
            <ReportTable
              logs={report.alerts}
              emptyMessage="0 alerts to display."
            />
          </div>
          <div className="wsu-gutenberg-accessibility-panel__section">
            <h3 className="wsu-gutenberg-accessibility-panel__section-heading">
              <span className={`dashicon dashicons dashicons-flag`}></span>{" "}
              Warnings
            </h3>
            <ReportTable
              logs={report.warnings}
              emptyMessage="0 warnings to display."
            />
          </div>
        </>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <p>loading...</p>
      )}

      <ExternalLink
        className="wsu-gutenberg-accessibility-panel__wave-link"
        href={`https://wave.webaim.org/report#/` + permalink}
      >
        Review on WAVE
      </ExternalLink>
    </>
  );
};

export default AccessibilityChecker;
