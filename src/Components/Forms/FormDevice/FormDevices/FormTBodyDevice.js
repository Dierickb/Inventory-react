import { lazy } from "react"
import FormDevice from "./FormDevice"

const DropDownImage = lazy(() => import("../../../Inputs/DropDownImage"))

const FormTBodyDevice = ({devices}) => {
    return ( 
        <tbody>
            {devices?.length > 0 &&
                devices?.map((device, index) => (
                    <FormDevice DropDownImage={DropDownImage}
                        key={device?.serial} device={device} index={index+1}
                    />
                ))
            }
        </tbody>
    )
}

export default FormTBodyDevice