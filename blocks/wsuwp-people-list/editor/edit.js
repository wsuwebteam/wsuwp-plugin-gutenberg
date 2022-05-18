const { __ } = wp.i18n;
const { useBlockProps, InspectorControls } = wp.blockEditor;
const {
  TextControl,
  PanelBody,
  PanelRow,
  BaseControl,
  CheckboxControl,
  RangeControl,
  __experimentalRadio: Radio,
  __experimentalRadioGroup: RadioGroup,
} = wp.components;

import React, { useState, useEffect } from "react";
import { HeadingTagControl } from "../../../assets/src/js/partials/block-controls/blockControls";
import TermSelector from "./term-selector";

const apiEndpoint = window.location.hostname.includes(".local")
  ? "http://wsuwp.local/wp-json/peopleapi/v1/people?"
  : "https://people.wsu.edu/wp-json/peopleapi/v1/people?"; // FIXME: Find a way to set via environment config


const queryAttributes = [
  "count",
  "page",
  "nid",
  "classification",
  "university_category",
  "university_location",
  "university_organization",
  "photo_size",
  "profile_order",
];

const filterOptions = [
  "classification",
  "organization",
  "location",
  "category",
  "tag",
  "search",
];

const displayOptions = [
  "photo",
  "name",
  "title",
  "office",
  "email",
  "degree",
  "address",
  "phone",
  "website",
];

export default function Edit(props) {
  const { attributes, setAttributes } = props;

  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const debouncedAttributes = useValueDebounce(attributes, 1000);

  function handleCheckboxListChange(listKey, option, value) {
    let selectedItemList = attributes[listKey].slice();

    if (value) {
      if (selectedItemList.indexOf(option) === -1) {
        selectedItemList.push(option);
      }
    } else {
      selectedItemList = selectedItemList.filter((v) => v !== option);
    }

    setAttributes({ [listKey]: selectedItemList });
  }

  function getQueryAttributeSlugs(terms) {
    if (terms.length > 0) {
      return terms.map((t) => t.slug).join(",");
    }

    return "";
  }

  useEffect(
    () => {
      async function loadProfiles() {
        setLoading(true);

        // build url params based on attributes
        const params = queryAttributes
          .reduce(function (acc, curr, idx) {
            if (attributes[curr]) {
              const val = Array.isArray(attributes[curr])
                ? getQueryAttributeSlugs(attributes[curr])
                : attributes[curr];
              acc.push(curr.replace("_", "-") + "=" + val);
            }

            return acc;
          }, [])
          .join("&");

        // make request
        const response = await fetch(apiEndpoint + params);

        if (!response.ok) {
          setLoading(false);
          return;
        }

        // update state
        const profilesJson = await response.json();
        setProfiles(JSON.parse(profilesJson));
        setLoading(false);
      }

      loadProfiles();
    },
    queryAttributes.map((k) => debouncedAttributes[k])
  ); // only run on init and when query attributes are changed

  return (
    <div {...useBlockProps()}>
      <InspectorControls>
        <PanelBody title="People Directory Settings" initialOpen={true}>
          {/* <PanelRow>
                        <TextControl
                            label="Page"
                            help="Integer representing the page of results to return"
                            value={ attributes.page }
                            onChange={(newval) => setAttributes({ page: newval })}
                        />
                    </PanelRow> */}

          <PanelRow>
            <TextControl
              label="Number of Results"
              help="Number of results per page. 'All' returns all profiles. Defaults to 10."
              value={attributes.count}
              onChange={(newval) => setAttributes({ count: newval })}
            />
          </PanelRow>

          <PanelRow>
            <TextControl
              label="Network IDs"
              help="Comma delimited list of people network ids"
              placeholder="butch.cougar"
              value={attributes.nid}
              onChange={(newval) => setAttributes({ nid: newval })}
            />
          </PanelRow>

          <PanelRow>
            <TermSelector
              label="Classification"
              help="Display people by searching and selecting a classification"
              taxonomy="classification"
              value={attributes.classification}
              onChange={(newval) => setAttributes({ classification: newval })}
            />
          </PanelRow>

          <PanelRow>
            <TermSelector
              label="University Category"
              help="Display people by searching and selecting a university category"
              taxonomy="wsuwp_university_category"
              value={attributes.university_category}
              onChange={(newval) =>
                setAttributes({ university_category: newval })
              }
            />
          </PanelRow>

          <PanelRow>
            <TermSelector
              label="University Location"
              help="Display people by searching and selecting a university location"
              taxonomy="wsuwp_university_location"
              value={attributes.university_location}
              onChange={(newval) =>
                setAttributes({ university_location: newval })
              }
            />
          </PanelRow>

          <PanelRow>
            <TermSelector
              label="University Organization"
              help="Display people by searching and selecting a university organization"
              taxonomy="wsuwp_university_org"
              value={attributes.university_organization}
              onChange={(newval) =>
                setAttributes({ university_organization: newval })
              }
            />
          </PanelRow>

          <PanelRow>
            <TextControl
              label="Profile Order"
              help="Comma delimited list of people network ids to sort them at the top of the list"
              placeholder="butch.cougar"
              value={attributes.profile_order}
              onChange={(newval) => setAttributes({ profile_order: newval })}
            />
          </PanelRow>
        </PanelBody>

        <PanelBody title="People Display Settings" initialOpen={false}>
          <PanelRow>
            <BaseControl
              className="wsu-people-list-block__checkboxlist"
              label="Display Fields"
              help="Fields to display for each profile."
            >
              {displayOptions.map((o, index) => (
                <CheckboxControl
                  key={o}
                  className="wsu-people-list-block__checkboxlist-item"
                  label={o}
                  checked={attributes.display_fields.indexOf(o) > -1}
                  onChange={(val) =>
                    handleCheckboxListChange("display_fields", o, val)
                  }
                />
              ))}
            </BaseControl>
          </PanelRow>

          <PanelRow>
            <RangeControl
              label="Number of Columns"
              help="Number of columns to display per row."
              value={attributes.columns}
              onChange={(newval) => setAttributes({ columns: newval })}
              min={1}
              max={4}
            />
          </PanelRow>

          <PanelRow>
            <TextControl
              label="Website Link Text"
              help="Link text to display for the website field when it is being output. Defaults to Website."
              placeholder="Website"
              value={attributes.website_link_text}
              onChange={(newval) =>
                setAttributes({ website_link_text: newval })
              }
            />
          </PanelRow>

          <PanelRow>
            <HeadingTagControl {...props} />
          </PanelRow>

          {/* <PanelRow>
                        <SelectControl
                            label="Photo Size"
                            help="Photo size (thumbnail, medium, medium_large, large, full). Defaults to medium."
                            value={ attributes.photo_size }
                            onChange={(newval) => setAttributes({ photo_size: newval })}
                            options={ [
                                { label: 'Thumbnail', value: 'thumbnail' },
                                { label: 'Medium', value: 'medium' },
                                { label: 'Medium Large', value: 'medium_large' },
                                { label: 'Large', value: 'large' },
                                { label: 'Full', value: 'full' },
                            ]}
                        />
                    </PanelRow> */}
        </PanelBody>

        <PanelBody title="Filter Display Settings" initialOpen={false}>
          <PanelRow>
            <BaseControl
              className="wsu-people-list-block__checkboxlist"
              label="Filters"
              help="Filtering options to display on the page."
            >
              {filterOptions.map((o, index) => (
                <CheckboxControl
                  key={o}
                  className="wsu-people-list-block__checkboxlist-item"
                  label={o}
                  checked={attributes.filters.indexOf(o) > -1}
                  onChange={(val) =>
                    handleCheckboxListChange("filters", o, val)
                  }
                />
              ))}
            </BaseControl>
          </PanelRow>
          { attributes.filters.includes('category') && <><PanelRow>
              <TextControl
                label="Category Filter Label"
                help="Label to display for filter. Defaults to 'Filter by Category'"
                placeholder="Filter by Category"
                value={attributes.category_filter_label}
                onChange={(newval) =>
                  setAttributes({ category_filter_label: newval })
                }
              />
            </PanelRow>
            <PanelRow>
            <TermSelector
                  label="Select Category Filter Terms"
                  help="Search and select terms to include in filters"
                  taxonomy="wsuwp_university_category,category"
                  value={attributes.category_filter_terms}
                  onChange={(newval) =>
                    setAttributes({ category_filter_terms: newval })
                  }
                />
                </PanelRow>
              </>
          }
          { attributes.filters.includes('classification') && <>
          <PanelRow>
              <TextControl
                label="Classification Filter Label"
                help="Label to display for filter. Defaults to 'Filter by Classification'"
                placeholder="Filter by Classification"
                value={attributes.classification_filter_label}
                onChange={(newval) =>
                  setAttributes({ classification_filter_label: newval })
                }
              />
            </PanelRow>
            <PanelRow>
              <TermSelector
                label="Select Classification Filter Terms"
                help="Search and select term values to include in filters"
                taxonomy="classification"
                value={attributes.classification_filter_terms}
                onChange={(newval) =>
                  setAttributes({ classification_filter_terms: newval })
                }
              />
            </PanelRow>
            </>
          }
          { attributes.filters.includes('location') && <>
            <PanelRow>
              <TextControl
                label="Location Filter Label"
                help="Label to display for filter. Defaults to 'Filter by Location'"
                placeholder="Filter by Location"
                value={attributes.location_filter_label}
                onChange={(newval) =>
                  setAttributes({ location_filter_label: newval })
                }
              />
            </PanelRow>
            <PanelRow>
              <TermSelector
                label="Select Location Terms to Display"
                help="Search and select term values to include in filters"
                taxonomy="wsuwp_university_location"
                value={attributes.location_filter_terms}
                onChange={(newval) =>
                  setAttributes({ location_filter_terms: newval })
                }
              />
            </PanelRow>
          </>
          }
          { attributes.filters.includes('organization') && <>
            <PanelRow>
              <TextControl
                label="Organization Filter Label"
                help="Label to display for filter. Defaults to 'Filter by Organization'"
                placeholder="Filter by Organization"
                value={attributes.organization_filter_label}
                onChange={(newval) =>
                  setAttributes({ organization_filter_label: newval })
                }
              />
            </PanelRow>
            <PanelRow>
              <TermSelector
                label="Select Organization Terms to Display"
                help="Search and select term values to include in filters"
                taxonomy="wsuwp_university_org"
                value={attributes.organization_filter_terms}
                onChange={(newval) =>
                  setAttributes({ organization_filter_terms: newval })
                }
              />
            </PanelRow>
          </>
          }
          { attributes.filters.includes('tag') && <>
            <PanelRow>
              <TextControl
                label="Tag Filter Label"
                help="Label to display for filter. Defaults to 'Filter by Tag'"
                placeholder="Filter by Tag"
                value={attributes.tag_filter_label}
                onChange={(newval) => setAttributes({ tag_filter_label: newval })}
              />
            </PanelRow>
            <PanelRow>
              <TermSelector
                label="Select Tag Terms to Display"
                help="Search and select term values to include in filters"
                taxonomy="post_tag"
                value={attributes.tag_filter_terms}
                onChange={(newval) =>
                  setAttributes({ tag_filter_terms: newval })
                }
              />
            </PanelRow>
          </>
          }
          { attributes.filters.includes('search') && <>
            <PanelRow>
              <TextControl
                label="Search Filter Label"
                help="Label to display for filter. Defaults to 'Type to search'"
                placeholder="Type to search"
                value={attributes.search_filter_label}
                onChange={(newval) =>
                  setAttributes({ search_filter_label: newval })
                }
              />
            </PanelRow>
          </>
          }
          <PanelRow>
              <TermSelector
                label="(Legacy) Exclude Terms from Filters"
                help="Search and select terms to exclude from filters"
                taxonomy="classification,wsuwp_university_category,wsuwp_university_location,wsuwp_university_org,post_tag,category"
                value={attributes.exclude_term_values}
                onChange={(newval) =>
                  setAttributes({ exclude_term_values: newval })
                }
              />
            </PanelRow>
        </PanelBody>
      </InspectorControls>

      <div className="wsu-gutenberg-people-list">
        {attributes.filters.length > 0 && (
          <div className="wsu-gutenberg-people-list__filters">
            {attributes.filters
              .filter((f) => f !== "search")
              .map((filter, index) => (
                <div
                  key={"filter-" + index}
                  className="wsu-gutenberg-people-list__filter"
                >
                  {attributes[filter + "_filter_label"] ||
                    "Filter by " + filter}
                  <span class="wsu-gutenberg-people-list__filter-icon dashicons dashicons-arrow-down-alt2"></span>
                </div>
              ))}

            {attributes.filters.includes("search") && (
              <div
                key="filter-search"
                className="wsu-gutenberg-people-list__filter"
              >
                {attributes["search_filter_label"]}
                <span class="wsu-gutenberg-people-list__filter-icon dashicons dashicons-search"></span>
              </div>
            )}
          </div>
        )}

        <div
          className={`wsu-gutenberg-people-list__profiles wsu-gutenberg-people-list__profiles--per-row-${attributes.columns}`}
        >
          {[...Array(attributes.columns)].map((e, i) => (
            <div className="wsu-gutenberg-people-list__profile">
              {attributes.display_fields.includes("photo") && (
                <div className="wsu-gutenberg-people-list__profile-image"></div>
              )}

              <div className="wsu-gutenberg-people-list__profile-content">
                {attributes.display_fields.includes("name") && (
                  <h2 className="wsu-gutenberg-people-list__profile-name">
                    Person Name
                  </h2>
                )}

                {attributes.display_fields.includes("title") && (
                  <div class="wsu-gutenberg-people-list__profile-title">
                    Position Title
                  </div>
                )}

                {attributes.display_fields.includes("email") && (
                  <div class="dashicons-before dashicons-email-alt wsu-gutenberg-people-list__profile-icon-text">
                    <span>butch.cougar@wsu.edu</span>
                  </div>
                )}

                {attributes.display_fields.includes("office") && (
                  <div class="dashicons-before dashicons-location wsu-gutenberg-people-list__profile-icon-text">
                    <span>Office Location</span>
                  </div>
                )}

                {attributes.display_fields.includes("phone") && (
                  <div class="dashicons-before dashicons-phone wsu-gutenberg-people-list__profile-icon-text">
                    <span>555-555-5555</span>
                  </div>
                )}

                {attributes.display_fields.includes("website") && (
                  <div class="dashicons-before dashicons-admin-links wsu-gutenberg-people-list__profile-icon-text">
                    <span>{attributes.website_link_text}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <h3 className="wsu-gutenberg-people-list__names-label">
          Profiles to be displayed:
        </h3>

        {loading && <div>Loading...</div>}

        {!loading && profiles.length > 0 && (
          <>
            <ol className="wsu-gutenberg-people-list__names">
              {profiles.map((p, index) => (
                <li
                  key={p.nid}
                  className="wsu-gutenberg-people-list__name"
                  dangerouslySetInnerHTML={{
                    __html: `${p.name}<br/>(${p.nid})`,
                  }}
                ></li>
              ))}
            </ol>
          </>
        )}

        {/* {profiles.map((p, index) =>
          <div className="wsu-gutenberg-people-list__profile" key={index}>
              <div className="profile__img-container">
                  <img className="profile__img" src={p.photo}/>
              </div>

              <h2 className="profile__name">{p.name}</h2>

              {p.title.map((t, index) =>
                  <div key={index}>{t}</div>
              )}

              {p.university_organization.map((o, index) =>
                  <div key={index}>{o.name}</div>
              )}
          </div>
          )} */}
      </div>
    </div>
  );
}

// useDebounce Hook - https://usehooks.com/useDebounce/
function useValueDebounce(value, delay) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      // Cancel the timeout if value changes (also on delay change or unmount)
      // This is how we prevent debounced value from updating if value is changed ...
      // .. within the delay period. Timeout gets cleared and restarted.
      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay] // Only re-call effect if value or delay changes
  );
  return debouncedValue;
}

