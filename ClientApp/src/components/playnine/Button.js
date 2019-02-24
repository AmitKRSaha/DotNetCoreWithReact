import React from 'react';

export const Button = (props) => {
    let button;
  switch(props.answerIsCorrect) {
  	case true:
    	button =
        <button className="btn btn-success" onClick={props.acceptAnswer}>
          <i className="fa fa-check"></i>
        </button>;      
      break;
  	case false:
    	button =
        <button className="btn btn-danger">
          <i className="fa fa-times"></i>
        </button>;      
      break;
  	default:
    	button =
        <button className="btn btn-primary" 
        				onClick={props.checkAnswer}
        				disabled={props.selectedNumbers.length === 0}>
          =
        </button>;      
      break;
  }
    return (
        <div className="col-2">
            {button}
        </div>
    )
}