import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import usersReducer from './UsersReducer';
import authReducer from './AuthReducer';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import appReducer from './appReducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
});
type ReducerType = typeof reducers
export type AppStateType = ReturnType<ReducerType>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

// @ts-ignore
window.__store__ = store;

export default store;