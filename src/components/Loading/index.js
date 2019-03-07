import React from 'react'
import './style.css'

const Loading = (props) => {
    return (
        <div className={`loading-${props.name}`}></div>
    )
}

export default Loading;