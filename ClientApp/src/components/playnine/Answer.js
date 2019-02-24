import React from 'react';

export const Answer = (props) => {
    return (
        <div className="col-5">
            {props.selectedNumbers.map((num,i) => <span key={i}>{num}</span>)}
        </div>
    )
}