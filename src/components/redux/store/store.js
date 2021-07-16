import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from '../reducer/profile';
import { actions } from '../reducer/todo'



const rootReducer = combineReducers({
    user: reducer,
    todo: actions
})

export const configureStore = () => {
    return createStore(rootReducer, composeWithDevTools(
        applyMiddleware(ReduxPromise))
    )
}
