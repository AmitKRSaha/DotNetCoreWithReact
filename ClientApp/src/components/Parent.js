import React, { Component } from 'react';
import { CardList } from './CardList';
import { Form } from './Forms';

export class Welcome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'Amit',
            cards: []
        }
        this.currentValue = this.currentValue.bind(this);
    }

    currentValue() {
        this.setState({
            name: 'Amit Kumar Saha'
        });
    }

    render() {
        return (
            <div style={{ margin: '5px', textAlign: 'center', padding: '5px', border: '1px solid blue' }}>
                <p >Hello, {this.state.name}</p>

                <button className="btn btn-primary" onClick={this.currentValue}>Current Value</button>
                <div style={{ marginTop: '20px' }}>
                    <Form />
                    <CardList />
                </div>
            </div>

        );
    }
}