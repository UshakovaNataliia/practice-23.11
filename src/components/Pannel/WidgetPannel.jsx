import React from 'react';
import Button from "../Button/Button";
import shortid from "shortid";

const pannel = new Array(10);

const WidgetPannel = ({handlerClick}) => {
    return (
        <ul onClick={handlerClick}>
            {[...pannel].map((el, i) => (
                <li key={shortid.generate()}>
                    <Button title={i} />
                </li>
            ))}
        </ul>
    )
};
export default WidgetPannel;