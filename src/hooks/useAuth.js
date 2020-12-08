import React from "react";
import { AuthContext } from "context";

const useAuth = () => {
    const value = React.useContext(AuthContext);

    if (typeof value === "undefined") {
        throw new Error(
            [
                "AuthContext's value is undefined.",
                "You probably forgot to useAuth within an AuthProvider.",
                "Ensure that you are rendering within an AuthProvider and try again.",
            ].join(" ")
        );
    }

    return value;
};

export { useAuth };
