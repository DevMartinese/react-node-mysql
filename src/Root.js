import React from "react";

import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";


// Redux
import configureStore from "./configureStore";

// Components
import App from "./App";


const store = configureStore();

function Root() {
    return (
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    );
}

export default Root;