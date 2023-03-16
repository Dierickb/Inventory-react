import {useAuth} from "../Components/contexts/Auth";
import {Route, useHistory} from "react-router-dom";
import Nav from "../Components/Nav/Nav";
import {BootCenterDevicesProvider} from "../Components/contexts/BootCenterDevices";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const history = useHistory();
    const { isLoggedIn } = useAuth();

    if (!isLoggedIn()) history.push("/login");

    return (
        <BootCenterDevicesProvider>
            <Nav />
            <Route {...rest} component={(props) => <Component {...props} />} />
        </BootCenterDevicesProvider>

    );
};

export default PrivateRoute;
