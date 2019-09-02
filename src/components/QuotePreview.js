import React from 'react'
import QuoteTag from './QuoteTag'

const QuotePreview = (props) => {
    
    const checkDelete = () => {
        props.onDeleteQuote(props.quote.id)
    }
    return (
        <li className="flex column fav-quote">
            <span className="txt-quote">{props.quote.quote}</span>
            <span className="author-qoute">{props.quote.author}</span>
            <div className="flex row space-between">
            <div className="flex fav-tags">
            {props.quote.tags.map((tag, idx) => (
                <QuoteTag key={idx} tag={tag} class={'fav-tag'}/> ))} 
            </div>
            <div>
                <button className="btn-del-fav-quote" onClick={checkDelete}><i className="far fa-trash-alt"></i></button> 
            </div>  
            </div>
        </li>
        )
}

export default QuotePreview