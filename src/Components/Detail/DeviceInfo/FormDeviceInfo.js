import {Input} from "../../layout";
import PropTypes from "prop-types";
import DropDownImage from "../../Inputs/DropDownImage";
import "./deviceInfo.scss"
import DropDownInternOperation from "../../Inputs/DropDownInternOperation";
import {useHandleSubmit} from "./hooks";
import {useState} from "react";
import {initialStateDeviceInfoSubmit} from "../../../utils/utilities";
import {handleSubmit} from "./handleSubmit";
import {eventsNames} from "./utils";
import {DEVICE_PROPTYPES} from "../../../common/propTypes";

const FormDeviceInfo = ({device}) => {

    const [onSubmitData, setOnSubmitData] = useState(initialStateDeviceInfoSubmit)

    const handleOnSubmitData = (data) => setOnSubmitData(data)
    useHandleSubmit({onSubmitData, device})

  return (
      <form id="deviceInfoForm" onSubmit={(e) => handleSubmit(e, device, handleOnSubmitData, eventsNames)}>

          <DropDownImage key={"image"+device.image}
                         display="flex" mgLeft="5px" padding="0.4em 1em"
                         mgLSelect="10px" hgSelect="2.3em" pdSelector="0 10px 0 10px"
                         defaultValue={device?.image} />

          <DropDownInternOperation key={"internOperation"+device.internOperation}
                                   display="flex" mgLeft="5px" padding="0.4em 1em"
                                   mgLSelect="10px" hgSelect="2.3em" pdSelector="0 10px 0 10px" textAlign=" "
                                   defaultValue={device?.internOperation}/>

          <div className="cardSection">
              <Input placeholder="ScotiaId" name="scotiaId" maxLength={8} />
          </div>
          <div className="cardSection">
              <Input placeholder="Nombre" name="name"/>
          </div>
      </form>
  )
}

export default FormDeviceInfo

FormDeviceInfo.prototype = {
    device: PropTypes.shape(DEVICE_PROPTYPES)
}