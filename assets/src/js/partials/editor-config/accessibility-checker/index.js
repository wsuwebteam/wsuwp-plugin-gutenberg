import AccessibilityChecker from "./accessibility-checker";

const registerPlugin = wp.plugins.registerPlugin;
const { PluginDocumentSettingPanel } = wp.editPost;

const AccessibilityCheckerPanel = () => (
  <PluginDocumentSettingPanel
    name="wsu-accessibility"
    title="Accessibility"
    className="wsu-gutenberg-accessibility-panel"
  >
    <AccessibilityChecker />
  </PluginDocumentSettingPanel>
);

registerPlugin("wsu-plugin-accessibility", {
  render: AccessibilityCheckerPanel,
  icon: "",
});
