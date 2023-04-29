import {Card, CardHeader} from "../../layout";
import './devices.scss'
import rotateIcon from "./icons/rotate-solid.svg"

import Device from "../Device";
import {memo} from "react";
import PropTypes from "prop-types";
import useShowDevicesBootCenter from "./hooks";

const Devices = ({showDevice}) => {

    const [state, getDevices] = useShowDevicesBootCenter()
    const handleShowDevice = (device) => showDevice(device)

    if (state.loading) return <h3>Loading...</h3>

    return (
        <Card>
            <CardHeader>
                <h2>Equipos en stock</h2>
                <span onClick={() => getDevices()}>
                    <img className="fas" src={rotateIcon} alt=""/>
                </span>
            </CardHeader>
            <table className='devices'>
                <thead>
                    <tr className='titlesHead'>
                        <th>Id</th>
                        <th>Serial</th>
                        <th>Fabricante</th>
                        <th>Producto</th>
                        <th>Modelo</th>
                        <th>Ingresó</th>
                        <th>Scotia</th>
                        <th>PXE</th>
                        <th>Imagen</th>
                    </tr>
                </thead>

                <tbody>
                {state.devices?.length > 0 &&
                    state.devices.map((device, index) => (
                        <Device key={device.serial} device={device}
                                index={index+1}
                                handleShowDevice={handleShowDevice}
                        />
                    ))
                }
                </tbody>

            </table>
        </Card>
    )
}

export default memo(Devices)

Devices.prototype = {
    state: PropTypes.shape({
        loading: PropTypes.bool,
        error: PropTypes.bool,
        devices: PropTypes.arrayOf({
            builder: PropTypes.string.isRequired,
            device: PropTypes.string.isRequired,
            model: PropTypes.string.isRequired,
            scotia: PropTypes.string.isRequired,
            serial: PropTypes.string.isRequired,
            entryDate: PropTypes.string,
            pxeDate: PropTypes.string,
            image: PropTypes.string,
            operationAssigned: PropTypes.string,
        })
    })
}
