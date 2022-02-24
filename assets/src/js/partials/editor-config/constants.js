window.wsu = {
  ROOT_URL: (function () {
    const href = window.location.href;
    const index = href.indexOf("/wp-admin");
    const rootUrl = href.substring(0, index);
    return rootUrl;
  })(),
};
