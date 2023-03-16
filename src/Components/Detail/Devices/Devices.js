import {Card, CardHeader} from "../../layout";
import './devices.scss'
import Device from "../Device";
import {useEffect} from "react";
import { useBootCenterDevices } from "../../contexts/BootCenterDevices";

const Devices = ({showDevice}) => {

    const handleShowDevice = (device) => showDevice(device)
    const { getDevices, removeAllListeners, state } = useBootCenterDevices();

    useEffect(() => {
        getDevices()
        return () => removeAllListeners()
    }, [])

    if (state.loading) return <h3>Loading...</h3>

    return (
        <Card>
            <CardHeader>
                <h2>Equipos en stock {state.serial}</h2>
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