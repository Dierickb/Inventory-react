import {inputsFilterDefaultValues} from "../../../utils/utilities"
import {toast} from "react-toastify"

export const handleSubmit = (e, device, handleOnSubmitData, eventsNames) => {
    e.preventDefault()
    if(Object.entries(device).length === 0) return

    let [image, internOperation, scotiaId, name] = e.target.elements
    image = image?.value
    internOperation = internOperation?.value
    scotiaId = scotiaId?.value
    name = name?.value

    let data = {
        ...device
    }

    if(!image && !internOperation && !scotiaId && !name) return
    
    if(e.nativeEvent.submitter.name === eventsNames.EVENT_SEND &&
        !image && !internOperation && !scotiaId && !name
    ) return
    
    if( e.nativeEvent.submitter.name === eventsNames.EVENT_UPDATE &&
        !device?.image && image === inputsFilterDefaultValues.image
    ) return
    
    if( (image === device?.image) &&
        (internOperation === device?.internOperation) &&
        (scotiaId === device?.scotiaId) &&
        (name === device?.clientName)
    ) return
    
    if( e.nativeEvent.submitter.name === eventsNames.EVENT_UPDATE ) {
        data.image = image
    }
   
    if(e.nativeEvent.submitter.name === eventsNames.EVENT_SEND) {
        data.internOperation = internOperation
        data.image = image
        data.customerOperation = image
        data.scotiaId = scotiaId
        data.clientName = name
    }
    
    if(!device?.serial) {
        toast(`You must select a device`)
        return
    }

    handleOnSubmitData({
        submitterName: e.nativeEvent.submitter.name,
        data: data,
    })
}