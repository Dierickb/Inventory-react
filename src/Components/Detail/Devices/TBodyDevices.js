import Device from "../Device/Device";
import {memo} from "react";
import PropTypes from "prop-types";

const TBodyDevices = ({devices, handleShowDevice}) => {
  return (
      <tbody>
      {devices?.length > 0 &&
          devices.map((device, index) => (
              <Device key={device.serial} device={device}
                      index={index+1}
                      handleShowDevice={handleShowDevice}
              />
          ))
      }
      </tbody>
  )
}

export default memo(TBodyDevices)

TBodyDevices.prototype = {
    handleShowDevice: PropTypes.func,
    devices: PropTypes.arrayOf({
        builder: PropTypes.string.isRequired,
        device: PropTypes.string.isRequired,
        model: PropTypes.string.isRequired,
        scotia: PropTypes.string.isRequired,
        serial: PropTypes.string.isRequired,
        entryDate: PropTypes.string,
        pxeDate: PropTypes.string,
        image: PropTypes.string,
        internOperation: PropTypes.string,
    }),
}