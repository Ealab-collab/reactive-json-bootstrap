/**
 * Gives direct access to React Bootstrap components.
 */

import { ReactiveJsonBasicComponentWrapper } from "@ea-lab/reactive-json";
import { Accordion, Alert, Badge, Button } from "react-bootstrap";

const bootstrapComponents = {
    BsAccordion: Accordion,
    BsAlert: Alert,
    BsBadge: Badge,
    BsButton: Button,
};

const bootstrapBasicComponents = {};

Object.entries(bootstrapComponents).forEach(([RjComponentName, BootstrapComponent]) => {
    // Encapsulate the native Bootstrap component in a Reactive JSON component.
    bootstrapBasicComponents[RjComponentName] = (props) => (
        <ReactiveJsonBasicComponentWrapper reactComponent={BootstrapComponent} {...props} />
    );
});

export const { BsAccordion, BsAlert, BsBadge, BsButton } = bootstrapBasicComponents;
