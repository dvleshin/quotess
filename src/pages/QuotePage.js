import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux'
import { getQuote } from '../store/actions/quoteActions'
import { saveQuote } from '../store/actions/userActions'

//Components
import Header from '../components/Header'

//Helpers
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'
import { CopyToClipboard } from 'react-copy-to-clipboard';

const QuotePage = props => {
    const { dispatch } = props

    const quoteStyle = {
        backgroundImage: `linear-gradient(rgba(115,115,115,0.6), rgba(115,115,115,0.6)), url("${props.quote.background}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }

    useEffect(() => {
        if(props.quote.title) {
            document.title = props.quote.title 
        } else {
            document.title = props.match.params.id
        }
        dispatch(getQuote(props.match.params.id))
        return () =>{
            console.log ('Cleaned')
        }
    }, [])

    const onAddFav = async () => {
        try {
            await props.dispatch(saveQuote(props.quote))
            toast('The quote added to your favorites', {
                position: "top-center",
                autoClose: 1500,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                })
        } catch (err) {
            toast.error(err, {
                position: "top-center",
                autoClose: 1500,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                })
        }
    }

    const onTxtCopied = () => {
        toast('Quote is copied to clickboard', {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            })
    }

    return (
        <React.Fragment>
        <Header />
            <ToastContainer
            position="top-center"
            autoClose={1500}
            hideProgressBar
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnVisibilityChange={false}
            draggable={false}
            pauseOnHover={false}
            />
        <section className="quote-container">
            <blockquote style={quoteStyle}>
             {props.quote.quote}
             <cite>{props.quote.author}</cite>
            </blockquote>
        </section>

        <section className="flex row space-between">
            <CopyToClipboard text={props.quote.quote + ' -Author: ' + props.quote.author}>
                <button className="flex items-center column btn-quote" onClick={onTxtCopied}><i className="fas fa-copy"></i> Copy a quote</button>
            </CopyToClipboard>
            <button className="flex items-center column btn-quote" ><i className="fab fa-facebook-square"></i> Share with friends</button>
            <button className="flex items-center column btn-quote" onClick={onAddFav}><i className="fas fa-star"></i> Add to favorite</button>
        </section>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    console.log('Quote State:', state);
    
    return {
        quote:state.quoteReducer.quote
    }
}
export default connect(mapStateToProps)(QuotePage)