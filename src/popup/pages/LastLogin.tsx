import React from "react";
import ConfigForm, { MyField } from "../ConfigForm";

const LastLogin = () => {
    return (
        <>
            find out when a player last logged into the game by clicking his in
            game profiles
            <ConfigForm shape={{ lastLogin: false }}>
                <MyField
                    className="form-check-label form-control"
                    name="lastLogin"
                    type="checkbox"
                />
            </ConfigForm>
        </>
    );
};
export default LastLogin;
