import React  from 'react';
import * as _ from 'lodash';

import './Stars.css'

export const Stars = (props) => {

  return (
    <div className="col-5">
      {_.range(props.numberOfStars).map(i =>
        <i key={i} className="fa fa-star"></i>
      )}
    </div>
  );
}