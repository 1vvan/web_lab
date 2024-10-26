import React from 'react';

const Card = (props) => {
    return <div className="card expense-item">{props.children}</div>;
};

export default Card;
