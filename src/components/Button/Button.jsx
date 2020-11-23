import React from 'react';

const Button = ({title, action}) => {
    return (
        <button type="button" data-action={action}>{title}</button>
    )
};

export default Button;