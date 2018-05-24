import React, { Component } from 'react';
import { withRouter, Route, Switch  } from 'react-router-dom'
import Home from '../pages/layouts/layout'
import Login from '../pages/login/login'


class router extends Component{

    render(){
        return(
            <Switch>
                <Route path="/" component={Home}/>
                <Route path='/login' component={Login}/>
            </Switch>
        )
    }
}

export default withRouter(router);