import React, {useState} from 'react'
import QuoteTag from './QuoteTag'

const Top10Preview = (props) => {
    
    return (
        <li className="flex column fav-quote">
            <p className="txt-quote">{props.quote.quote}</p>
            <span className="author-qoute">{props.quote.author}</span>
            <div className="flex row space-between">
            <div className="flex fav-tags">
            {props.quote.tags.map((tag, idx) => (
                <QuoteTag key={idx} tag={tag} class={'fav-tag'}/> ))} 
            </div> 
            </div>
        </li>
        )
}

export default Top10Preview