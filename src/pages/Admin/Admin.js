import {useActiveLeftBar} from "../../contexts";
import DeviceSettings from "../../Components/Settings/DeviceSettings/DeviceSettings";
import UserSettings from "../../Components/Settings/UserSettings/UserSettings"
import BrandSettings from "../../Components/Settings/BrandSettings/BrandSettings";
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