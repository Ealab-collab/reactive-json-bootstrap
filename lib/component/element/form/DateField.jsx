import {
    ActionDependant,
    GlobalDataContext,
    propsDataLocationToPathAndValue,
    TemplateContext,
    useEvaluatedAttributes,
    View,
} from "@ea-lab/reactive-json";
import { useContext, useRef } from "react";
import { Form } from "react-bootstrap";

export const DateField = (componentProps) => {
    // TODO: type date & datetime-local support.
    const globalDataContext = useContext(GlobalDataContext);
    const templateContext = useContext(TemplateContext);
    const mainAttributesHolderRef = useRef(null);

    const props = componentProps.props;

    const attributes = useEvaluatedAttributes(props.attributes);

    const { formData, formDataPath } = propsDataLocationToPathAndValue({
        currentPath: componentProps.path,
        datafield: componentProps.datafield,
        dataLocation: props.dataLocation,
        defaultValue: props.defaultFieldValue,
        globalDataContext,
        templateContext,
    });

    const onChange = (e) => {
        globalDataContext.updateData(e.target.value, formDataPath);
    };

    return (
        <ActionDependant {...props} attributesHolderRef={mainAttributesHolderRef}>
            <Form.Group {...attributes} ref={mainAttributesHolderRef} controlId={Math.random().toString()}>
                {props.label && (
                    <Form.Label>
                        <View
                            currentData={componentProps.currentData?.["label"] ?? undefined}
                            datafield={"label"}
                            path={componentProps.path + ".label"}
                            props={props.label}
                        />
                    </Form.Label>
                )}
                <Form.Control onChange={onChange} type={"datetime-local"} value={formData ?? ""} />
            </Form.Group>
        </ActionDependant>
    );
};
