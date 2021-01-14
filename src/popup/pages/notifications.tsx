import React from "react";
import ConfigForm, { MyField } from "../ConfigForm";

const Notifications = () => {
    return (
        <>
            <h1>bruh</h1>
            <ConfigForm shape={{ notifications: false }}>
                <MyField
                    name="notifications"
                    type="checkbox"
                    className="form-check-label form-control"
                />
            </ConfigForm>
        </>
    );
};

export default Notifications;
