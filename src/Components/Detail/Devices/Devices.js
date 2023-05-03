import {Card, CardHeader} from "../../layout";
import './devices.scss'
import rotateIcon from "./icons/rotate-solid.svg"

import Device from "../Device";
import {memo} from "react";
import PropTypes from "prop-types";
import {useShowDevicesBootCenter} from "./hooks";
import {useBootCenterDevices, useFilters} from "../../../contexts";

const Devices = ({showDevice}) => {

    const { getDevices, state: bootCenterState, setFindDevice, removeAllListeners } = useBootCenterDevices()
    const {state: filterState} = useFilters()

    const handleShowDevice = (device) => showDevice(device)

    useShowDevicesBootCenter(getDevices, removeAllListeners)

    if (bootCenterState.loading) return <h3>Loading...</h3>

    return (
        <Card>
            <CardHeader>
                <h2>{bootCenterState.devices.length} Equipos en stock</h2>
                <span onClick={() => setFindDevice(filterState)}>
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
                {bootCenterState.devices?.length > 0 &&
                    bootCenterState.devices.map((device, index) => (
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
            internOperation: PropTypes.string,
        })
    })
}
