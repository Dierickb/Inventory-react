import { BrowserRouter as Router,
    Switch,
    Redirect,
} from "react-router-dom";
import {lazy, Suspense} from "react";
import {useAuth} from "../contexts";
import PrivateRoute from "./PrivateRoute";
import PrivateLoginRoute from "./PrivateLoginRoute";
import {roles} from "../utils/utilities";

const Home = lazy(() => import("../pages/Home"))
const Auth = lazy(() => import("../pages/Auth"))
const Admin = lazy(() => import("../pages/Admin"))
const InternOperation = lazy(() => import("../pages/InternOperation"))

const Routes = () => {
    const { isLoggedIn } = useAuth();
    const {isLogged, rol} = isLoggedIn();
    const redirect = (isLogged) ? roles[rol] : "/login"

    return (
        <Router>
            <Suspense>
                <Switch>
                    <PrivateLoginRoute path="/login" component={Auth} />
                    <PrivateRoute exact path="/dashboard" component={Home} />
                    <PrivateRoute path="/dashboard/admin" component={Admin}/>
                    <PrivateRoute path="/dashboard/internOperation" component={InternOperation}/>
                    <Redirect to={redirect} />
                </Switch>
            </Suspense>

        </Router>
    )
}

export default Routes