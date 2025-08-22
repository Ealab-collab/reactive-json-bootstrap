/**
 * Entry point for the lib.
 */
import * as elementComponents from "./component/element";
import { bootstrapPaginationPlugin } from "./component/pagination/BootstrapPaginationComponents";

export const bootstrapComponentsPlugin = {
    element: elementComponents,
    pagination: bootstrapPaginationPlugin,
};

export * from "./component/element";
export * from "./component/pagination";
