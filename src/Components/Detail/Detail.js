import Devices from "./Devices";
import {Details} from "../layout";
import {memo, useCallback, useState} from "react";
import DeviceInfo from "./DeviceInfo";
import {initialDevice} from "./utils/initialDevice";
import PropTypes from "prop-types";

const Detail =  () => {
  const [device, setDevice] = useState(initialDevice)

  const showDevice = useCallback((deviceInfo) => setDevice(deviceInfo), [])
  const cleanDeviceInfo = useCallback((deviceToClean) => setDevice(deviceToClean), [])

  return (
      <Details pd='20px 0 0 0'>
          <Devices showDevice={showDevice}/>
          <DeviceInfo device={device} cleanDeviceInfo={cleanDeviceInfo} />
      </Details>
  )
}

export default memo(Detail)

Detail.prototype = {
    device: PropTypes.shape({
        builder: PropTypes.string.isRequired,
        device: PropTypes.string.isRequired,
        model: PropTypes.string.isRequired,
        scotia: PropTypes.string.isRequired,
        serial: PropTypes.string.isRequired,
        entryDate: PropTypes.string,
        pxeDate: PropTypes.string,
        image: PropTypes.string,
        internOperation: PropTypes.string,
    })
}