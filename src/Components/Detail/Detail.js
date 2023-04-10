import Devices from "./Devices";
import {Details} from "../layout";
import {memo, useState} from "react";
import DeviceInfo from "./DeviceInfo";
import {initialDevice} from "./utils/initialDevice";

const Detail =  () => {
  const [device, setDevice] = useState(initialDevice)
  const showDevice = (deviceInfo) => setDevice(deviceInfo)
  const cleanDeviceInfo = (deviceToClean) => setDevice(deviceToClean)

  return (
      <Details pd='20px 0 0 0'>
          <Devices showDevice={showDevice}/>
          <DeviceInfo device={device} cleanDeviceInfo={cleanDeviceInfo} />
      </Details>
  )
}

export default memo(Detail)