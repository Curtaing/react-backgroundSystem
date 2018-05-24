import React, { Component } from 'react';

class login extends Component{
    render(){
        return (
            <div onClick={this.handleRouter}>
                login
            </div>
        )
    }

    handleRouter = () => {
        console.log(this.props.history);
        this.props.history.push('/')
    }
}

export default login;