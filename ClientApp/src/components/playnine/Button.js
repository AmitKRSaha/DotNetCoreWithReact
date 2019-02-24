import React from 'react';

export const Button = (props) => {
    return (
        <div className="col-2">
            <button className="btn btn-primary" disabled={props.selectedNumbers.length === 0}>
                =
            </button>
        </div>
    )
}