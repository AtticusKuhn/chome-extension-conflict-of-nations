import React from "react";
import ConfigForm, { MyField } from "../ConfigForm";

const GameFilter = () => {
    return (
        <>
            <ConfigForm shape={{ filter: "flashpoint", openSlots: "5" }}>
                <MyField name="openSlots" />
                <MyField as="select" name="gameFilter">
                    <option value="none">no filter</option>
                    <option value="flashpoint">flashpoint</option>
                    <option value="world war 3">world war 3</option>
                </MyField>
            </ConfigForm>
        </>
    );
};
export default GameFilter;
