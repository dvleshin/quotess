import QuoteService from '../../services/QuoteService'
import types from '../types'

export const setAction = (data, type) => {
    return {
        data,
        type
    }
}

export const getQuote = (cat) => {
    return async (dispatch) => {
        try {
            const res = await QuoteService.getQuote(cat);
            dispatch(setAction(res.contents.quotes[0], types.GET_QUOTE));
        }
        catch (err) {
            throw (err);
        }
    }
}

export const getTop10 = () => {
    return async (dispatch) => {
        try {
            const res = await QuoteService.getTop10();
            dispatch(setAction(res, types.GET_TOP10));
        }
        catch (err) {
            throw (err);
        }
    }
}