import { AuthenticatedApp, UnauthenticatedApp } from "components";
import { useAuth } from "hooks";
import "./App.css";

function App() {
    const { user } = useAuth();

    return user ? <AuthenticatedApp /> : <UnauthenticatedApp />;
}

export default App;
