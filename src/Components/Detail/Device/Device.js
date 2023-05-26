import './deviceRow.scss'
import {memo} from "react";
import PropTypes from "prop-types";
import {Button} from "../../layout";
import {setBackGroundByDate} from "./setBackGroundByDate";
import {DEVICE_PROPTYPES} from "../../common/propTypes";

const Device = ({device, index, handleShowDevice}) => {
    const handleDevice = () => {
        handleShowDevice(device)
    }

  return (
      <tr>
          <td>{index}</td>
          <td>
              <Button background={setBackGroundByDate({...device})} onClick={handleDevice}>
                  {device.serial}
              </Button>
          </td>
          <td>{device.brand}</td>
          <td>{device.product}</td>
          <td>{device.model}</td>
          <td>{device.entryDate}</td>
          <td>{device.business}</td>
          <td>{device.pxeDate}</td>
          <td>{device.image}</td>
      </tr>
  )
}

export default memo(Device)

Device.prototype = {
    index: PropTypes.number,
    device: PropTypes.shape(DEVICE_PROPTYPES),
    handleShowDevice: PropTypes.func,
}