import {Card, CardHeader} from "../../layout";
import './devices.scss'
import rotateIcon from "./icons/rotate-solid.svg"

import Device from "../Device";
import {memo, useEffect} from "react";
import { useBootCenterDevices } from "../../../contexts";
import PropTypes from "prop-types";

const Devices = ({showDevice}) => {

    const { getDevices, removeAllListeners, state } = useBootCenterDevices();
    const handleShowDevice = (device) => showDevice(device)

    useEffect(() => {
        getDevices()
        return () => removeAllListeners()
    }, [])

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

export default Devices

Devices.prototype = {
    state: PropTypes.shape({
        loading: PropTypes.bool,
        error: PropTypes.bool,
        devices: PropTypes.arrayOf({
            builder: PropTypes.string,
            device: PropTypes.string,
            model: PropTypes.string,
            scotia: PropTypes.string,
            serial: PropTypes.string,
            entryDate: PropTypes.string,
            pxeDate: PropTypes.string,
        })
    })
}
