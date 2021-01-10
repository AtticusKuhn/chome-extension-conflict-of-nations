// import { Field } from "formik";
import React from "react";
import ConfigForm, { MyField } from "../ConfigForm";

export default function AutoRefresh() {
    return (
        <>
            <h1>hello I am autoRefresh</h1>
            <ConfigForm shape={{ autoRefresh: false }}>
                <MyField name="autoRefresh" type="checkbox" />
            </ConfigForm>
        </>
    );
}
