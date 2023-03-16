import {AuthProvider} from "./Components/contexts/Auth";
import Routes from "./routes";

function App() {
  return (
      <AuthProvider>
          <Routes />
      </AuthProvider>
  )
}

export default App;
