import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'
import { Tooltip, Icon } from 'antd'
import routerConfig from '../../../pages/config/router'

class right extends Component{
    state={
        collapsed:false
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render(){
        return(
            <div className={'right'}>
                <div className='header clear clearFix'>
                    <Icon
                        className="trigger"
                        type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={this.toggle}
                    />
                    <div className='user'>
                        <span className='font icon-touxiang'></span>
                        <Tooltip title={<span style={{fontSize:'14px',cursor:'pointer'}} onClick={this.logout}>退出</span>}>
                            <span className='name'>好亚杰</span>
                        </Tooltip>
                    </div>
                </div>
                <div className='routeWrap'>
                    {routerConfig.map((item,i)=>
                        <Route key={i} path={item.path} component={item.component} exact/>
                    )}
                </div>
            </div>
        )
    }
}

export default right;