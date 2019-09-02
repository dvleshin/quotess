import types from '../types'

export default function userReduce(state = {favQuotes:''}, action) {
    switch (action.type) {
        case types.LOAD_QUOTES:
        return {...state, favQuotes: action.data};
        case types.DELETE_QUOTE:
        return {...state, favQuotes: action.data};
        case types.SAVE_QUOTE:
        return {...state, favQuotes: action.data};
    default:
        return {...state};
    }
}