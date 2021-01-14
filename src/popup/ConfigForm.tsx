import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { chromeStorage } from "../types";
// import setConfig from '../contents/all';

const updateStorage = (values: chromeStorage) => {
    chrome.storage.sync.get(null, function (storageItems) {
        console.log("at the begingin, storage is", storageItems);
        const obj = {};

        for (const key of Object.keys(values)) {
            //@ts-ignore
            obj[key] = values[key];
        }
        for (const key of Object.keys(storageItems)) {
            //@ts-ignore
            obj[key] = values[key];
        }
        console.log("updated as", obj);
        chrome.storage.sync.set(obj, function () {
            console.log("I have saved data");
            // setConfig(obj);
            chrome.tabs.query({ active: true, currentWindow: true }, function (
                tabs
            ) {
                //@ts-ignore
                chrome.tabs.sendMessage(tabs[0].id, obj, function (response) {
                    console.log("recieved response");
                });
            });
        });
    });
};

interface ConfigProps {
    shape: chromeStorage;
}
const ConfigForm: React.FC<ConfigProps> = ({ children, shape }) => {
    const [storage, setStorage] = useState(shape);
    useState(() => {
        chrome.storage.sync.get(null, function (storageItems) {
            setStorage(storageItems);
            console.log("setting inital values of config form");
        });
        //@ts-ignore
    }, []);
    return (
        <div className="ConfigForm form-group">
            <Formik
                enableReinitialize
                initialValues={storage}
                onSubmit={async (values) => {
                    console.log({ values });
                    setStorage(values);
                    updateStorage(values);
                }}
            >
                <Form>
                    {children}
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </Form>
            </Formik>
        </div>
    );
};

/*
there has to be a better way of doing this??
*/
// type FieldType = typeof Field;
interface FieldProps {
    name: string;
    type?: string;
    className?: string;
    as?: string;
}
export const MyField: React.FC<FieldProps> = (props) => {
    const { name, children } = props;
    // props.type = props.type || "text";
    return (
        <>
            <label htmlFor={name}>{name}</label>
            <Field {...props}>{children}</Field>
        </>
    );
};

export default ConfigForm;
