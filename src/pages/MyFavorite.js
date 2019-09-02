import React, {useEffect} from 'react';
import { connect } from 'react-redux'
import { loadQuotes, deleteQuote } from '../store/actions/userActions'
import Header from '../components/Header'
import QuotePreview from '../components/QuotePreview'

const MyFavorite = (props) => {

    const { dispatch } = props

    useEffect(() => {
        document.title = "My Favorite Quotes"
        dispatch(loadQuotes())
    }, [])

    const onDeleteQuote = (id) => {
        props.dispatch(deleteQuote(id))
    }

    return props.quotes ? (
        <React.Fragment>
            <Header />
            <section className="flex items-center column">
                <h1>My favorites</h1>
                <ul className="flex column quotes-list">
                    {props.quotes.map(quote => (
                         <QuotePreview key={quote.id} quote={quote} onDeleteQuote={onDeleteQuote}/>
                    ))}
                </ul>
            </section>
        </React.Fragment>
    ) : ('loading...')
}

const mapStateToProps = (state) => {
    return {
        quotes: state.userReducer.favQuotes
    }
}

export default connect(mapStateToProps)(MyFavorite)