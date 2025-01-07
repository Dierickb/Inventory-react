import { toast } from 'react-toastify';

import {useBootCenterDevices} from "../../../../../contexts/BootCenterDevices"

export const useFormDevice = () => {

    const { updateDevice, deleteDevice, getDevices} = useBootCenterDevices()
    const distpatchByAction = async ({action, device, image, serial}) => {

        if(!action) {
            toast(`Select an Action in ${device.serial} to Distpatch`)
            return
        }
        if(!device) {
            toast(`You must select a device`)
            return
        }
        
        if(action === "Update") updateDevice({...device, image, itemToSearch: device.serial, serial})
            .then((result) => 
                toast(`💻 Device ${device.serial} has been updated
                    ${image!== device.image ? `with image ${result?.image}` : ""} 
                    ${(image!== device.image && serial!== device.serial) ? "and" : ""} 
                    ${serial!== device.serial ? `with serial ${result?.serial}` : ""} 
                `)
            )
        if(action === "Delete") deleteDevice({...device})
            .then((result) => 
                toast(`💻 Device ${serial} has been ${result} removed`)
            )
        await getDevices() 
    }

    return {
        distpatchByAction
    }
}