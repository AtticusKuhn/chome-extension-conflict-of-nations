import React from "react";
import ConfigForm from "../ConfigForm";
import { Field } from "formik";

const GameFilter = () => {
    return (
        <>
            <ConfigForm shape={{ filter: "flashpoint" }}>
                <Field as="select" name="gameFilter">
                    <option value="flashpoint">flashpoint</option>
                    <option value="world war 3">world war 3</option>
                </Field>
            </ConfigForm>
        </>
    );
};
export default GameFilter;
