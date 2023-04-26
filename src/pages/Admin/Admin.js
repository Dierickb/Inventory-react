import {useActiveLeftBar} from "../../contexts";
import DeviceSettings from "../../Components/Setting/DeviceSettings";
import UserSettings from "../../Components/Setting/UserSettings"
import BrandSettings from "../../Components/Setting/BrandSettings";
import {memo} from "react";

const Admin = () => {
  const {isActive} = useActiveLeftBar()
  return (

        <div className={`formContainer ${isActive ? 'active' : ''}`} id='mainContainer'>
            <DeviceSettings />
            <BrandSettings />
            <UserSettings />
        </div>
  )
}

export default memo(Admin)