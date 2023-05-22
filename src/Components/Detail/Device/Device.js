import './deviceRow.scss'
import {memo} from "react";
import PropTypes from "prop-types";
import {Button} from "../../layout";

const Device = ({device, index, handleShowDevice}) => {
    const handleDevice = () => {
        handleShowDevice(device)
    }

    const dateParts = device.pxeDate.split("/");
    const dateObject = new Date(dateParts[2], dateParts[1] - 1, +dateParts[0]);
    const dateNow = new Date()

    const rest = dateNow.getTime() - dateObject.getTime()
    const days = Math.round(rest/ (1000*60*60*24))

    const backGround = () => {
        if (days > 13) return "#621717"
        if(days <= 13  && days > 5) return "#CCBC3A"
        return "#088993FF"
    }

  return (
      <tr>
          <td>{index}</td>
          <td>
              <Button background={backGround} onClick={handleDevice}>
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
    device: PropTypes.shape({
        brand: PropTypes.string.isRequired,
        product: PropTypes.string.isRequired,
        model: PropTypes.string.isRequired,
        business: PropTypes.string.isRequired,
        serial: PropTypes.string.isRequired,
        entryDate: PropTypes.string,
        pxeDate: PropTypes.string,
        image: PropTypes.string,
        internOperation: PropTypes.string,
    })
}