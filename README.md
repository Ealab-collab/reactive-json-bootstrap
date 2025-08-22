# Bootstrap for Reactive-JSON

This is an extension lib for Reactive-JSON that enables Bootstrap support.

## Installation

Install this library in your main application.

```shell
npm install @ea-lab/reactive-json-bootstrap
```

Then where `<ReactiveJsonRoot>` is located in your React app, do the following:

```jsx
import {ReactiveJsonRoot} from "@ea-lab/reactive-json";
import {mergeComponentCollections} from "@ea-lab/reactive-json";
import {bootstrapComponentsPlugin} from "@ea-lab/reactive-json-bootstrap";

export const YourApp = ({reactiveJsonProps}) => {
    const additionalProps = {};

    // mergeComponentCollections will prepare the "plugins" property
    // of ReactiveJsonRoot.
    additionalProps.plugins = mergeComponentCollections([
        bootstrapComponentsPlugin,
        /* Insert here any other component collection plugins. */
    ]);
    
    const finalProps = {...reactiveJsonProps, ...additionalProps};
    
    return <ReactiveJsonRoot {...finalProps}/>
}
```

This library components will then be available for use in the build JSON/YAML.
