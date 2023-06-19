import FormDevice from "./FormDevice"

const FormTBodyDevice  = ({devices}) => {
    return (
        <tbody>
            {devices?.length > 0 &&
                devices?.map((device, index) => (
                    <FormDevice
                        key={device?.serial} device={device} index={index+1}
                    />
                ))
            }
        </tbody>
    )
}

export default FormTBodyDevice