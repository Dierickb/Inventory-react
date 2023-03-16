import {eventButtonDeviceInfo} from "../../../utils/utilities";

export const handleSubmit = (e, device) => {
    e.preventDefault()
    if(Object.entries(device).length === 0) return;

    let [business, image, scotiaId, name] = e.target.elements;
    business = business?.value;
    image = image?.value;

    const data = {
        ...device,
        business: business,
        image: image,
    }

    if (eventButtonDeviceInfo[e.nativeEvent.submitter.name]
        && e.nativeEvent.submitter.name === "event_send") {
        data.scotiaId = scotiaId?.value;
        data.name = name?.value;
        // ipc to send data to delivered
        console.log(`The button pressed was ${e.nativeEvent.submitter.name}`)
        console.log(data)
        return
    }

    console.log(`The button pressed was ${e.nativeEvent.submitter.name}`)
    console.log(data)
}