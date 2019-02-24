import React from 'react';
import * as _ from 'lodash';


import { Stars } from './Stars';
import { Button } from './Button';
import { Answer } from './Answer';
import { Numbers } from './Numbers';

export class Game extends React.Component {

    state = {
        selectedNumbers: [],
        numberOfStars: 1 + Math.floor(Math.random() * 9),
        answerIsCorrect: null,
        usedNumbers: []
    }

    selectNumber = (clickedNumber) => {
        if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0) {
            return;
        }
        this.setState(prevState => ({
            selectedNumbers: prevState.selectedNumbers.concat(clickedNumber),
        }));
    };

    unselectNumber = (clickedNumber) => {
        this.setState(prevState => ({
            selectedNumbers: prevState.selectedNumbers
                .filter(number => number !== clickedNumber)
        }));
    };

    checkAnswer = () => {
        this.setState(prevState => ({
            answerIsCorrect: prevState.numberOfStars ===
                prevState.selectedNumbers.reduce((acc, n) => acc + n, 0)
        }));
    };

    acceptAnswer = () => {
        this.setState(prevState => ({
          usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
        selectedNumbers: [],
        answerIsCorrect: null,
        numberOfStars: 1 + Math.floor(Math.random()*9),
      }));
    };

    render() {
        const { selectedNumbers, numberOfStars, answerIsCorrect, usedNumbers } = this.state;
        return (
            <div className="container">
                <h2> Play Nine Game</h2>
                <hr />
                <div>
                    <div className="row">
                        <div className="col-5"><Stars numberOfStars={numberOfStars} /></div>
                        <div className="col-3"><Button selectedNumbers={selectedNumbers}
                            checkAnswer={this.checkAnswer}
                            acceptAnswer={this.acceptAnswer}
                            answerIsCorrect={answerIsCorrect} /></div>

                        <div className="col-4"><Answer selectedNumbers={selectedNumbers}
                            unselectNumber={this.unselectNumber} /></div>

                    </div>
                </div>

                <br /><br />

                <Numbers selectedNumbers={selectedNumbers}
                    selectNumber={this.selectNumber} usedNumbers={usedNumbers}/>
            </div>
        )

    };
}