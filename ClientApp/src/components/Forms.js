import React, { Component } from 'react';
import Axios from 'axios';

export class Form extends React.Component {
    state = {
        userName : ''
    };
    constructor(props){
        super(props);
    }

    hansleSubmit = (event) => {
        event.preventDefault();
        // console.log('Submit : ', this.state.userName);
        Axios.get('https://api.github.com/users/' + this.state.userName)
        .then((res)=>{
            console.log(res);
            }).catch((error)=>{
            //on error
            });
    }

    render(){
        return (
            <form onSubmit={this.hansleSubmit}>
                <input type="text"
                value = {this.state.userName}
                onChange = {(event) => this.setState({userName : event.target.value})}
                placeholder="Type the User Name" required/>
                <button className="btn btn-primary" >Serach</button>
            </form>
        );
    }
}