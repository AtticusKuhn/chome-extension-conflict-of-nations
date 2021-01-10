// import { Field } from "formik";
import React from "react";
import ConfigForm, { MyField } from "../ConfigForm";

export default function AutoRefresh() {
    return (
        <>
            auotmatically refresh games to see the newest games immediately
            <ConfigForm shape={{ autoRefresh: false }}>
                <MyField
                    className="form-check-input form-control"
                    name="autoRefresh"
                    type="checkbox"
                />
            </ConfigForm>
        </>
    );
}
