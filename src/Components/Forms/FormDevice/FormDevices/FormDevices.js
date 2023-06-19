import { useEffect, memo } from "react";

import FormTBodyDevice from "./FormTBodyDevice"

import {useBootCenterDevices} from "../../../../contexts";
import {Card, DefaultTable} from "../../../layout/"

const FormDevices = () => {

    const { getDevices, state: bootCenterState, removeAllListeners } = useBootCenterDevices()

    useEffect(() => {
        getDevices()
        return () => removeAllListeners()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Card borderRadius="0" boxShadow="0" hg="calc(75vh - 15px)">
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
                        <th>Accion</th>
                    </tr>
                </thead>
                <FormTBodyDevice devices={bootCenterState?.devices}/>
            </DefaultTable>
        </Card>
    )
}

export default memo(FormDevices)