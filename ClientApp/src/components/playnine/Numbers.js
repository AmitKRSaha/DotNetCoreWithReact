import React  from 'react';
import * as _ from 'lodash';

import './Numbers.css'

export const Numbers = (props) => {
    let NumberList = _.range(1,10);
    let spanNumber = NumberList.map((x,i) => <span key={i} > {x} </span>);
    return (
        <div className="card text-center">
      <div>
          {spanNumber}
      </div>
    </div>
    )
}