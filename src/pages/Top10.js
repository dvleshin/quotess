import React, {useEffect} from 'react';
import { connect } from 'react-redux'
import { getTop10 } from '../store/actions/quoteActions'

//Components
import Header from '../components/Header'
import Top10Preview from '../components/Top10Preview'

const Top10 = (props) => {
    const { dispatch } = props

    useEffect(() => {
        document.title = "Top 10 Quotes"
        dispatch(getTop10())
    }, [])

    return props.quotes ? (
        <React.Fragment>
            <Header />
                <section className="flex items-center column">
                    <h1>Top 10</h1>
                    <ul className="flex column quotes-list top">
                    {props.quotes.map(quote => (
                         <Top10Preview key={quote.id} quote={quote}/>
                    ))}
                </ul>
                </section>
        </React.Fragment>
    ) : ('loading...')
}

const mapStateToProps = (state) => {
    console.log('Top10:', state.quoteReducer.top10);
    
    return {
        quotes:state.quoteReducer.top10
    }
}
export default connect(mapStateToProps)(Top10)