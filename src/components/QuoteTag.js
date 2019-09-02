import React from 'react'

const QuoteTag = props => {
    
    return (
        <span className={props.class}>
            {props.tag}
        </span>
    )
}

export default QuoteTag