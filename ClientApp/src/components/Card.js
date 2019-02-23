import React, { Component } from 'react';
import './Card.css';

export const Card = (props) => {
    return (
        <div className="info">
            <img src="https://avatars2.githubusercontent.com/u/550884?v=4" />
            <div className="usrDetails">
                <div>Name</div>
                <div>Company Name</div>

            </div>
        </div>
    );
};

