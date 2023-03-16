import Nav from "../../Components/Nav";
import Register from "../../Components/Register";
import Detail from "../../Components/Detail";

const Home = () => {

    return (
        <div className="formContainer" id='mainContainer'>
            <Register />
            <Detail />
        </div>
    )
}

export default Home