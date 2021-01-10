import React from "react";
import ConfigForm, { MyField } from "../ConfigForm";

const LastLogin = () => {
    return (
        <>
            <ConfigForm shape={{ lastLogin: false }}>
                <MyField name="lastLogin" type="checkbox" />
            </ConfigForm>
        </>
    );
};
export default LastLogin;
