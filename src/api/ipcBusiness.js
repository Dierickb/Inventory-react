import {businesses} from "../utils/testData";

export const ipcBusiness = () => {
    const getIpcBusiness = async() => {
        return businesses
    }

    return {
        getIpcBusiness
    }
}