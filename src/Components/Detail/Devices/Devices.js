import {Card, CardHeader, DefaultTable} from "../../layout";
import rotateIcon from "./icons/rotate-solid.svg"

import {memo, useCallback} from "react";
import PropTypes from "prop-types";
import {useShowDevicesBootCenter} from "./hooks";
import {useFilters} from "../../../contexts";
import TBodyDevices from "./TBodyDevices";
import {DEVICE_PROPTYPES} from "../../common/propTypes";
import DropDownInternOperation from "../../Inputs/DropDownInternOperation/DropDownInternOperation";
import {inputsFilterDefaultValues} from "../../../utils/utilities";

const Devices = ({showDevice}) => {

    const {state, setFindDevice} = useShowDevicesBootCenter()
    const {state: filterState} = useFilters()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleShowDevice = useCallback((device) => showDevice(device), [])

    if (state?.loading) return <h3>Loading...</h3>

    return (
        <Card>
            <CardHeader>
                <h2>{state?.devices?.length} Equipos en stock</h2>

                <DropDownInternOperation defaultValue={inputsFilterDefaultValues.STORAGE} name={inputsFilterDefaultValues.STORAGE} title="Storage" bg="none" border="solid 1px" wd="20rem" titleOnOff="off" />

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

                <TBodyDevices devices={state?.devices} handleShowDevice={handleShowDevice} />

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