import ProductsButton from "./productsButton";
import ProductsBlock from "./productsBlock";

export default {
    // Friendly plugin name
    title: "Product",
    // A unique plugin name used to identify the plugin and its blocks
    type: "products",
    // React component to be rendered in the block sidebar
    buttonComponent: ProductsButton,
    // React component for rendering the content block
    blockComponent: ProductsBlock
};