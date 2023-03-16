import {useAuth} from "../Components/contexts/Auth";
import {Route, useHistory} from "react-router-dom";
import Nav from "../Components/Nav/Nav";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const history = useHistory();
    const { isLoggedIn } = useAuth();

    if (!isLoggedIn()) history.push("/login");

    return (
        <>
            <Nav />
            <Route {...rest} component={(props) => <Component {...props} />} />
        </>
    );
};

export default PrivateRoute;
