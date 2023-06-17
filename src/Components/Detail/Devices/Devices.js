import {Card, CardHeader, DefaultTable} from "../../layout";
import rotateIcon from "./icons/rotate-solid.svg"

import {memo, useCallback} from "react";
import PropTypes from "prop-types";
import {useShowDevicesBootCenter} from "./hooks";
import {useBootCenterDevices, useFilters} from "../../../contexts";
import TBodyDevices from "./TBodyDevices";
import {DEVICE_PROPTYPES} from "../../common/propTypes";

const Devices = ({showDevice}) => {

    const { getDevices, state: bootCenterState, setFindDevice, removeAllListeners } = useBootCenterDevices()
    const {state: filterState} = useFilters()

    const handleShowDevice = useCallback((device) => showDevice(device), [])

    useShowDevicesBootCenter(getDevices, removeAllListeners)

    if (bootCenterState.loading) return <h3>Loading...</h3>

    return (
        <Card>
            <CardHeader>
                <h2>{bootCenterState?.devices?.length} Equipos en stock</h2>
                <span onClick={async () => await setFindDevice(filterState)}>
                    <img className="fas" src={rotateIcon} alt=""/>
                </span>
            </CardHeader>
            <DefaultTable>
                <thead>
                    <tr>
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

                <TBodyDevices devices={bootCenterState.devices} handleShowDevice={handleShowDevice} />

            </DefaultTable>
        </Card>
    )
}

export default memo(Devices)

Devices.prototype = {
    showDevice: PropTypes.func,
    state: PropTypes.shape({
        loading: PropTypes.bool,
        error: PropTypes.bool,
        devices: PropTypes.arrayOf(DEVICE_PROPTYPES)
    })
}