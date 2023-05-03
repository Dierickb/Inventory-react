import {handleSubmit} from "./handleSubmit";
import {Input} from "../../layout";
import PropTypes from "prop-types";
import DropDownImage from "../../Inputs/DropDownImage";
import "./deviceInfo.scss"
import DropDownInternOperation from "../../Inputs/DropDownInternOperation";

const FormDeviceInfo = ({device}) => {

  return (
      <form id="deviceInfoForm" onSubmit={(e) => handleSubmit(e, device)}>

          <DropDownImage key={"image"+device.image} display="flex" mgLeft="5px" padding="0.4em 1em"
                         mgLSelect="10px" hgSelect="2.3em" pdSelector="0"
                            defaultValue={device?.image}/>

          <DropDownInternOperation key={"internOperation"+device.internOperation} display="flex" mgLeft="5px" padding="0.4em 1em"
                                   mgLSelect="10px" hgSelect="2.3em" pdSelector="0"
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