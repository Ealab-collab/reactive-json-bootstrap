/**
 * Entry point for the lib.
 */
import * as elementComponents from "./component/element";

export const bootstrapComponentsPlugin = {
    element: {
        ...elementComponents,
    },
};

export * from "./component/element";
