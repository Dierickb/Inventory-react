import {AuthProvider} from "./contexts/Auth";
import Routes from "./routes";
import {BrandProvider} from "./contexts/Brand";

const App = () => {

  return (
      <AuthProvider>
          <BrandProvider>
              <Routes />
          </BrandProvider>
      </AuthProvider>
  )
}

export default App;
