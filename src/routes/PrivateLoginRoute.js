import {useAuth} from "../contexts/Auth";
import {Route, useHistory} from "react-router-dom";

const PrivateLoginRoute = ({ component: Component, ...rest }) => {
    const history = useHistory();
    const { isLoggedIn } = useAuth();
    if (isLoggedIn().isLogged) history.push("/dashboard");

    return (
        <>
            <Route {...rest} component={(props) => <Component {...props} />} />
        </>
    );
};

export default PrivateLoginRoute;
