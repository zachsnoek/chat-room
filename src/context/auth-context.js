import React from "react";
import { loginWithGoogle } from "services";

const AuthContext = React.createContext();
AuthContext.displayName = "AuthContext";

const AuthProvider = (props) => {
    const [user, setUser] = React.useState(null);

    const login = async () => {
        const user = await loginWithGoogle();
        setUser(user);
    };

    const value = { user, login };

    return <AuthContext.Provider value={value} {...props} />;
};

export { AuthContext, AuthProvider };
