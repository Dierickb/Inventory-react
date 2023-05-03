import './deviceRow.scss'
import {memo} from "react";
import PropTypes from "prop-types";

const Device = ({device, index, handleShowDevice}) => {
    const handleDevice = () => {
        handleShowDevice(device)
    }

  return (
      <tr>
          <td>{index}</td>
          <td>
              <button onClick={handleDevice}>
                  {device.serial}
              </button>
          </td>
          <td>{device.builder}</td>
          <td>{device.device}</td>
          <td>{device.model}</td>
          <td>{device.entryDate}</td>
          <td>{device.scotia}</td>
          <td>{device.pxeDate}</td>
          <td>{device.image}</td>
      </tr>
  )
}

export default memo(Device)

Device.prototype = {
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