import React from "react";
import { useAuth } from "hooks";
import { GoogleLogo } from "components/svg";
import "./styles.css";

const UnauthenticatedApp = () => {
    const { login } = useAuth();

    return (
        <div id="login-screen">
            <h1>Welcome to Chat Room!</h1>
            <p>Select a log in option below to join a chat room.</p>
            <div>
                <GoogleLogo
                    id="google-logo"
                    onClick={login}
                    width="100"
                    height="100"
                />
            </div>
        </div>
    );
};

export { UnauthenticatedApp };
