import React from 'react';

export const Answer = (props) => {
    return (
        <div className="col-5">
            {props.selectedNumbers.map((num,i) => <span key={i} onClick={() => props.unselectNumber(num)}>{num}</span>)}
        </div>
    )
}