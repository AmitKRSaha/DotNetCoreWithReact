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

                <Numbers selectedNumbers={this.state.selectedNumbers}/>
            </div>
        )

    };
}