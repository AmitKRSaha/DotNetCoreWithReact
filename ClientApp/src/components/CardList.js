import React from 'react';
import './Card.css';
import { Card } from './Card';

export const CardList = (props) => {
    return (
        <div>
            {props.cards.map(c => <Card key={c.id} {...c} />)}
        </div>
    );
};