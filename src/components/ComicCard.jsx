import React from 'react'

const ComicCard = (props) => {
    return (
        <div className="com-card">
            <img src={props.src} />
            <h4>{props.title}</h4>
        </div>
    )
}

export default ComicCard