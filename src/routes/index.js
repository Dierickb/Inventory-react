import { BrowserRouter as Router,
    Switch,
    Redirect,
} from "react-router-dom";
import Home from '../pages/Home'
import Auth from '../pages/Auth'
import {useAuth} from "../contexts/Auth";
import PrivateRoute from "./PrivateRoute";
import PrivateLoginRoute from "./PrivateLoginRoute";
import {roles} from "../utils/utilities";

const Routes = () => {
    const { isLoggedIn } = useAuth();
    const {isLogged, rol} = isLoggedIn();
    const redirect = (isLogged) ? roles[rol] : "/login"

    return (
        <Router>
            <Switch>
                <PrivateLoginRoute path="/login" component={Auth} />
                <PrivateRoute path="/dashboard" component={Home} />
                <Redirect to={redirect} />
            </Switch>
        </Router>
    )
}

export default Routes