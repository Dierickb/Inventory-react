import {useAuth} from "../contexts/Auth";
import {Route, useHistory} from "react-router-dom";
import Nav from "../Components/Nav/Nav";
import {BootCenterDevicesProvider} from "../contexts/BootCenterDevices";
import {ActiveLeftBarProvider} from "../contexts/ActiveLeftBar";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const history = useHistory();
    const { isLoggedIn } = useAuth();
    if (!isLoggedIn().isLogged) history.push("/login");

    return (
        <BootCenterDevicesProvider>
            <ActiveLeftBarProvider>
                <Nav />
                <Route {...rest} component={(props) => <Component {...props} />} />
            </ActiveLeftBarProvider>
        </BootCenterDevicesProvider>

    );
};

export default PrivateRoute;
