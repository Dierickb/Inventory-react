import HandleSearch from "../HandleSearch";
import {useEffect} from "react";
//import {useBootCenterDevices} from "../../../../contexts";

const useDevicesFiltered = () => {
    const {handleSearchOnChange, handleSearchOnKeyPress, state} = HandleSearch()
    //const { getDevices } = useBootCenterDevices();

    useEffect(() => {
        // fetch to set devices filtered
        console.log(state)
        return () => console.log("Closed")
    }, [state])

    return [handleSearchOnChange, handleSearchOnKeyPress, state]
}

export default useDevicesFiltered