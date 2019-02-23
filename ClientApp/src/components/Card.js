import React from 'react';
import './Card.css';

export const Card = (props) => {
    return (
        <div className="info">
            <img src={props.avatar_url} alt="MyImage" />
            <div className="usrDetails">
                <div>{props.name}</div>
                <div>{props.company}</div>

            </div>
        </div>
    );
};

