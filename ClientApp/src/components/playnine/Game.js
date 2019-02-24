import React from 'react';
import { Stars } from './Stars';
import { Button } from './Button';
import { Answer } from './Answer';
import { Numbers } from './Numbers';

export class Game extends React.Component {

    render() {
        return (
            <div  className="container">
                <h2> Play Nine Game</h2>
                <hr />
                <div>
                    <div className="row">
                        <div className="col-5"><Stars /></div>
                        <div className="col-3"><Button /></div>

                        <div className="col-4"><Answer /></div>

                    </div>
                </div>

                <br /><br />

                <Numbers />
            </div>
        )

    };
}