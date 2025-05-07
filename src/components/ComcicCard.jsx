import React from 'react'

const ComcicCard = (props) => {
    return (
        <div className="com-card">
            <img src={props.image} />
            <h4>{props.title}</h4>
        </div>
    )
}

export default ComcicCard