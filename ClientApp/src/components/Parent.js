import React, { Component } from 'react';

export class Welcome extends Component {
    
    constructor(props){
        super(props);
        this.state = { name: 'Amit' }
        this.currentValue = this.currentValue.bind(this);
    }

    currentValue(){
        this.setState({
            name : this.state.name = 'Amit Kumar Saha'
        });
    }
    
    render() {
        return (
            <div style={{ margin: '5px', textAlign:'center', padding: '5px', border: '1px solid blue' }}>
                <p >Hello, {this.state.name}</p>

                <button className="btn btn-primary" onClick={this.currentValue}>Current Value</button>

            </div>

        );
    }
}