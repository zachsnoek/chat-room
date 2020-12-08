import React from "react";
import ReactDOM from "react-dom";
import { initFirebase } from "services";
import { AuthProvider } from "context";
import App from "./App";

initFirebase();

ReactDOM.render(
    <AuthProvider>
        <App />
    </AuthProvider>,
    document.getElementById("root")
);
