import React, { useState } from "react";
import { Formik, Form } from "formik";
// import setConfig from '../contents/all';

const updateStorage = (values: any) => {
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
const ConfigForm = ({ children, shape }: { children: any; shape: any }) => {
    const [storage, setStorage] = useState(shape);
    useState(() => {
        chrome.storage.sync.get(null, function (storageItems) {
            setStorage(storageItems);
            console.log("setting inital values of config form");
        });
        //@ts-ignore
    }, []);
    return (
        <div className="ConfigForm">
            {JSON.stringify(storage)}
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
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    );
};

export default ConfigForm;
