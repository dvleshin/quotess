import types from '../types'

export default function quoteReduce(state = {quote:'', top10:''}, action) {
    switch (action.type) {
        case types.GET_QUOTE:
        return {...state, quote: action.data};
        case types.GET_TOP10:
        return {...state, top10: action.data};
    default:
        return {...state};
    }
}