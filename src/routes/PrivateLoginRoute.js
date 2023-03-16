import {useAuth} from "../Components/contexts/Auth";
import {Route} from "react-router-dom";

const PrivateLoginRoute = ({ component: Component, ...rest }) => {
    const { isLoggedIn } = useAuth();
    const {isLogged} = isLoggedIn();
    if (isLogged) window.location.href = "/dashboard";

    return (
        <>
            <Route {...rest} component={(props) => <Component {...props} />} />
        </>
    );
};

export default PrivateLoginRoute;
