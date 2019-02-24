import React  from 'react';
import * as _ from 'lodash';

import './Stars.css'

export const Stars = (props) => {
    const numberOfStars = 1 + Math.floor(Math.random()*9);

  return (
    <div className="col-5">
      {_.range(numberOfStars).map(i =>
        <i key={i} className="fa fa-star"></i>
      )}
    </div>
  );
}