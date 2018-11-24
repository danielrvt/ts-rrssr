import * as React from "react";
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import App from "./App";

// Because it's already been rendered, we only need to hydrate event
// handlers and wire things up.
ReactDOM.hydrate(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.querySelector("#root")
);

