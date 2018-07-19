import TitleButton from "./titleButton";
import TitleBlock from "./titleBlock";

export default {
    // Friendly plugin name
    title: "Title",
    // A unique plugin name used to identify the plugin and its blocks
    type: "title",
    // React component to be rendered in the block sidebar
    buttonComponent: TitleButton,
    // React component for rendering the content block
    blockComponent: TitleBlock
  };