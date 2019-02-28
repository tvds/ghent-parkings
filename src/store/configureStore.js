import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import parkingsReducer from '../reducers/parkings';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            parkings: parkingsReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
}