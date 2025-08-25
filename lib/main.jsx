/**
 * Entry point for the lib.
 */
import * as actionComponents from "./component/action";
import * as elementComponents from "./component/element";
import { bootstrapPaginationPlugin } from "./component/pagination/BootstrapPaginationComponents";

export const bootstrapComponentsPlugin = {
    action: actionComponents,
    element: elementComponents,
    pagination: bootstrapPaginationPlugin,
};

export * from "./component";
