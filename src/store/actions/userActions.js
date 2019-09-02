import UserService from '../../services/UserService'
import types from '../types'

export const setAction = (data, type) => {
    return {
        data,
        type
    }
}

export const loadQuotes = (filterBy) => {
    return async (dispatch) => {
        try {
            const res = await UserService.loadQuotes(filterBy);
            dispatch(setAction(res, types.DELETE_QUOTE));
        }
        catch (err) {
            throw (err);
        }
    }
}
export const saveQuote = (quote) => {  
    return async (dispatch) => {
        try {
            const res = await UserService.saveQuote(quote);
            dispatch(setAction(res, types.SAVE_QUOTE));
        }
        catch (err) {
            throw (err);
        }
    }
}

export const deleteQuote = (id) => {    
    return async (dispatch) => {
        try {
            const res = await UserService.deleteQuote(id);
            dispatch(setAction(res, types.DELETE_QUOTE));
        }
        catch (err) {
            throw (err);
        }
    }
}