import './deviceRow.scss'
import {memo} from "react";

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