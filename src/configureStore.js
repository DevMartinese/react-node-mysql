import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

import { verifyAuth } from "./Redux/actions";
import rootReducer from "./Redux/reducers";

// DevTool
import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore(persistedState) {
    
    const store = createStore(
        rootReducer,
        persistedState,
        composeWithDevTools(applyMiddleware(thunkMiddleware))
    );
    store.dispatch(verifyAuth());
    return store;
}