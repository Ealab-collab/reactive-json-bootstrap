import {
    ActionDependant,
    evaluateTemplateValue,
    GlobalDataContext,
    propsDataLocationToPathAndValue,
    TemplateContext,
    useEvaluatedAttributes,
    View,
} from "@ea-lab/reactive-json";
import { useContext, useRef } from "react";
import { Form } from "react-bootstrap";

export const TextField = ({ props, datafield, path, currentData }) => {
    const globalDataContext = useContext(GlobalDataContext);
    const templateContext = useContext(TemplateContext);
    const mainAttributesHolderRef = useRef(null);

    const attributes = useEvaluatedAttributes(props.attributes);
    const inputAttributes = useEvaluatedAttributes(props.inputAttributes ?? []);

    const { formData, formDataPath } = propsDataLocationToPathAndValue({
        currentPath: path,
        datafield: datafield,
        dataLocation: props.dataLocation,
        defaultValue: props.defaultFieldValue,
        globalDataContext,
        templateContext,
    });

    const onChange = (e) => {
        globalDataContext.updateData(e.currentTarget.value, formDataPath);
    };

    const maybePlaceholder = evaluateTemplateValue({
        valueToEvaluate: props.placeholder,
        globalDataContext,
        templateContext,
    });

    const maybeInputType = evaluateTemplateValue({
        valueToEvaluate: props.inputType,
        globalDataContext,
        templateContext,
    });

    return (
        <ActionDependant {...props} attributesHolderRef={mainAttributesHolderRef}>
            <Form.Group {...attributes} ref={mainAttributesHolderRef} controlId={Math.random().toString()}>
                {props.label && (
                    <Form.Label>
                        <View
                            currentData={currentData?.["label"] ?? undefined}
                            datafield={"label"}
                            path={path + ".label"}
                            props={props.label}
                        />
                    </Form.Label>
                )}
                <Form.Control
                    onChange={onChange}
                    placeholder={maybePlaceholder}
                    type={maybeInputType ?? "text"}
                    value={formData ?? ""}
                    {...inputAttributes}
                />
            </Form.Group>
        </ActionDependant>
    );
};
