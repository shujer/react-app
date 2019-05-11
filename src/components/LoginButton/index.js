import React from 'react';
import {withRouter} from 'react-router-dom'
import './style.less'

let LoginButton = props => {
    let handleClick = () => {
        props.history.push('/auth');
    }
    return(
        <div onClick={handleClick} className="loginButton">登录/注册</div>
    )
}

export default withRouter(LoginButton)