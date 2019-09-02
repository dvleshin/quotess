import { combineReducers } from 'redux'
import quoteReducer from './quoteReducer'
import userReducer from './userReducer'

const combinedReducers = combineReducers({
    quoteReducer,
    userReducer
})

export default combinedReducers