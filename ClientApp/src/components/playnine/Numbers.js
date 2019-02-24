import React from 'react';
import * as _ from 'lodash';

import './Numbers.css'

export const Numbers = (props) => {
    let NumberList = _.range(1, 10);
    const numberClassName = (number) => {
        if (props.selectedNumbers.indexOf(number) >= 0) {
            return 'selected';
        }
    }

    let spanNumber = NumberList.map((x, i) => <span key={i} className={numberClassName(x)}> {x} </span>);
    return (
        <div className="card text-center">
            <div>
                {spanNumber}
            </div>
        </div>
    )
}