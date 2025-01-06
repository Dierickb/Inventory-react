import {AuthProvider} from "./contexts/Auth";
import Routes from "./routes";

const App = ({dev}) => {


  return (
    <AuthProvider dev={dev}>
      <Routes/>
    </AuthProvider>
  )

}

export default App;
