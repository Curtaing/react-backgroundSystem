import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { Button } from 'antd';
class home extends Component{
    render(){
        return (
            <div>
                <Button type="primary">Button</Button>
            </div>
        )
    }

    handleRouter = () => {
        console.log(this.props.history);
        this.props.history.push('/login')
    }
}

export default withRouter(home);