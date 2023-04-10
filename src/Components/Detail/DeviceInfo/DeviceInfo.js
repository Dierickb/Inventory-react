import './deviceInfo.scss'
import {Card, CardHeader} from '../../layout';
import {CardFooter} from "../../layout/cards/CardFooter";
import FormDeviceInfo from "./FormDeviceInfo";
import BodyDeviceInfo from "./BodyDeviceInfo";
import PropTypes from "prop-types";

import trashIcon from "./icons/trash-can-regular.svg"
import {initialDevice} from "../utils/initialDevice";

const DeviceInfo = ({device, cleanDeviceInfo}) => {

    const handleCleanDevice = () => cleanDeviceInfo(initialDevice)

    return (
        <Card>
            <CardHeader fontSize="20px">
                <h2>Product Info
                    <div className="productInfo">
                        <h2>Serial: <p>{device.serial}</p></h2>
                    </div>
                </h2>
                <span onClick={handleCleanDevice}>
                   <img className="fas" src={trashIcon} alt=""/>
                </span>
            </CardHeader>

            <BodyDeviceInfo {...device} />

            <FormDeviceInfo device={device} />

            <CardFooter>
                <h5>Entered: <p>{device.entryDate}</p></h5>
                <h5>PXEd: <p>{device.pxeDate}</p></h5>
                <div className="form-group">
                    <p><input form="deviceInfoForm" name="event_update" type="submit" value="Actualizar" id="event_update" /></p>
                    <p><input form="deviceInfoForm" name="event_send" type="submit" value="Enviar" id="event_send" /></p>
                </div>
            </CardFooter>
        </Card>
    )
}

export default DeviceInfo

DeviceInfo.prototype = {
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
