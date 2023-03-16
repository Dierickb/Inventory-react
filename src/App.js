import {AuthProvider} from "./Components/contexts/Auth";
import Routes from "./routes";
//import {BootCenterDevicesProvider} from "./Components/contexts/BootCenterDevices";

function App() {
    /*
    <AuthProvider>
        <BootCenterDevicesProvider>
            <Routes />
        </BootCenterDevicesProvider>
      </AuthProvider>
     */
  return (
      <AuthProvider>
            <Routes />
      </AuthProvider>

  )
}

export default App;
