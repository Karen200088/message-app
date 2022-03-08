import {combineReducers, createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import {messagesReducer} from "./reducers/messagesReducer";

const rootReducer = combineReducers({
    messages: messagesReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
