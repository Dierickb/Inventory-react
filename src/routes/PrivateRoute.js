import {useAuth} from "../contexts";
import {Route, useHistory} from "react-router-dom";
import Nav from "../Components/Nav/Nav";
import {BootCenterDevicesProvider} from "../contexts/BootCenterDevices";
import {ActiveLeftBarProvider} from "../contexts/ActiveLeftBar";
import {BrandProvider} from "../contexts/Brand";
import {Filters} from "../contexts/Filters"

const PrivateRoute = ({ component: Component, ...rest }) => {
    const history = useHistory();
    const { isLoggedIn } = useAuth();
    if (!isLoggedIn().isLogged) history.push("/login");

    return (
        <BrandProvider>
            <BootCenterDevicesProvider>
                <ActiveLeftBarProvider>
                    <Filters>
                        <Nav />
                        <Route {...rest} component={(props) => <Component {...props} />} />
                    </Filters>
                </ActiveLeftBarProvider>
            </BootCenterDevicesProvider>
        </BrandProvider>
    );
};

export default PrivateRoute;
