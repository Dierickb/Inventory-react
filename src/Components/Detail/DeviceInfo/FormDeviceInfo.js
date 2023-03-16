import {handleSubmit} from "./handleSubmit";
import {DropDown, Input} from "../../layout";
import PropTypes from "prop-types";

const FormDeviceInfo = ({device}) => {
  return (
      <form id="deviceInfoForm" onSubmit={(e) => handleSubmit(e, device)}>
          <div className="cardSection">
              Operation:
              <DropDown pd="0" hg="2.3em" mgL="10px" defaultValue="" name="business">
                  <option value="">Empresa</option>
                  <option value="1">GSG</option>
                  <option value="2">GBS</option>
              </DropDown>
          </div>
          <div className="cardSection">
              Imagen:
              <DropDown pd="0" hg="2.3em" mgL="10px" defaultValue="" name="image">
                  <option value="">Empresa</option>
                  <option value="1">GSG</option>
                  <option value="2">GBS</option>
              </DropDown>
          </div>
          <div className="cardSection">
              <Input placeholder="ScotiaId" name="scotiaId"/>
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
        builder: PropTypes.string,
        device: PropTypes.string,
        model: PropTypes.string,
        scotia: PropTypes.string,
        serial: PropTypes.string,
        entryDate: PropTypes.string,
        pxeDate: PropTypes.string,
    })
}