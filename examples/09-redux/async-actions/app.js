import { applyMiddleware, createStore } from 'redux';
import axios from 'axios';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const initialState = {
    fetching: false,
    fetched: false,
    loadData: {},
    error: null
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_USERS_START':
            return { ...state, fetching: true };

        case 'FETCH_USERS_ERROR':
            return { ...state, fetching: false, error: action.payload };

        case 'RECEIVE_USERS':
            return {
                ...state,
                fetching: false,
                fetched: true,
                loadData: action.payload
            };
        default:
            return state;
    }
}

/*
const loggerMiddleware = logger();

const createStoreWithMiddleware = applyMiddleware(
  thunk, // 함수를 dispatch() 하게 해줍니다
  loggerMiddleware // 액션을 로깅하는 깔끔한 미들웨어입니다
)(createStore);

const store = createStoreWithMiddleware(reducer);
*/

const middleware = applyMiddleware(thunk, logger());
const store = createStore(reducer, middleware);

store.dispatch((dispatch) => {
    dispatch({ type: 'FETCH_USERS_START' });
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => {
            //console.log(response, response.data);
            dispatch({ type: 'RECEIVE_USERS', payload: response.data });
        })
        .catch((err) => {
            dispatch({ type: 'FETCH_USERS_ERROR', payload: err });
        });
});