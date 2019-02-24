import React from 'react';
import * as _ from 'lodash';


import { Stars } from './Stars';
import { Button } from './Button';
import { Answer } from './Answer';
import { Numbers } from './Numbers';

export class Game extends React.Component {

   state = {
    numberOfStars : 1 + Math.floor(Math.random()*9),
    selectedNumbers: []
   }

   selectNumber = (clickedNumber) => {
       if(this.state.selectedNumbers.indexOf(clickedNumber) >= 0){
        return;
       }
       this.setState(prevState => ({
        selectedNumbers: prevState.selectedNumbers.concat(clickedNumber),
      }));
   }

    render() {
        return (
            <div  className="container">
                <h2> Play Nine Game</h2>
                <hr />
                <div>
                    <div className="row">
                        <div className="col-5"><Stars numberOfStars ={this.state.numberOfStars}/></div>
                        <div className="col-3"><Button /></div>

                        <div className="col-4"><Answer selectedNumbers={this.state.selectedNumbers}/></div>

                    </div>
                </div>

                <br /><br />

                <Numbers selectedNumbers={this.state.selectedNumbers} 
                selectNumber = {this.selectNumber} />
            </div>
        )

    };
}