import {useAuth} from "../contexts/Auth";
import {Route} from "react-router-dom";

const PrivateLoginRoute = ({ component: Component, ...rest }) => {
    const { isLoggedIn } = useAuth();
    if (isLoggedIn().isLogged) window.location.href = "/dashboard";

    return (
        <>
            <Route {...rest} component={(props) => <Component {...props} />} />
        </>
    );
};

export default PrivateLoginRoute;
