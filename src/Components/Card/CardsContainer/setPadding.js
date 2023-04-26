import {useLocation} from "react-router-dom";

export const SetPadding = (hasFormRegister, child) => {
    const sampleLocation = useLocation().pathname.split("/").slice(1);
    const url = !!sampleLocation.length && sampleLocation[1] === "admin"

    if(!url || !!child) return {padding: "0",url: url}
    if (!!url && hasFormRegister) return {padding: "0 20px 20px 20px", url: url}
    if (!!url && !hasFormRegister) return {padding: "0 20px 0px 20px", url: url}


}