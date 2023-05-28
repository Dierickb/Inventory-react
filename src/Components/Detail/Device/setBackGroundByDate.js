export const setBackGroundByDate = ({pxeDate}) => {
    if(!pxeDate) return "#a1a1a1"

    const dateParts = pxeDate.split("/");
    const dateObject = new Date(dateParts[2], dateParts[1] - 1, +dateParts[0]);
    const dateNow = new Date()

    const rest = dateNow.getTime() - dateObject.getTime()
    const days = Math.round(rest/ (1000*60*60*24))

    return () => {
        if (days > 13) return "#621717"
        if (days <= 13 && days > 5) return "#CCBC3A"
        return "#088993FF"
    }
}