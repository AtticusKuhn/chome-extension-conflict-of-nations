import React from "react";
import ConfigForm, { MyField } from "../ConfigForm";

const GameFilter = () => {
    return (
        <>
            filter out to get only the games you want to see
            <ConfigForm shape={{ filter: "flashpoint", openSlots: "5" }}>
                <MyField className="form-text text-muted" name="openSlots" />
                <MyField className="form-control" as="select" name="gameFilter">
                    <option value="none">no filter</option>
                    <option value="flashpoint">flashpoint</option>
                    <option value="world war 3">world war 3</option>
                </MyField>
            </ConfigForm>
        </>
    );
};
export default GameFilter;
