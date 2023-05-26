import Device from "../Device";
import PropTypes from "prop-types";
import {DEVICE_PROPTYPES} from "../../common/propTypes";

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

export default TBodyDevices

TBodyDevices.prototype = {
    handleShowDevice: PropTypes.func,
    devices: PropTypes.arrayOf(DEVICE_PROPTYPES),
}