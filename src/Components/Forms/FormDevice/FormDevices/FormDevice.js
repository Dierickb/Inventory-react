import { useState, memo } from "react"

import { Input, DropDown, Button } from "../../../layout"

import {useFormDevice} from "./hooks"

const FormDevice = ({index, device, DropDownImage}) => {

  const [image, setImage] = useState(device?.image)
  const [action, setAction] = useState("")
  const [serial, setSerial] = useState(device?.serial)

  const {distpatchByAction} = useFormDevice()
  
  return (
      <tr>
        <td>{index}</td>
        <td><Input type="text" wd="80px" onChange={(e) => setSerial(e.target.value)}
          defaultValue={device.serial}/>
        </td>
        <td>{device.brand}</td>
        <td>{device.product}</td>
        <td>{device.model}</td>
        <td>{device.entryDate}</td>
        <td>{device.business}</td>
        <td>{device.pxeDate}</td>
        <td>
          <DropDownImage onChange={(e) => setImage(e.target.value)}
          defaultImage={device?.image} contentTitle="empty" />
        </td>
        <td>
          <DropDown onChange={async (e) => setAction(e.target.value)}>
            <option value="">Action</option>
            <option value="Update">Update</option>
            <option value="Delete">Delete</option>
          </DropDown>
        </td>
        <td>
          <Button onClick={() => distpatchByAction({action, device, image, serial})} 
            background="#b5f2f7" color="black">
              Distpatch
          </Button>
        </td>
    </tr>
  )
}

export default memo(FormDevice)