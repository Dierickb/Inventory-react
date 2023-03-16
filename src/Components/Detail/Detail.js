import Devices from "./Devices";
import {Details} from "../layout";
import {useState} from "react";
import DeviceInfo from "./DeviceInfo";
import {initialDevice} from "./utils/initialDevice";

const Detail = () => {
  const [device, setDevice] = useState(initialDevice)
  const showDevice = (deviceInfo) => {
      setDevice(deviceInfo)
  }
  const cleanDeviceInfo = () => {
      setDevice(initialDevice)
  }

  return (
      <Details pd='20px 0 0 0'>
          <Devices showDevice={showDevice}/>
          <DeviceInfo device={device} cleanDeviceInfo={cleanDeviceInfo} />
      </Details>
  )
}

export default Detail